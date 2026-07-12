from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

from app.database.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin

from app.utils.security import (
    hash_password,
    verify_password
)

from app.utils.jwt import (
    create_access_token
)


router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


# ==========================================
# JWT Configuration
# ==========================================

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/auth/login"
)


SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"



# ==========================================
# Get Current Logged In User
# ==========================================

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )


        email = payload.get("sub")


        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid authentication token"
            )


    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid authentication token"
        )


    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


    if user is None:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    return user



# ==========================================
# Register User
# ==========================================

@router.post(
    "/register",
    status_code=201
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )


    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )


    new_user = User(

        username=user.username,

        email=user.email,

        hashed_password=hash_password(
            user.password
        ),

    )


    db.add(new_user)

    db.commit()

    db.refresh(new_user)


    return {

        "message": "User registered successfully.",

        "user": {

            "username": new_user.username,

            "email": new_user.email,

        },

    }



# ==========================================
# Login User
# ==========================================

@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )


    print("========== LOGIN DEBUG ==========")

    print("DB User:", db_user)


    if db_user:

        print(
            "Email:",
            db_user.email
        )


        print(
            "Stored Hash:",
            db_user.hashed_password
        )


        password_match = verify_password(

            user.password,

            db_user.hashed_password

        )


        print(
            "Password Match:",
            password_match
        )


    else:

        password_match = False



    print("=================================")



    if not db_user or not password_match:

        raise HTTPException(

            status_code=401,

            detail="Invalid email or password."

        )



    access_token = create_access_token(

        {
            "sub": db_user.email
        }

    )



    return {

        "message": "Login successful.",

        "access_token": access_token,

        "token_type": "bearer",

        "user": {

            "username": db_user.username,

            "email": db_user.email,

        },

    }