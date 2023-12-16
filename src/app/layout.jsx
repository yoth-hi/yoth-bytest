import "./globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import _Users from "../service/GetUsers.js";
import DesktopHeader from "../components/header";
import ProsesLoad from "../components/ProsesLoad";
import Player from "./_Player";
import GoogleAnalytics from "./GoogleAnalytics";
import getCodeLanguage from "../libs/getCodeLanguage";
import Sidebar from "../components/sidebar";
import Miniplayer from "../components/Miniplayer";
import SettingJson from "../context/Provider";
const inter = Inter({ subsets: ["latin"] });
const host = "https://yoth-hi.vercel.app/"; //"https://yoth-hi.vercel.app";
const description =
  "Discover the diversity of digital content on our site, where Twitch live streams, exclusive Kick creations, engaging Instagram moments, vibrant TikTok videos, and fascinating YouTube uploads come together. Explore a world of digital entertainment all in one place!";
export const viewport = {
  themeColor: "#1dffa2",
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
  themeColor: "#000",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Video",
    "Share",
    "Streamers",
    "yoth",
    "yt",
    "YouTube",
    "tw",
    "Twitch",
    "lives",
    "join platforms",
    "Entertainment",
    "Explore",
    "Watch",
    "Livestream",
    "Clip",
    "Highlight",
    "Video",
    "Gaming",
  ],
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: "cI0TcfAVy4D0k4ufjIQrmnA-_5Y2RXc5dwOt34-fE7Y" },
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
  const ling = getCodeLanguage();
  const loggedUID = 83583758364;
  const bg = {};
  const head_props = dark ? { dark: "" } : { light: "" };
  const users = _Users();
  const data = {
    users,
  };

  return (
    <html lang={ling} {...head_props} style={{ fontSize: "10px" }}>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YOTH!" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Player />
        <SettingJson>
          <div id="app-desktop">
            <ProsesLoad />
            <Miniplayer />
            <div className="desktop-layout">
              <DesktopHeader data={data} />
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
  if (!preferences) return;
  const languageArray = preferences?.split(",").map((item) => {
    const [code, priority] = item.trim().split(";q=");
    return { code, priority: parseFloat(priority) || 1 };
  });

  return languageArray;
}

export const revalidate = 60;
