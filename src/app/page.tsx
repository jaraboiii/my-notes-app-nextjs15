"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p>Loading authentication status...</p>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {session.user?.name || session.user?.email}!
        </h1>
        <p className="text-lg mb-8">You are logged in.</p>
        <button
          onClick={() => signOut()} // ปุ่ม Sign out
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Sign out
        </button>
        <div className="mt-8">
          <p className="text-gray-600">Your notes will appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Notes App!</h1>
      <p className="text-lg mb-8">Please sign in to continue.</p>
      <button
        onClick={() => signIn()} // ปุ่ม Sign in
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Sign in
      </button>
    </div>
  )
}