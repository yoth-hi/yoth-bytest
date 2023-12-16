var aa = "";
export async function GET() {
  const origin = "https://yoth-hi.vercel.app";

 var t = await fetch(
    origin + "/yothpi/browse?key=27626272672626262636363636626262627393829",
    {
      method: "GET",
    }
  )
    .then((a) => a.json())
    .then((a) => {
      return (
        a?.list?.map((a) => {
          aa += `<url><loc>${origin + a?.endpoint}</loc><video:video><video:thumbnail_loc>${
            a?.thumbnail
          }</video:thumbnail_loc><video:title>${
            a?.title
          } - YOTH!</video:title><video:description>${
            a?.description
          } - YOTH!</video:description><video:player_loc>${
            origin + a?.endpoint
          }</video:player_loc></video:video></url>`;
        }) || []
      );
    }) .catch(()=>aa="<!--erro-->")
  // <video:expiration_date>2009-11-05T19:20:30+08:00</video:expiration_date>
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://yoth-hi.vercel.app/</loc></url><url><loc>https://yoth-hi.vercel.app/gaming</loc></url><url><loc>https://yoth-hi.vercel.app/following</loc></url>${aa}</urlset>`,
    {
      headers: new Headers([
        ["Content-type","text/xml"]
      ]),
    }
  );
}
export const revalidate = 100;
