import { ArrowRight, Calendar, Users, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CryptoAISummit() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none">
                Crypto × AI
                <br />
                <span className="text-blue-600">Digital Summit</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Join the conversation at the intersection of crypto and AI. Three weeks of daily interviews featuring
                40+ of the top builders, investors, and practitioners.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="px-12 py-6 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">21</div>
                <div className="text-lg text-gray-600 font-light">Days of Content</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">40+</div>
                <div className="text-lg text-gray-600 font-light">Industry Leaders</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Mic className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">Daily</div>
                <div className="text-lg text-gray-600 font-light">Interviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Voices</h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                Hear from the pioneers building at the intersection of crypto and artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { role: "AI Research Director", company: "Leading Crypto Fund" },
                { role: "Founder & CEO", company: "AI-Powered DeFi Protocol" },
                { role: "Head of Strategy", company: "Major Exchange" },
                { role: "Principal", company: "Tier 1 VC Fund" },
                { role: "Co-Founder", company: "ML Infrastructure" },
                { role: "Research Lead", company: "Crypto Think Tank" },
              ].map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">{speaker.role}</div>
                    <div className="text-gray-600 font-light">{speaker.company}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 font-light">+ Many more industry leaders to be announced</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Don't Miss the Future</h2>
            <p className="text-xl font-light opacity-90">
              Reserve your spot for three weeks of groundbreaking conversations that will shape the next decade of
              technology.
            </p>
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-medium bg-white text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 font-light">© {new Date().getFullYear()} Playing Field</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
