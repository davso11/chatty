"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";

export default function Home() {
  const makeToast = () => toast.warning("Chatty en construction...");

  return (
    <div className="min-h-screen grid place-content-center">
      <Button onClick={makeToast}>Toast 🔔</Button>
    </div>
  );
}
