"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

interface NavLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export function NavLink({ className, ...props }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      className={cn(
        "rounded-xl px-3 py-2 hover:bg-accent",
        {
          "bg-secondary": path === props.href,
        },
        className,
      )}
      {...props}
    />
  );
}
