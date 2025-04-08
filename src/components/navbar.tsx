"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Profile } from "@/components/profile";

export function Navbar() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Jobs",
      active: pathname === "/",
    },
    {
      href: "/admin",
      label: "Admin",
      active: pathname === "/admin" || pathname.startsWith("/admin/"),
    },
    {
      href: "/analytics",
      label: "Analytics",
      active: pathname === "/analytics" || pathname.startsWith("/analytics/"),
    },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">
            JobScrapper Dashboard
          </span>
        </Link>

        <div className="flex items-center space-x-4 lg:space-x-6">
          {routes.map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <Profile />
      </div>
    </nav>
  );
}
