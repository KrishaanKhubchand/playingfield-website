import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navigation } from "@/components/navigation"
import PlausibleProvider from "next-plausible"
import "./globals.css"

export const metadata: Metadata = {
  title: "Playing Field",
  description:
    "Playing Field is a research collective dedicated to deeply understanding fundamental industries, technologies, and leaders shaping the future.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Only report from the real production deploy — never dev or Vercel preview builds.
  // (src is injected automatically by withPlausibleProxy in next.config.mjs.)
  return (
    <html lang="en">
      <head>
        <PlausibleProvider enabled={process.env.VERCEL_ENV === "production"} />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
