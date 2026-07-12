from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app.services.resume_service import extract_resume_text
from app.services.openai_service import ask_career_ai

router = APIRouter(
    prefix="/api/job-matcher",
    tags=["Job Matcher"],
)


@router.post("/match")
async def match_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are supported."
        )

    resume_text = extract_resume_text(file)

    prompt = f"""
You are NdarilaAI Job Matcher.

Compare the candidate's resume against the job description.

Return professional Markdown.

Your response MUST contain:

# Match Score
Score out of 100.

# Hiring Probability
High / Medium / Low

# Strengths
Bullet list.

# Missing Keywords
Bullet list.

# Skills Gap
Bullet list.

# Resume Improvements
Bullet list.

# Tailored Resume Summary
Write a professional summary customized for this job.

# Interview Questions
Generate 10 likely interview questions.

Resume

{resume_text}

Job Description

{job_description}
"""

    response = ask_career_ai(prompt)

    return {
        "analysis": response
    }