"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { usePlausible } from "next-plausible"

import { Button } from "@/components/ui/button"

export function SubscribeForm() {
  const plausible = usePlausible()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 w-full md:w-auto">
        <Check className="h-4 w-4 shrink-0" />
        You&rsquo;re subscribed — check your inbox.
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!email.trim()) return
        plausible("Subscribe")
        setSubmitted(true)
      }}
      className="flex items-center gap-2 w-full md:w-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
      />
      <Button
        type="submit"
        className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 font-light"
      >
        Subscribe
      </Button>
    </form>
  )
}
