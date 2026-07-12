from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.openai_service import ask_career_ai


router = APIRouter(
    prefix="/api/ai",
    tags=["Career AI"]
)


# ============================
# Request Schema
# ============================

class CareerRequest(BaseModel):
    question: str


# ============================
# Career AI Endpoint
# ============================

@router.post("/career")
async def career_ai(request: CareerRequest):

    try:
        response = ask_career_ai(
            request.question
        )

        return {
            "success": True,
            "question": request.question,
            "response": response
        }


    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )