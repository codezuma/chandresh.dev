"use client";
import { ButtonGooey } from "@/components/ui/button-gooey";
import Link from "next/link";
import React from "react";

export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600   text-center font-sans font-bold">
          404
        </h1>
        <p></p>
        <p className="text-secondary-foreground max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Sorry, we were unable to find that page.
        </p>
        <Link href={"/"}>
        <ButtonGooey>
          Go Home
        </ButtonGooey>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
