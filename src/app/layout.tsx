import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SignInSignUp from "@/components/SignInSignUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udacity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="h-screen flex flex-col py-20 items-center bg-gray-100 mt-10 mb-10">
          <Navbar />
          <SignInSignUp />
      </main>
      </body>
    </html>
  );
}
