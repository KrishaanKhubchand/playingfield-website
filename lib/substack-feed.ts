export interface Episode {
  title: string
  description: string
  publishedAt: string
  duration?: string
  url: string
  audioUrl?: string
}

export async function getSubstackEpisodes(substackUrl: string): Promise<Episode[]> {
  try {
    // Substack RSS feed URL format: https://yoursubstack.substack.com/feed
    const rssUrl = `${substackUrl}/feed`

    const response = await fetch(rssUrl)
    const xmlText = await response.text()

    // Parse XML (you'd need a proper XML parser in production)
    // This is a simplified example
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, "text/xml")
    const items = xmlDoc.querySelectorAll("item")

    const episodes: Episode[] = []

    items.forEach((item, index) => {
      if (index < 5) {
        // Get latest 5 episodes
        const title = item.querySelector("title")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""

        episodes.push({
          title: title.replace("<![CDATA[", "").replace("]]>", ""),
          description: description.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
          publishedAt: new Date(pubDate).toLocaleDateString(),
          url: link,
          duration: "~40 min", // You'd need to extract this from content or store separately
        })
      }
    })

    return episodes
  } catch (error) {
    console.error("Error fetching Substack feed:", error)
    return []
  }
}
