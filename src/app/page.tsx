import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { UnAuth } from "./components/unauth";

export default async function Root() {
  const session = await getServerSession();

  if (session) {
    redirect("/home");
  }

  return <UnAuth />;
}
