from fastapi import APIRouter, Depends

from app.routers.auth import get_current_user


router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)



@router.get("/stats")
def dashboard_stats(
    current_user = Depends(get_current_user)
):

    return {

        "user": {
            "username": current_user.username,
            "email": current_user.email,
        },


        "stats": {

            "career_score": "82%",
            "ai_sessions": 24,
            "job_matches": 15

        },


        "recent_activity": [

            {
                "title": "Career Copilot session completed",
                "status": "completed"
            },


            {
                "title": "Resume analysis completed",
                "status": "completed"
            },


            {
                "title": "Job match generated",
                "status": "completed"
            }

        ],


        "modules": {

            "career_copilot": True,
            "resume_analyzer": True,
            "job_matcher": True,
            "interview_coach": True,
            "career_roadmap": True

        }

    }