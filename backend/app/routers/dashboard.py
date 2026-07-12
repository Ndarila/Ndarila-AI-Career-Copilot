from fastapi import APIRouter, Depends

from app.routers.auth import get_current_user


router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"],
)


# ==========================================
# Dashboard Statistics
# ==========================================

@router.get("/stats")
async def dashboard_stats(
    user=Depends(get_current_user)
):

    return {

        "success": True,

        "user": {

            "username": user.username,

            "email": user.email,

        },


        "dashboard": {

            "career_score": 82,

            "ai_sessions": 24,

            "job_matches": 15,

        },


        "recent_activity": [

            {
                "title": "Career Copilot Session",
                "description": "AI career guidance completed",
                "status": "completed",
            },

            {
                "title": "Resume Analysis",
                "description": "CV ATS analysis completed",
                "status": "completed",
            },

            {
                "title": "Job Matching",
                "description": "Skills matched with opportunities",
                "status": "completed",
            },

        ],


        "available_tools": [

            {
                "name": "Career Copilot",
                "route": "/tools/career-copilot",
                "icon": "💬",
            },

            {
                "name": "Resume Analyzer",
                "route": "/tools/resume-analyzer",
                "icon": "📄",
            },

            {
                "name": "Job Matcher",
                "route": "/tools/job-matcher",
                "icon": "🎯",
            },

            {
                "name": "Interview Coach",
                "route": "/tools/interview-coach",
                "icon": "🎤",
            },

        ],

    }