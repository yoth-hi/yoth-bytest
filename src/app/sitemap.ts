import { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  const origin: string = "https://yoth-hi.vercel.app"
  return [
    {
      url: origin + "/",
    },
    {
      url: origin + "/gaming"
    },
    {
      url: origin + "/following"
    }
  ]
}