"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href != "/" && pathName.startsWith(href));
  return (
    <Link
      className={cn(
        "hover:text-primary duration-400 ease-in-out",
        className,
        isActive && "text-primary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export function MobileLink({
  href,
  children,
  setIsOpen,
  className,
}: {
  href: string;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href != "/" && pathName.startsWith(href));
  return (
    <Link
      className={cn(
        "flex items-center hover:text-primary transition",
        className,
        isActive && "text-primary"
      )}
      href={href}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
