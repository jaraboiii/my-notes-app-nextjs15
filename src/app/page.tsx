"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {session ? (
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {session.user?.name || session.user?.email}!
        </h1>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Notes App!</h1>
          <p className="text-lg mb-8">Please sign in to continue.</p>
        </div>
      )}
    </div>
  )
}