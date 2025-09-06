import Link from "next/link"
import { ArrowLeft, Play, Calendar, Clock, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { getSubstackEpisodes } from "@/lib/substack-feed"

export default async function FrontierCapital() {
  // Fetch episodes from Substack (this would be your actual Substack URL)
  const episodes = await getSubstackEpisodes("https://frontiercapital.substack.com")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl font-light tracking-wide">
              Rabbithole Capital
            </Link>
            <Button variant="ghost" className="font-light">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground font-light mb-8 hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all series
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-6">
                    <div className="aspect-square w-48 overflow-hidden rounded-lg">
                      <img
                        src="/images/frontier-markets.png"
                        alt="Frontier Capital"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-5xl font-serif font-light">Packaging Finance Review</h1>
                      <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        In-depth financial analysis of the packaging industry, covering M&A, investments, and market
                        trends.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-serif font-light">Recent articles</h2>
                      <Link
                        href="https://frontiercapital.substack.com"
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        View on Substack <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="space-y-6">
                      {episodes.length > 0 ? (
                        episodes.map((episode, index) => (
                          <div key={index} className="group cursor-pointer border-b border-border pb-6">
                            <div className="flex items-start gap-4">
                              <Button size="sm" variant="ghost" className="mt-1 p-2">
                                <Play className="h-4 w-4" />
                              </Button>
                              <div className="flex-1 space-y-2">
                                <Link href={episode.url} target="_blank" className="block">
                                  <h3 className="text-lg font-serif font-light group-hover:text-muted-foreground transition-colors">
                                    {episode.title}
                                  </h3>
                                </Link>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                  {episode.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {episode.publishedAt}
                                  </span>
                                  {episode.duration && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {episode.duration}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        // Fallback to static episodes if feed fails
                        <div className="group cursor-pointer border-b border-border pb-6">
                          <div className="flex items-start gap-4">
                            <Button size="sm" variant="ghost" className="mt-1 p-2">
                              <Play className="h-4 w-4" />
                            </Button>
                            <div className="flex-1 space-y-2">
                              <h3 className="text-lg font-serif font-light group-hover:text-muted-foreground transition-colors">
                                Saudi Arabia's $500B Pivot: From Oil to AI Infrastructure
                              </h3>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                Breaking down PIF's massive bet on data centers and compute across MENA, and what it
                                signals about the Kingdom's post-oil strategy.
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  Dec 15, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  42 min
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-light">Editor-in-Chief</h3>
                    <div className="space-y-4">
                      <div className="w-24 h-24 bg-muted rounded-full"></div>
                      <div className="space-y-2">
                        <h4 className="font-serif font-light">Marcus Okafor</h4>
                        <p className="text-sm text-muted-foreground font-light">Senior Analyst at GIC</p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          12 years tracking institutional capital flows across emerging markets. Previously at BlackRock
                          and the World Bank.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-light">Key themes</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-light">
                        Packaging M&A
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Sustainable Packaging
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Private Equity
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Market Trends
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Financial Performance
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-light">Subscribe</h3>
                    <div className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="text-sm border-0 border-b border-foreground rounded-none bg-transparent py-3 font-light placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground"
                      />
                      <Button variant="ghost" className="w-full py-3 font-light text-sm">
                        Get new articles
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground font-light">New episodes every other Tuesday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-light">© {new Date().getFullYear()} Rabbithole Capital</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
