import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Notes App",
  description: "A simple note-taking application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar session={session} />
        <main>
          <AuthProvider session={session}>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}