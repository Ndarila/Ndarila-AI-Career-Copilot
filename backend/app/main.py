from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# ==================================================
# Database
# ==================================================

from app.database import Base, engine


# Register Models
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

---

## 🔐 Authentication

- User registration
- JWT login
- Secure sessions
- Protected user routes


## 🤖 Career Copilot

- AI career advice
- Career planning
- Professional guidance
- Learning recommendations


## 📄 Resume Analyzer

- CV upload
- ATS scoring
- Resume strengths
- Resume weaknesses
- Missing keywords
- Resume improvements


## 🎯 Job Matcher

- Resume matching
- Job description analysis
- Compatibility score
- Skills gap analysis
- ATS keyword matching


## 🎤 Interview Coach

- AI mock interviews
- Technical interview questions
- HR interview preparation
- Answer evaluation
- Feedback scoring


## 🗺️ Career Roadmap

- Personalized learning paths
- Skill recommendations
- Certifications
- Career milestones


## 📊 Dashboard Analytics

- Career score
- AI sessions tracking
- Job match tracking
- User activity overview


Built with:

- FastAPI
- SQLAlchemy
- SQLite/PostgreSQL
- OpenRouter AI
- JWT Authentication

"""

)



# ==================================================
# CORS Configuration
# ==================================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:3000",

        "http://127.0.0.1:3000",

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)



# ==================================================
# Register API Routers
# ==================================================

routers = [

    auth.router,

    ai.router,

    resume.router,

    job.router,

    job_matcher.router,

    interview.router,

    roadmap.router,

    dashboard.router,

]


for router in routers:

    app.include_router(router)



# ==================================================
# Home / Health Check
# ==================================================

@app.get("/", tags=["Home"])
async def home():

    return {


        "name":
        "NdarilaAI Career Copilot API",


        "version":
        "1.3.0",


        "status":
        "running",


        "database":
        "connected",


        "authentication":
        "JWT Enabled",


        "ai_provider":
        "OpenRouter AI",



        "modules": {


            "authentication":
            True,


            "career_copilot":
            True,


            "resume_analyzer":
            True,


            "job_matcher":
            True,


            "interview_coach":
            True,


            "career_roadmap":
            True,


            "dashboard":
            True,

        },



        "routes": {


            "authentication":
            "/api/auth",


            "career_ai":
            "/api/ai/career",


            "resume_analyzer":
            "/api/resume/analyze",


            "job_matcher":
            "/api/job-matcher/match",


            "interview_coach":
            "/api/interview/review",


            "career_roadmap":
            "/api/roadmap/generate",


            "dashboard":
            "/api/dashboard/stats",

        },



        "documentation": {


            "swagger":
            "/docs",


            "redoc":
            "/redoc",


            "openapi":
            "/openapi.json",

        }


    }