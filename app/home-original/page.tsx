"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function RabbitholeCapital() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  
  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => {
        setShowComingSoon(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showComingSoon])
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 relative">
      <main className="flex-1 relative z-10">
        <section className="w-full py-24 md:py-32 lg:py-48 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
              width="500"
              height="500"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Globe circle */}
              <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="2" fill="none" />

              {/* Longitude lines */}
              <ellipse cx="250" cy="250" rx="220" ry="110" stroke="currentColor" strokeWidth="1" fill="none" />
              <ellipse cx="250" cy="250" rx="220" ry="55" stroke="currentColor" strokeWidth="1" fill="none" />
              <ellipse cx="250" cy="250" rx="165" ry="220" stroke="currentColor" strokeWidth="1" fill="none" />
              <ellipse cx="250" cy="250" rx="110" ry="220" stroke="currentColor" strokeWidth="1" fill="none" />
              <ellipse cx="250" cy="250" rx="55" ry="220" stroke="currentColor" strokeWidth="1" fill="none" />

              {/* Latitude lines */}
              <line x1="30" y1="250" x2="470" y2="250" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="180" x2="450" y2="180" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="320" x2="450" y2="320" stroke="currentColor" strokeWidth="1" />
              <line x1="80" y1="130" x2="420" y2="130" stroke="currentColor" strokeWidth="1" />
              <line x1="80" y1="370" x2="420" y2="370" stroke="currentColor" strokeWidth="1" />

              {/* Simplified continent outlines */}
              <path
                d="M125 160 Q160 125 190 160 Q220 190 250 160 Q280 125 315 160"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M95 220 Q125 190 160 220 Q190 250 220 220" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path
                d="M280 220 Q315 190 345 220 Q375 250 405 220"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M160 315 Q190 280 220 315 Q250 345 280 315"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm font-light">
                <span className="font-medium">LATEST:</span>
                <span>Launching the Playing Field Analyst Fellowship</span>
                <ArrowRight className="h-3 w-3" />
              </div>

              <div className="space-y-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-tight leading-tight max-w-4xl mx-auto">
                  Playing Field is a research collective dedicated to deeply understanding fundamental industries,
                  technologies, and leaders shaping the future.
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-12 py-6 text-lg font-light bg-muted hover:bg-muted/80 text-foreground">
                  Learn More
                </Button>
                <Link href="/fellowship">
                  <Button size="lg" className="px-12 py-6 text-lg font-light">
                    Apply to Fellowship
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Our Publications</h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  Our publications feature insights from world-class investors and operators, making us a leading
                  destination for learning more about businesses + industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link href="/frontier-markets-podcast" className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src="/images/frontier-markets-podcast-cover.png"
                      alt="Frontier Markets Podcast"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-light">Frontier Markets Podcast</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Deep conversations with investors and operators exploring emerging markets and untapped
                      opportunities
                    </p>
                    <p className="text-xs text-muted-foreground font-light">Weekly episodes with industry leaders</p>
                  </div>
                </Link>

                <div onClick={() => setShowComingSoon(true)} className="group cursor-pointer relative">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src="/images/crypto-ai-summit.jpeg"
                      alt="Crypto x AI Summit"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-light">Crypto x AI Summit</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Three weeks of daily interviews featuring 40+ of the top builders, investors and practitioners
                      focused at the intersection of crypto and AI
                    </p>
                    <p className="text-xs text-muted-foreground font-light">
                      Daily conversations with industry leaders
                    </p>
                  </div>
                  
                  {/* Coming Soon Popup */}
                  {showComingSoon && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in zoom-in duration-200">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 relative">
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
                        <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                          Coming Soon! 🚀
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Stay tuned for updates
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/consumer-growth-summit" className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src="/images/consumer-growth-summit.png"
                      alt="Consumer Growth Summit"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-light">Consumer Growth Summit</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Three weeks of deep insights into what it takes to build lasting consumer companies, featuring 40+
                      founders, investors, and operators
                    </p>
                    <p className="text-xs text-muted-foreground font-light">Building great consumer companies</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-serif font-light">Listen to an Interview from the Archives</h2>
              <p className="text-lg text-muted-foreground font-light">Today's Featured Interview:</p>
              <div className="w-full max-w-2xl mx-auto">
                <iframe
                  src="https://open.spotify.com/embed/episode/1msfeUYd5bXL1aHvboS6OH?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-light">© {new Date().getFullYear()} Playing Field</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
