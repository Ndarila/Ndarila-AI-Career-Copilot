const API =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://ndarila-ai-career-copilot.onrender.com";

// ----------------------
// Authentication
// ----------------------

export async function login(
  email: string,
  password: string
) {
  const response = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Login failed");
  }

  return data;
}

export async function register(
  username: string,
  email: string,
  password: string
) {
  const response = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Registration failed");
  }

  return data;
}

// ----------------------
// Career AI
// ----------------------

export async function careerAI(question: string) {
  const response = await fetch(`${API}/api/ai/career`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Career AI request failed");
  }

  return data;
}