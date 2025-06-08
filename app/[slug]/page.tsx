import { redirect, notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function DynamicRedirectPage({ params }: PageProps) {
  const { slug } = params

  if (slug.toUpperCase().startsWith("NU_") || slug.toUpperCase().endsWith("_SITEMAP")) {
    notFound()
  }

  const envKey = slug.toUpperCase()

  const targetUrl =
    process.env[`${envKey}_SITEMAP`] ||
    process.env[envKey] ||
    process.env[`NU_${envKey}_SITEMAP`] ||
    process.env[`NU_${envKey}`]

  if (!targetUrl) {
    notFound()
  }

  redirect(targetUrl)
}
