import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const [key, value] of Object.entries(process.env)) {
    if (key.endsWith("_SITEMAP") && value) {
      const path = key.replace("_SITEMAP", "").toLowerCase()
      sitemapEntries.push({
        url: `${baseUrl}/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  return sitemapEntries
}
