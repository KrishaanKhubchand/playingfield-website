"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"

export function NavigationWrapper() {
  const pathname = usePathname()

  // The homepage has its own header — skip the shared nav
  if (pathname === "/" || pathname === "/new-home-2") return null

  return <Navigation />
}
