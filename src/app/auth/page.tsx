"use client";

import { AuthCard } from "./auth-card";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { data: session } = useSession();
  const params = useSearchParams();
  const from = params.get("redirect") ?? "/home";

  if (session) {
    redirect("/home");
  }

  return (
    <div className="relative min-h-screen">
      <AuthCard
        className="center-absolute !-translate-y-full"
        redirect={from}
      />
    </div>
  );
}
