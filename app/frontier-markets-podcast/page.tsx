"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Play, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchPodcastEpisodes, type PodcastEpisode } from "@/lib/rss-parser"

export default function FrontierMarketsPodcast() {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const podcastEpisodes = await fetchPodcastEpisodes("https://feeds.captivate.fm/frontiermarkets/")
        setEpisodes(podcastEpisodes)
      } catch (error) {
        console.error("Failed to load episodes:", error)
      } finally {
        setLoading(false)
      }
    }

    loadEpisodes()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return dateString
    }
  }

  const truncateDescription = (description: string, maxLength = 200) => {
    if (description.length <= maxLength) return description
    return description.substring(0, maxLength) + "..."
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 flex-shrink-0">
                  <img
                    src="/images/frontier-markets-podcast-logo.png"
                    alt="Frontier Markets Podcast"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h1 className="text-4xl font-serif font-light mb-4">Frontier Markets Podcast</h1>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      Deep conversations with investors and operators exploring emerging markets and untapped
                      opportunities. Weekly episodes featuring industry leaders sharing insights on frontier
                      investments, market dynamics, and strategic opportunities.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="px-8" asChild>
                      <a
                        href="https://open.spotify.com/show/58XEWLfZZcEEIMNcSs7o73"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Listen on Spotify
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
                      <a
                        href="https://podcasts.apple.com/gh/podcast/frontier-markets-podcast/id1668191374"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Listen on Apple Podcasts
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-light mb-8">Latest Episodes</h2>

              {loading ? (
                <div className="space-y-6">
                  {[...Array(5)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-6 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="h-4 bg-muted rounded"></div>
                          <div className="h-4 bg-muted rounded w-5/6"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : episodes.length > 0 ? (
                <div className="space-y-6">
                  {episodes.map((episode, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif font-light leading-tight">{episode.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(episode.pubDate)}
                          </span>
                          {episode.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {episode.duration}
                            </span>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-light leading-relaxed mb-4">
                          {truncateDescription(episode.description)}
                        </p>
                        <div className="flex gap-3">
                          {episode.audioUrl && (
                            <Button size="sm" className="px-4" asChild>
                              <a href={episode.audioUrl} target="_blank" rel="noopener noreferrer">
                                <Play className="h-3 w-3 mr-2" />
                                Play Episode
                              </a>
                            </Button>
                          )}
                          {episode.link && (
                            <Button variant="outline" size="sm" className="px-4 bg-transparent" asChild>
                              <a href={episode.link} target="_blank" rel="noopener noreferrer">
                                View Details
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      Unable to load episodes at the moment. Please check back later.
                    </p>
                  </CardContent>
                </Card>
              )}
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
