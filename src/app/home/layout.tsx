import { Metadata } from "next";
import { headers } from "next/headers";
import { Sidebar } from "../components/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Chatty",
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const headersMap = headers();

  if (!session) {
    redirect(`/auth?redirect=${headersMap.get("x-path")}`);
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
