"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Import shadcn/ui components
import { Button } from "@/components/ui/button"; // Assuming your shadcn/ui components are in this path
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-lg">Choose how you want to sign in:</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            variant="outline"
            className="w-full py-6 flex items-center justify-center gap-3 text-lg bg-black text-white hover:bg-gray-900 hover:text-white transition-colors"
            onClick={() => signIn("github", { callbackUrl })}
          >
            <FaGithub className="h-6 w-6" />
            <span>Sign in with GitHub</span>
          </Button>
          {/* <Button
            className="w-full py-6 flex items-center justify-center gap-3 text-lg"
            onClick={() => signIn("email", { callbackUrl })}
          >
            <MdEmail className="h-6 w-6" />
            <span>Sign in with Email</span>
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}