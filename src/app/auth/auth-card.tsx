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
        <div className="flex flex-col gap-y-2">
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
          <Button
            disabled={process.env.NODE_ENV !== "production"}
            variant="outline"
            className="w-full"
            onClick={() =>
              signIn("facebook", {
                callbackUrl: redirect,
              })
            }
          >
            <img src="/logo-facebook.svg" className="mr-2 h-4 w-4" />
            Connectez-vous avec Facebook
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
