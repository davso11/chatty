import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "./session-provider";
import { getServerSession } from "next-auth";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bienvenue sur Chatty",
  description: "Restez en contact avec vos proches",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="fr">
      <SessionProvider session={session}>
        <Toaster richColors />
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
