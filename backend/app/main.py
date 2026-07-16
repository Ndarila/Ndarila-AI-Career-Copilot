from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# ==================================================
# Database
# ==================================================

from app.database import Base, engine
from app.models import user

# ==================================================
# Routers
# ==================================================

from app.routers import (
    auth,
    ai,
    resume,
    job,
    job_matcher,
    interview,
    roadmap,
    dashboard,
)

# ==================================================
# Create Database Tables
# ==================================================

Base.metadata.create_all(bind=engine)

# ==================================================
# FastAPI Application
# ==================================================

app = FastAPI(
    title="NdarilaAI Career Copilot API",
    version="1.3.0",
    description="""
# 🤖 NdarilaAI Career Copilot API

AI-powered career acceleration platform.

Features:
- JWT Authentication
- AI Career Copilot
- Resume Analyzer
- Job Matcher
- Interview Coach
- Career Roadmap
- Dashboard Analytics

Built with:
- FastAPI
- SQLAlchemy
- OpenRouter AI
""",
)

# ==================================================
# CORS Configuration (Production + Vercel + Fly.io)
# ==================================================

app.add_middleware(
    CORSMiddleware,

    # Allow frontend applications
    allow_origin_regex=(
        r"https?://.*"
    ),

    # Allow cookies / authorization headers
    allow_credentials=True,

    # Allow all HTTP methods
    allow_methods=["*"],

    # Allow all request headers
    allow_headers=["*"],

    # Expose response headers
    expose_headers=["*"],
)

# ==================================================
# Register API Routers
# ==================================================

app.include_router(auth.router)
app.include_router(ai.router)
app.include_router(resume.router)
app.include_router(job.router)
app.include_router(job_matcher.router)
app.include_router(interview.router)
app.include_router(roadmap.router)
app.include_router(dashboard.router)

# ==================================================
# Health Check
# ==================================================

@app.get("/", tags=["Home"])
async def home():
    return {
        "name": "NdarilaAI Career Copilot API",
        "version": "1.3.0",
        "status": "running",
        "database": "connected",
        "authentication": "JWT Enabled",
        "ai_provider": "OpenRouter AI",
        "modules": {
            "authentication": True,
            "career_copilot": True,
            "resume_analyzer": True,
            "job_matcher": True,
            "interview_coach": True,
            "career_roadmap": True,
            "dashboard": True,
        },
    }