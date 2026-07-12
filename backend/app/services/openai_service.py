import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)


def ask_career_ai(question: str):
    try:
        completion = client.chat.completions.create(
            model="deepseek/deepseek-chat-v3-0324",
            max_tokens=512,
            temperature=0.7,
            messages=[
                {
                    "role": "system",
                    "content": """
You are NdarilaAI Career Copilot.

You are an expert AI career mentor.

You help professionals with:

- Data Analysis
- Business Intelligence
- Data Science
- AI Engineering
- Machine Learning
- Python
- SQL
- FastAPI
- GitHub
- Portfolio Reviews
- ATS CV Optimization
- LinkedIn Optimization
- Interview Preparation
- Career Roadmaps

Guidelines:

- Always respond professionally.
- Use Markdown formatting.
- Be encouraging and practical.
- Give step-by-step guidance.
- Keep answers under 300 words unless more detail is requested.
""",
                },
                {
                    "role": "user",
                    "content": question,
                },
            ],
        )

        return completion.choices[0].message.content

    except Exception as e:
        print("OpenRouter Error:", e)

        return f"""
# 🤖 NdarilaAI Career Copilot

I'm currently unable to reach the AI service.

### Your Question

> {question}

### Recommended Career Advice

If your goal is becoming a Data Analyst or AI Engineer, focus on:

- ✅ Python
- ✅ SQL
- ✅ Power BI
- ✅ Machine Learning
- ✅ FastAPI
- ✅ GitHub Portfolio
- ✅ LinkedIn Optimization

### Next Steps

1. Build real-world portfolio projects.
2. Upload them to GitHub.
3. Tailor your CV for every application.
4. Practice technical and behavioural interviews.
5. Apply consistently and keep learning.

**Technical Details:** `{str(e)}`
"""