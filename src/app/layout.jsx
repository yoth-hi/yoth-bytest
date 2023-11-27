import "./globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import _Users from "../service/GetUsers.js";
import DesktopHeader from "../components/header";
import Sidebar from "../components/sidebar";
import Miniplayer from "../components/Miniplayer";
import SettingJson from "../context/Provider";
const inter = Inter({ subsets: ["latin"] });
const host = "https://yoth-hi.vercel.app/"; //"https://yoth-hi.vercel.app";
const description =
  "Discover the diversity of digital content on our site, where Twitch live streams, exclusive Kick creations, engaging Instagram moments, vibrant TikTok videos, and fascinating YouTube uploads come together. Explore a world of digital entertainment all in one place!";
export const viewport = {
  themeColor: "black",
};
export const metadata = {
  title: {
    template: "%s - Yoth",
    default: "Yoth",
  },
  description,
  openGraph: {
    title: "Yoth",
    description,
  },
  referrer: "origin-when-cross-origin",
  keywords: ["Video", "Share", "Streamers", "Watch"],
  appLinks: {
    web: {
      url: host,
    },
  },
  metadataBase: new URL(host),
  alternates: {
    canonical: "/",
    languages: {
      pt: "?ling=pt",
      "pt-br": "?ling=pt-br",
      en: "?ling=en",
    },
  },
};

export default function RootLayout({ children, ...a }) {
  const headersList = headers();

  const referer = new URL(
    headersList.get("next-url"),
    "https://" + headersList.get("host")
  );

  var _,
    t,
    theme = Number(referer?.searchParams.get("theme"));
  switch (theme) {
    case 0:
      t = true;
      break;
    case 1:
      _ = true;
      break;
    case 2:
      _ = false;
      break;
    default:
      _ = false;
  }
  const darkHeader = true;
  const dark = true; //_;
  const hideHeaderBorderBottom = true;
  const rerenderAfterLogin = true;
  const ling =
    referer.searchParams.get("ling") ||
    parseLanguagePreferences(headersList.get("accept-language"))[0]?.code;
  const loggedUID = 83583758364;
  const bg = {};
  const head_props = dark ? { dark: "" } : { light: "" };

  const data = {
    users: _Users,
  };

  return (
    <html lang={ling} {...head_props} style={{ fontSize: "14px" }}>
      <body className={inter.className}>
        <SettingJson>
          <div id="app-desktop">
            <Miniplayer />
            <div className="desktop-layout">
              <DesktopHeader />
              <Sidebar data={data} />
              <div className="layout-content-wrapper">
                <div className="layout-content">{children}</div>
              </div>
            </div>
          </div>
        </SettingJson>
      </body>
    </html>
  );
  //    <Script src="/s/player/en/base.js" />
}
function parseLanguagePreferences(preferences) {
  const languageArray = preferences.split(",").map((item) => {
    const [code, priority] = item.trim().split(";q=");
    return { code, priority: parseFloat(priority) || 1 };
  });

  return languageArray;
}
export const revalidate = 0;
