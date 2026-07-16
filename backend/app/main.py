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
""",
)

# ==================================================
# CORS Configuration
# ==================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ndarila-ai-career-copilot.vercel.app",
        "https://www.ndarila-ai-career-copilot.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# ==================================================
# Register Routers
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
# Home
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
    }