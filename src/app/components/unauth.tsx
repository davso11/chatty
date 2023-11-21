import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export function UnAuth() {
  return (
    <div className="center-flex min-h-screen w-full">
      <div className="center-flex flex-col gap-y-6">
        <h1 className="text-5xl font-semibold">Chatty</h1>
        <p className="desc max-w-md text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta
          tenetur ab explicabo.
        </p>
        <Button asChild>
          <Link href="/auth">Connectez-vous</Link>
        </Button>
      </div>
    </div>
  );
}
