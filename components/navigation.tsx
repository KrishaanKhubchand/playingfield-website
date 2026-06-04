import Link from "next/link"
import { SubscribeButton } from "@/components/subscribe-button"

export function Navigation() {
  return (
    <header className="w-full py-8 relative z-10 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-light tracking-wide">
            Playing Field
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/manifesto" className="font-light text-sm hover:text-muted-foreground transition-colors">
              Manifesto
            </Link>
            <Link href="/fellowships" className="font-light text-sm hover:text-muted-foreground transition-colors">
              Fellowships
            </Link>
            <SubscribeButton />
          </div>
        </div>
      </div>
    </header>
  )
}
