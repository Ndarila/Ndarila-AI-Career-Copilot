from fastapi import APIRouter
from pydantic import BaseModel

from app.services.openai_service import ask_career_ai


router = APIRouter(
    prefix="/api/interview",
    tags=["Interview Coach"],
)


class InterviewRequest(BaseModel):
    role: str
    question: str
    answer: str


@router.post("/review")
async def review_interview(request: InterviewRequest):

    prompt = f"""
You are NdarilaAI Interview Coach, an expert technical interviewer
and career mentor.

The candidate is interviewing for the role:

{request.role}

Interview Question:

{request.question}

Candidate Answer:

{request.answer}

Analyze the candidate's response and provide detailed coaching.

Return your response in professional Markdown using these sections:

# Overall Score

Give a score out of 100.

# Answer Evaluation

Explain how well the answer addressed the question.

# Strengths

List the strongest parts of the response.

# Weaknesses

List areas that need improvement.

# Technical Feedback

Evaluate technical accuracy, depth, and practical understanding.

# Communication Feedback

Evaluate clarity, confidence, and structure.

# Improved Answer

Rewrite the candidate's answer into a stronger interview response.

# STAR Method Improvement

Show how the answer could be improved using:
- Situation
- Task
- Action
- Result

# Final Recommendation

Provide advice for the next interview attempt.
"""

    response = ask_career_ai(prompt)

    return {
        "feedback": response
    }