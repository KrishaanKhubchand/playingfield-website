import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppLegendsSummit() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="w-full py-6 border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl font-light tracking-wide">
              Playing Field
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="font-light text-sm hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6">Register Now</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>Premier Mobile App Summit 2025</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
                Join the <span className="text-indigo-500">Legends Summit</span>
                <br />
                Elevate Your App Game
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Connect. Learn. Innovate.
              </p>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premier gathering of mobile app entrepreneurs, developers, and investors sharing strategies for building
                legendary applications
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 text-lg font-medium transition-all hover:scale-105"
                >
                  Register Now - Early Bird $299
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-medium hover:bg-gray-50 bg-transparent"
                >
                  View Agenda
                </Button>
              </div>

              {/* Event Details */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">March 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">500+ Attendees</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">Meet the Visionaries</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Learn from industry leaders who have built and scaled legendary mobile applications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    title: "Founder, AppVentures",
                    image: "/placeholder.svg?height=300&width=300",
                    quote: "Building apps that change lives, not just download numbers.",
                  },
                  {
                    name: "Marcus Rodriguez",
                    title: "VP Product, TechGiant",
                    image: "/placeholder.svg?height=300&width=300",
                    quote: "User experience is the ultimate competitive advantage.",
                  },
                  {
                    name: "Dr. Emily Watson",
                    title: "AI Research Lead, InnovateLabs",
                    image: "/placeholder.svg?height=300&width=300",
                    quote: "The future of apps is intelligent, adaptive, and personal.",
                  },
                ].map((speaker, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                    <p className="text-indigo-500 font-medium mb-4">{speaker.title}</p>
                    <p className="text-gray-600 italic">"{speaker.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="w-full py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">Explore Our Agenda</h2>
                <p className="text-lg text-gray-600">
                  Three days packed with insights, networking, and hands-on workshops
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    day: "Day 1",
                    title: "Foundation & Strategy",
                    sessions: ["App Market Analysis", "Monetization Strategies", "User Acquisition"],
                  },
                  {
                    day: "Day 2",
                    title: "Development & Design",
                    sessions: ["UI/UX Best Practices", "Performance Optimization", "Cross-Platform Development"],
                  },
                  {
                    day: "Day 3",
                    title: "Growth & Scale",
                    sessions: ["Scaling Infrastructure", "Global Expansion", "Future of Mobile"],
                  },
                ].map((day, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {day.day}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {day.sessions.map((session, sessionIndex) => (
                            <span
                              key={sessionIndex}
                              className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                            >
                              {session}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 bg-indigo-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">Register Now to Secure Your Spot!</h2>
              <p className="text-xl opacity-90">Limited seats available. Early bird pricing ends February 1st.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-500 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Register Now - $299
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">© 2025 Playing Field. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
