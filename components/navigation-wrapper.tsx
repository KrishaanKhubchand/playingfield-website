"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"

export function NavigationWrapper() {
  const pathname = usePathname()

  // The homepage has its own header — skip the shared nav
  if (pathname === "/") return null

  return <Navigation />
}
