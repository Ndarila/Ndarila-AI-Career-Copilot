"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/providers/AuthProvider";


interface ProtectedRouteProps {
  children: ReactNode;
}


export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {

  const router = useRouter();

  const { token } = useAuth();

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (!token) {

      router.push("/login");

    } else {

      setLoading(false);

    }

  }, [token, router]);



  if (loading) {

    return (

      <div className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-slate-950
        text-white
      ">

        Checking authentication...

      </div>

    );

  }



  return (

    <>
      {children}
    </>

  );

}