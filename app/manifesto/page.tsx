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
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8 font-light leading-relaxed">
                    <p className="text-lg text-muted-foreground">
                      Playing Field is a media collective dedicated to building a deep understanding of business, markets, and technology.
                    </p>

                    <p className="text-lg text-muted-foreground">
                      We do this by organizing podcasts, interview series, digital summits, and other experiments that enable people who are dedicated toward this pursuit to share their learnings.
                    </p>

                    <p className="text-lg text-muted-foreground">
                      We try our best to exhibit the following values in this pursuit:
                    </p>

                    <div className="space-y-8 mt-8">
                      <div>
                        <h2 className="text-2xl font-serif font-light mb-4">A Relentless Desire to Learn</h2>
                        <p className="text-lg text-muted-foreground">
                          You can learn anything, and everything that was built or discovered was done by someone no smarter than you.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-2xl font-serif font-light mb-4">Earnestness and Purity of Mind</h2>
                        <p className="text-lg text-muted-foreground">
                          The best learning comes from approaching topics with genuine intention and thinking clearly without hidden agendas.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-2xl font-serif font-light mb-4">100 Reps</h2>
                        <p className="text-lg text-muted-foreground">
                          Deep understanding emerges from repetition—consuming hundreds of interviews, studying countless case studies, and engaging with ideas from every angle until patterns become clear.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-2xl font-serif font-light mb-4">Positive Sum Mindset</h2>
                        <p className="text-lg text-muted-foreground">
                          Value creation works best as a multiplayer game, and contributing to others' success without keeping score builds the relationships that unlock the most interesting opportunities.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-2xl font-serif font-light mb-4">Serendipity is Always Around the Corner</h2>
                        <p className="text-lg text-muted-foreground">
                          The most valuable connections and insights appear when you least expect them, which is why we show up consistently on a daily basis.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t">
                      <p className="text-lg text-muted-foreground">
                        If you're interested in learning with us or working with us, we'd love to hear from you. Get in touch and let's explore what we can build together.
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
