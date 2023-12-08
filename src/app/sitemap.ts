import { MetadataRoute } from 'next';

interface SitemapItem {
  url: string;
  lastModified?: string;
}

export default async function sitemap(): Promise<any> {
  try {
    const origin: string = "https://yoth-hi.vercel.app";
    const a: Response = await fetch(origin + "/yothpi/browse?key=27626272672626262636363636626262627393829", {
      method: "GET",
      next: { revalidate: 10 }
    });
    const b: any = await a.json() || {};
    const m: SitemapItem[] = b?.list?.map((a: any): SitemapItem => {
      a.url = origin + a.url;
      return a;
    });
    return [
      ...m,
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
    ];

  } catch (error) {

  }
  return [{
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
  {
    url: origin + "/watch?tw=wuant",
    lastModified: new Date().toISOString(),
  },
  ]
}