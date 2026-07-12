from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.resume_service import extract_resume_text
from app.services.openai_service import ask_career_ai

router = APIRouter(
    prefix="/api/resume",
    tags=["Resume Analyzer"],
)


@router.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):

    # Only accept PDF files
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are supported.",
        )

    # Extract text from the uploaded resume
    resume_text = extract_resume_text(file)

    # AI Prompt
    prompt = f"""
You are NdarilaAI Resume Analyzer.

You are an expert ATS Resume Reviewer and Career Coach.

Analyze the resume below and respond in professional Markdown.

Your response MUST contain these sections:

# ATS Score
Give a score out of 100.

# Professional Summary
Briefly summarize the candidate's profile.

# Strengths
Use bullet points.

# Weaknesses
Use bullet points.

# Missing Keywords
List important ATS keywords that should be added.

# Recommended Skills
List technical and soft skills the candidate should learn.

# Resume Improvements
Provide actionable suggestions to improve the resume.

# Career Recommendations
Suggest suitable job titles for this candidate.

Resume:

{resume_text}
"""

    # Get AI response
    response = ask_career_ai(prompt)

    return {
        "analysis": response
    }