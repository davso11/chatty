"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { navItems } from "~/constants/data/sidebar";
import { NavLink } from "./navlink";

export function Sidebar() {
  const { data: session } = useSession();

  return (
    <aside className="flex w-[19rem] flex-col gap-y-10 border-r px-4 pb-4 pt-7">
      {/* LOGO */}
      <Link href="/" className="flex w-fit items-center gap-x-2.5 px-3">
        <img src="/logo2.svg" alt="Logo Chatty" className="h-7 w-7" />
        <p className="text-xl font-bold">Chatty</p>
      </Link>

      <nav className="flex flex-1 flex-col gap-y-8">
        {/* MENU */}
        <div className="flex flex-1 flex-col gap-y-2.5">
          {navItems.map(({ Icon, label, path }) => (
            <NavLink key={label} href={path} className="nav-item">
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        {/* USER INFO & LOGOUT */}
        <div className="flex items-center justify-between gap-x-2 rounded-2xl border p-4">
          {session && session.user?.image ? (
            <img
              src={session.user.image}
              alt="Photo de profile"
              className="h-9 w-9 rounded-full"
            />
          ) : (
            <Skeleton rounded className="h-9 w-9" />
          )}{" "}
          {/* TODO: user profile */}
          <div className="flex-1 space-y-0.5">
            {session && session.user ? (
              <>
                <p className="text-sm">{session.user.name}</p>
                <p className="text-xs text-muted-foreground">
                  {session.user.email}
                </p>
              </>
            ) : (
              <>
                <Skeleton rounded className="h-5 w-3/5" />
                <Skeleton rounded className="h-4 w-full" />
              </>
            )}
          </div>
          <Button
            variant="outline"
            className="h-7 w-7 rounded-full p-0"
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOut size={14} />
          </Button>
        </div>
      </nav>
    </aside>
  );
}
