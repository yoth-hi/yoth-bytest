import { MetadataRoute } from 'next'

export default async function sitemap(): MetadataRoute.Sitemap {
  const origin: string = "https://yoth-hi.vercel.app";
  const a: any = await fetch("http://localhost:3000/yothpi/browse?key=27626272672626262636363636626262627393829", {
    method: "GET",
    next: { revalidate: 1 }
  })
  const b: any = await a.json() || {};
  var m = b?.list?.map((a:any):any=>{
    a. url=origin+a.url
    return a;
  })
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
  ]
}