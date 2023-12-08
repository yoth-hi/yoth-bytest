/*
export default function sitemap() {
  /*try {
    const origin = "https://yoth-hi.vercel.app";
    const a = await fetch(
      origin + "/yothpi/browse?key=27626272672626262636363636626262627393829",
      {
        method: "GET",
        next: { revalidate: 10 },
      }
    );
    const b = (await a.json()) || {};
    const m = 
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
  } catch (error) {}* /
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
    {
      url: origin + "/watch?tw=wuant",
      lastModified: new Date().toISOString(),
    },
  ];
}

*/
var t = [];
export default async function sitemap() {
  const origin = "https://yoth-hi.vercel.app";
  try {
  t = await fetch(
    origin + "/yothpi/browse?key=27626272672626262636363636626262627393829",
    {
      method: "GET",
      next: { revalidate: 10 },
    }
  )
    .then((a) => a.json())
    .then((a) => {
      return (
        a?.list?.map((a) => {
          a.url = origin + a.url;
          return a;
        }) || []
      );
    });
    
  } catch (error) {
    
  }
  return [
    {
      url: origin + "/",
    },
    {
      url: origin + "/gaming",
    },
    {
      url: origin + "/following",
    },
    ...t,
  ];
}
