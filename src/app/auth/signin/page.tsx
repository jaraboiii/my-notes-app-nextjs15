"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-6">Sign In</h1>
        <p className="text-lg mb-8">Choose how you want to sign in:</p>
        
        <button
            onClick={() => signIn("github", { callbackUrl })}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors mb-4 flex gap-3"
        >
            <FaGithub className="text-xl" />
            <span>Sign in with GitHub</span>
        </button>

        <button
            onClick={() => signIn("email", { callbackUrl })}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4 flex gap-3"
        >
            <MdEmail className="text-xl" />
            <span>Sign in with Email</span>
        </button>
    </div>
  )
}