"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/lib/api";
import { useAuth } from "@/app/providers/AuthProvider";


export default function LoginPage() {

  const router = useRouter();

  const { loginUser } = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const response = await login(
        email,
        password
      );


      console.log("LOGIN RESPONSE:", response);


      if (!response.access_token) {

        throw new Error(
          "Login failed. No access token received."
        );

      }


      loginUser(
        response.access_token,
        response.user
      );


      router.push("/dashboard");


    } catch (err:any) {


      console.error(err);


      if (err.response?.data?.detail) {

        setError(
          err.response.data.detail
        );

      }

      else if (err.message) {

        setError(
          err.message
        );

      }

      else {

        setError(
          "Invalid email or password."
        );

      }


    } finally {

      setLoading(false);

    }

  }



  return (

    <div className="
      flex 
      min-h-screen 
      items-center 
      justify-center 
      bg-slate-950
      px-4
    ">


      <form

        onSubmit={handleLogin}

        className="
          w-full 
          max-w-md 
          rounded-xl 
          bg-slate-900 
          p-8 
          shadow-2xl
        "

      >


        <h1 className="
          mb-6
          text-center
          text-3xl
          font-bold
          text-white
        ">

          Login to NdarilaAI

        </h1>



        {error && (

          <div
            className="
              mb-4
              rounded
              bg-red-500/20
              p-3
              text-center
              text-red-300
            "
          >

            {error}

          </div>

        )}




        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="
            mb-4
            w-full
            rounded
            bg-slate-800
            p-3
            text-white
            outline-none
            focus:ring-2
            focus:ring-cyan-500
          "

          required

        />





        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="
            mb-6
            w-full
            rounded
            bg-slate-800
            p-3
            text-white
            outline-none
            focus:ring-2
            focus:ring-cyan-500
          "

          required

        />





        <button

          type="submit"

          disabled={loading}

          className="
            w-full
            rounded
            bg-cyan-500
            p-3
            font-bold
            text-black
            transition
            hover:bg-cyan-400
            disabled:opacity-50
          "

        >

          {loading 
            ? "Logging in..."
            : "Login"
          }

        </button>



      </form>


    </div>

  );

}