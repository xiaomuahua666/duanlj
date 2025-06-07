import { redirect, notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function DynamicRedirectPage({ params }: PageProps) {
  const { slug } = params
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
