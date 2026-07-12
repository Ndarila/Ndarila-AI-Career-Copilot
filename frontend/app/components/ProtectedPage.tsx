"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/providers/AuthProvider";


export default function ProtectedPage({
  children,
}: {
  children: ReactNode;
}) {

  const router = useRouter();

  const { token } = useAuth();


  useEffect(() => {

    if (!token) {
      router.push("/login");
    }

  }, [token, router]);



  if (!token) {

    return (
      <div
        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-slate-950
        text-white
        "
      >
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