"use client";

import { usePathname } from "next/navigation";

export default function useActiveRoute() {
  const pathname = usePathname();

  return {
    pathname,
    isActive: (href: string) => pathname === href
  }
}