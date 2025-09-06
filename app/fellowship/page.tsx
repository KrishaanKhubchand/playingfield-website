"use client"

import { useState, useEffect, useRef } from "react"

export default function Fellowship() {
  const [visibleImages, setVisibleImages] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, windowHeight - rect.top)
      const visibleBottom = Math.min(windowHeight, windowHeight - (rect.bottom - windowHeight))
      const visibleHeight = Math.max(0, Math.min(visibleTop, visibleBottom, rect.height))
      const visibilityRatio = visibleHeight / rect.height

      if (visibilityRatio > 0.1) setVisibleImages(1)
      if (visibilityRatio > 0.4) setVisibleImages(2)
      if (visibilityRatio > 0.7) setVisibleImages(3)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600">
              Applications Open • Spring 2025
            </div>
          </div>

          <div className="text-center space-y-8">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-black leading-tight max-w-2xl mx-auto">
              A fellowship for the next generation of talent at the intersection of investing & media
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-gray-600 font-light italic">
                Study industries, test ideas, and learn directly from the best investors and builders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-black mb-2">10</div>
              <div className="text-gray-600">Fellows</div>
            </div>
            <div>
              <div className="text-4xl font-light text-black mb-2">6</div>
              <div className="text-gray-600">Months</div>
            </div>
            <div>
              <div className="text-4xl font-light text-black mb-2">∞</div>
              <div className="text-gray-600">Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidated Pattern Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight max-w-3xl mx-auto">
              Many of today's iconic investors honed their craft through{" "}
              <span className="text-blue-600">producing media</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Harry Stebbings */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img
                src="/harry-stebbings-podcast.png"
                alt="Harry Stebbings podcasting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-sm font-bold text-black">
                  HARRY STEBBINGS
                  <br />
                  (FOUNDER OF 20VC)
                </h3>
                <p className="text-blue-600 font-medium text-xs">
                  Produced 1000+ interviews with venture greats before building his own fund
                </p>
              </div>
            </div>

            {/* Bill Gurley */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img src="/bill-gurley-writing.png" alt="Bill Gurley writing" className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="text-sm font-bold text-black">
                  BILL GURLEY
                  <br />
                  (BENCHMARK CAPITAL)
                </h3>
                <p className="text-blue-600 font-medium text-xs">
                  Wrote extensively about marketplaces before backing Uber and other giants
                </p>
              </div>
            </div>

            {/* Michael Moritz */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img
                src="/michael-moritz-journalist.png"
                alt="Michael Moritz as journalist"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-sm font-bold text-black">
                  MICHAEL MORITZ
                  <br />
                  (SEQUOIA CAPITAL)
                </h3>
                <p className="text-blue-600 font-medium text-xs">
                  Transitioned from journalism to leading investments in Google, PayPal, LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-32 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Playing Field is for the next generation of investors who want to relentlessly chase their curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-base font-medium text-gray-500 tracking-wider uppercase">ABOUT THE PROGRAM</div>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 max-w-5xl">
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  A 12-week learning experience for early-career investors to build deep knowledge in an area of
                  interest
                </p>
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  Each fellow creates a dedicated podcast or newsletter series focused on a specific theme, sector, or
                  thesis.
                </p>
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  Fellows join a lasting community of mentors and peers, providing feedback, collaboration, and
                  opportunity long after the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-gray-200"></div>
        </div>
      </div>

      {/* Who Should Apply Section */}
      <section className="w-full py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-base font-medium text-gray-500 tracking-wider uppercase">WHO SHOULD APPLY</div>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 max-w-5xl">
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  Early-career professionals in finance, consulting, or adjacent fields who want to deepen their
                  industry expertise
                </p>
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  Curious minds who love asking questions, researching deeply, and sharing insights with others
                </p>
                <p className="text-xl md:text-2xl font-light text-black leading-relaxed">
                  Aspiring investors, analysts, or entrepreneurs who want to build thought leadership in their area of
                  interest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}

      {/* CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
            Ready to shape the future of
            <br />
            <span className="font-medium">financial media?</span>
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a select cohort of ambitious individuals at the intersection of investing and media. Build your
            expertise, expand your network, and launch your career.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Apply Now
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Fully Funded
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Spring 2025
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Remote & In-Person
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">© 2025 Playing Field Fellowship. Crafted with intention.</p>
        </div>
      </footer>
    </div>
  )
}
