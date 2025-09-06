import { ArrowRight, Calendar, Users, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConsumerGrowthSummit() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600">
              Virtual Event • October 2025
            </div>
          </div>

          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none">
              Consumer Growth
              <br />
              <span className="text-blue-600">Week 2025</span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Three weeks of daily interviews featuring 40+ founders, investors, and operators who've built the products you use every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="px-12 py-6 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Reserve Your Spot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
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

      {/* Speakers Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Learn from the <span className="italic">best</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Founders, investors, and operators who've built the consumer products you use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/kristof-gaszo.png"
                alt="Kristof Gaszo"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Kristof Gaszo</h3>
              <p className="text-gray-600 mb-1">Founder</p>
              <p className="text-sm text-gray-500">Pimlico (a16z backed)</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/rohan-kotecha.png"
                alt="Rohan Kotecha"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Rohan Kotecha</h3>
              <p className="text-gray-600 mb-1">Founder</p>
              <p className="text-sm text-gray-500">Curv Labs</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/dillon-roberts.png"
                alt="Dillon Roberts"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Dillon Roberts</h3>
              <p className="text-gray-600 mb-1">Founder</p>
              <p className="text-sm text-gray-500">Folded (ex Sturgeon Capital)</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/krish-khubchand.png"
                alt="Krish Khubchand"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Krish Khubchand</h3>
              <p className="text-gray-600 mb-1">Founder</p>
              <p className="text-sm text-gray-500">Hindu Buddy (#1 Prayer App for Hindu Diaspora)</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/adlee-heshmat.png"
                alt="Adlee Heshmat"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Adlee Heshmat</h3>
              <p className="text-gray-600 mb-1">Investor</p>
              <p className="text-sm text-gray-500">Areta</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <img
                src="/images/speakers/maya-singh.png"
                alt="Maya Singh"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-black mb-1">Maya Singh</h3>
              <p className="text-gray-600 mb-1">Growth Lead</p>
              <p className="text-sm text-gray-500">Discord</p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-16">Three Weeks. Six Themes.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Product-Market Fit</h3>
              <p className="text-gray-600">Finding the right product for the right market</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-medium text-black mb-2">User Acquisition</h3>
              <p className="text-gray-600">Strategies for sustainable customer growth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Engagement & Retention</h3>
              <p className="text-gray-600">Building habits that keep users coming back</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Monetization</h3>
              <p className="text-gray-600">Converting engagement into sustainable revenue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Viral Growth</h3>
              <p className="text-gray-600">Creating products that users love to share</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-light mx-auto mb-6">
                6
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Scale & Operations</h3>
              <p className="text-gray-600">Building systems for long-term growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Weeks Section */}
      {/* This section can be removed or modified based on the new structure */}

      {/* CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
            Ready to build the next
            <br />
            <span className="font-medium">consumer giant?</span>
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join founders, investors, and operators for three weeks of deep insights into what it takes to build lasting
            consumer companies.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Register Now
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Free to attend
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              October 2025
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
              </svg>
              Virtual event
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">© 2025 Consumer Growth Week. Crafted with intention.</p>
        </div>
      </footer>
    </div>
  )
}
