import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/results', '/signup', '/chat'],
    },
    sitemap: 'https://yoth-hi.vercel.app/sitemap.xml',
  }
}