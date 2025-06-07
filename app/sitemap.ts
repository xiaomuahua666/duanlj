import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const entries: MetadataRoute.Sitemap = []

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.endsWith("_SITEMAP") && value) {
      let path = ""

      if (key.startsWith("NU_")) {
        path = key.slice(3, -8).toLowerCase()
      } else {
        path = key.slice(0, -8).toLowerCase()
      }

      entries.push({
        url: `${baseUrl}/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  })

  return entries
}
