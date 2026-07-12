from fastapi import APIRouter
from pydantic import BaseModel

from app.services.openai_service import ask_career_ai

router = APIRouter(
    prefix="/api/job",
    tags=["Job Matcher"],
)


class JobMatchRequest(BaseModel):
    resume: str
    job_description: str


@router.post("/match")
async def match_job(request: JobMatchRequest):

    prompt = f"""
You are an expert ATS Job Matching AI.

Compare the resume against the job description.

Return your answer in Markdown using these sections:

# Match Score
Give a score out of 100.

# Matching Skills

# Missing Skills

# ATS Keywords

# Interview Focus Areas

# Recommendations

Resume:

{request.resume}

Job Description:

{request.job_description}
"""

    response = ask_career_ai(prompt)

    return {
        "analysis": response
    }