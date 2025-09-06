import Link from "next/link"
import { ArrowLeft, FileText, Calendar, Clock, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function PackagingFinance() {
  // Sample articles for the publication
  const articles = [
    {
      title: "Sustainable Packaging M&A: $12B in Deals Signal Industry Transformation",
      description:
        "Deep dive into the consolidation wave as CPG giants acquire sustainable packaging startups, analyzing valuations, strategic rationales, and market implications.",
      publishedAt: "Dec 18, 2024",
      readTime: "8 min read",
      url: "#",
      type: "Analysis",
    },
    {
      title: "Inflation Impact: How Rising Resin Costs Are Reshaping Packaging Economics",
      description:
        "Quarterly analysis of raw material cost pressures across flexible and rigid packaging segments, with forward-looking margin implications.",
      publishedAt: "Dec 15, 2024",
      readTime: "12 min read",
      url: "#",
      type: "Market Report",
    },
    {
      title: "Private Equity's $2.8B Bet on Food Service Packaging",
      description:
        "Examining recent PE investments in food service packaging companies and what it signals about post-pandemic demand patterns.",
      publishedAt: "Dec 12, 2024",
      readTime: "6 min read",
      url: "#",
      type: "Deal Analysis",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl font-light tracking-wide">
              Vertical Intelligence
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
                Back to all publications
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-6">
                    <div className="aspect-square w-48 overflow-hidden rounded-lg">
                      <img
                        src="/images/beyond-fundraise.png"
                        alt="Packaging Finance Review"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-5xl font-serif font-light">Packaging Finance Review</h1>
                      <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Financial intelligence for packaging industry executives, investors, and strategic decision
                        makers
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-serif font-light">Latest analysis</h2>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        View archive <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="space-y-6">
                      {articles.map((article, index) => (
                        <div key={index} className="group cursor-pointer border-b border-border pb-6">
                          <div className="flex items-start gap-4">
                            <Button size="sm" variant="ghost" className="mt-1 p-2">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs font-light">
                                  {article.type}
                                </Badge>
                              </div>
                              <Link href={article.url} className="block">
                                <h3 className="text-lg font-serif font-light group-hover:text-muted-foreground transition-colors">
                                  {article.title}
                                </h3>
                              </Link>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                {article.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {article.publishedAt}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {article.readTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-light">Editor-in-Chief</h3>
                    <div className="space-y-4">
                      <div className="w-24 h-24 bg-muted rounded-full"></div>
                      <div className="space-y-2">
                        <h4 className="font-serif font-light">Sarah Mitchell</h4>
                        <p className="text-sm text-muted-foreground font-light">Former VP Strategy, Amcor</p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          15 years in packaging industry finance and strategy. Previously led M&A at Crown Holdings and
                          consulted for McKinsey's materials practice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-light">Coverage areas</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-light">
                        M&A Analysis
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Raw Materials
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Sustainability Finance
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Supply Chain
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Regulatory Impact
                      </Badge>
                      <Badge variant="secondary" className="font-light">
                        Private Equity
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
                        Get new reports
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground font-light">Weekly analysis and monthly deep dives</p>
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
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Vertical Intelligence
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
