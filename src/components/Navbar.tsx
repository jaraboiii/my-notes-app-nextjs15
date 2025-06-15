"use client";

import { signIn, signOut, SessionProvider, useSession } from "next-auth/react";
import type { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="fixed top-0 w-full p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:text-blue-500 transition-colors cursor-pointer">
            MyNoteApp
          </h1>
        </Link>
        {session ? (
          <div className="flex gap-4 justify-center items-center">
            <h1>{session.user?.name}</h1>
            <Button
              className="bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors"
              variant="destructive"
              size="lg"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            size="lg"
            onClick={() => signIn()}
            className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Started
          </Button>
        )}
      </div>
    </nav>
  );
}
