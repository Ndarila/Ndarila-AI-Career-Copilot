"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        let errorMessage = "Registration failed";


        if (Array.isArray(data.detail)) {
          errorMessage = data.detail[0]?.msg || errorMessage;

        } else if (typeof data.detail === "string") {
          errorMessage = data.detail;
        }


        setMessage(errorMessage);
        return;
      }


      setMessage(
        "Account created successfully! Redirecting..."
      );


      setTimeout(() => {
        router.push("/login");
      }, 1500);


    } catch (error) {

      setMessage(
        "Cannot connect to backend server"
      );


    } finally {

      setLoading(false);

    }
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-xl bg-slate-900 p-8 shadow-xl"
      >

        <h1 className="mb-6 text-center text-3xl font-bold">
          Create NdarilaAI Account
        </h1>


        {/* Username */}

        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full rounded bg-slate-800 p-3 outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />


        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded bg-slate-800 p-3 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        {/* Password */}

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded bg-slate-800 p-3 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />


        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 p-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>


        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("success")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

      </form>

    </div>
  );
}