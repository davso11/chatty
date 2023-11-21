"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { signIn } from "next-auth/react";
import { cn } from "~/lib/utils";

export function AuthCard({
  className,
  redirect = "/home",
}: {
  className?: string;
  redirect?: string;
}) {
  return (
    <Card className={cn("w-full max-w-[21rem]", className)}>
      <CardHeader>
        <CardTitle>Connectez vous</CardTitle>
        <CardDescription>pour accéder à votre espace Chatty</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            signIn("google", {
              callbackUrl: redirect,
            })
          }
        >
          <img src="/logo-google.svg" className="mr-2 h-4 w-4" />
          Connectez-vous avec Google
        </Button>
      </CardContent>
    </Card>
  );
}
