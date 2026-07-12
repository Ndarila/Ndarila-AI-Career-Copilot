import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Sidebar from "@/components/layout/Sidebar";
import { AuthProvider } from "./providers/AuthProvider";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NdarilaAI Career Copilot",
  description: "AI-powered Career Copilot",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white`}
      >

        <AuthProvider>

          <div className="flex h-screen">

            <Sidebar />

            <main className="flex-1 overflow-y-auto">
              {children}
            </main>

          </div>

        </AuthProvider>

      </body>

    </html>
  );
}