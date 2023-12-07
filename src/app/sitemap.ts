import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin: string = "https://yoth-hi.vercel.app"

  return [
    {
      url: origin + "/",
      lastModified: new Date().toISOString(),
    },
    {
      url: origin + "/gaming",
      lastModified: new Date().toISOString(),
    },
    {
      url: origin + "/following",
      lastModified: new Date().toISOString(),
    },
  ]
}