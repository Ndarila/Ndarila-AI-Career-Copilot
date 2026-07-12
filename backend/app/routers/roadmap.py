from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.openai_service import ask_career_ai


router = APIRouter(
    prefix="/api/roadmap",
    tags=["Career Roadmap"]
)


class RoadmapRequest(BaseModel):
    goal: str
    experience: str
    skills: str


@router.post("/generate")
async def generate_roadmap(request: RoadmapRequest):

    prompt = f"""
Create a personalized career roadmap.

Career Goal:
{request.goal}

Current Experience:
{request.experience}

Current Skills:
{request.skills}

Generate:

1. Current Assessment
2. Missing Skills
3. 30 Day Plan
4. 90 Day Plan
5. 6 Month Plan
6. Recommended Projects
7. Certifications
8. Job Search Strategy

Return a structured markdown response.
"""


    try:
        roadmap = ask_career_ai(prompt)

        return {
            "success": True,
            "roadmap": roadmap
        }


    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Roadmap Error: {str(e)}"
        )