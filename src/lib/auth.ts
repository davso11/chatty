import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import env from "~/lib/env";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
};
