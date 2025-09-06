export interface PodcastEpisode {
  title: string
  description: string
  pubDate: string
  link: string
  duration?: string
  audioUrl?: string
}

export async function fetchPodcastEpisodes(rssUrl: string): Promise<PodcastEpisode[]> {
  try {
    const response = await fetch(rssUrl)
    const xmlText = await response.text()

    // Parse XML manually since we're in a browser environment
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, "text/xml")

    const items = xmlDoc.querySelectorAll("item")
    const episodes: PodcastEpisode[] = []

    items.forEach((item, index) => {
      if (index < 10) {
        // Limit to 10 most recent episodes
        const title = item.querySelector("title")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        const duration = item.querySelector("itunes\\:duration, duration")?.textContent || ""
        const enclosure = item.querySelector("enclosure")
        const audioUrl = enclosure?.getAttribute("url") || ""

        episodes.push({
          title: title.replace(/<!\[CDATA\[|\]\]>/g, ""),
          description: description.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]*>/g, ""),
          pubDate,
          link,
          duration,
          audioUrl,
        })
      }
    })

    return episodes
  } catch (error) {
    console.error("Error fetching podcast episodes:", error)
    return []
  }
}
