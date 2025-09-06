import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Manifesto() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">Our Manifesto</h1>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    The principles that guide our research and shape our perspective on the future of industries and
                    capital.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8 font-light leading-relaxed">
                    <div>
                      <h2 className="text-2xl font-serif font-light mb-4">Follow the Money</h2>
                      <p className="text-muted-foreground">
                        Capital flows reveal truth. We track where money moves, who makes the decisions, and what drives
                        allocation. In a world of noise, financial data cuts through to show what actually matters.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-light mb-4">Question the Thesis</h2>
                      <p className="text-muted-foreground">
                        Every investment has a story. We dig deeper than the pitch deck, beyond the headlines, to
                        understand the fundamental assumptions that drive billion-dollar bets. The best insights come
                        from challenging conventional wisdom.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-light mb-4">Go Down the Rabbit Hole</h2>
                      <p className="text-muted-foreground">
                        The most interesting opportunities hide in the details. We explore the technical specifications,
                        regulatory nuances, and supply chain dynamics that others overlook. Depth beats breadth when it
                        comes to understanding what's next.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-light mb-4">Industries Shape the Future</h2>
                      <p className="text-muted-foreground">
                        Technology gets the headlines, but industries build the world. From packaging to petrochemicals,
                        maritime to manufacturing—these sectors move trillions of dollars and employ millions of people.
                        Understanding their evolution is key to understanding our collective future.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-light mb-4">Expertise Over Opinion</h2>
                      <p className="text-muted-foreground">
                        We connect with operators, investors, and domain experts who have skin in the game. Their
                        insights come from years of experience, not hours of research. Real knowledge comes from those
                        who build, buy, and bet on these industries every day.
                      </p>
                    </div>
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
            <p className="text-sm text-muted-foreground font-light">© {new Date().getFullYear()} Playing Field</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
