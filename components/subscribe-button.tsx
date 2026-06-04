"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function SubscribeButton() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      // reset the form a beat after the dialog closes
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 200)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="font-light">
          Subscribe
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center text-center gap-3 py-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
            <DialogTitle className="text-xl font-semibold">
              Congrats — you&rsquo;re on the list.
            </DialogTitle>
            <DialogDescription className="text-base">
              We&rsquo;ll be in touch as Playing Field grows.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Subscribe to Playing Field
              </DialogTitle>
              <DialogDescription>
                Go deep on the industries that shape the global economy.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!email.trim()) return
                setSubmitted(true)
              }}
              className="flex flex-col gap-3 pt-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <Button type="submit" className="w-full font-light">
                Subscribe
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
