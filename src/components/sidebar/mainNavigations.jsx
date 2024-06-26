"use client";

import { usePathname } from "next/navigation";
import Item from "./item";
import { useState, useEffect } from "react";
import { t } from '../../libs/transition';

const Home = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M240-200h147.692v-235.385h184.616V-200H720v-360L480-741.538 240-560v360Zm-40 40v-420l280-211.539L760-580v420H532.308v-235.384H427.692V-160H200Zm280-310.769Z" />
  </svg>
);
const Home_active = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M200-160v-420l280-211.539L760-580v420H552.308v-255.385H407.692V-160H200Z" />
  </svg>
);/*
const Explore = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="m286.154-286.154 252.308-135.384 135.384-252.308-252.308 135.384-135.384 252.308ZM480-440q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm.134 320q-74.673 0-140.41-28.339-65.737-28.34-114.365-76.922-48.627-48.582-76.993-114.257Q120-405.194 120-479.866q0-74.673 28.339-140.41 28.34-65.737 76.922-114.365 48.582-48.627 114.257-76.993Q405.194-840 479.866-840q74.673 0 140.41 28.339 65.737 28.34 114.365 76.922 48.627 48.582 76.993 114.257Q840-554.806 840-480.134q0 74.673-28.339 140.41-28.34 65.737-76.922 114.365-48.582 48.627-114.257 76.993Q554.806-120 480.134-120ZM480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
);
const Explore_active = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
);*/
const Heart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="m480-173.846-30.308-27.385q-97.923-89.461-162-153.153-64.077-63.693-101.154-112.347-37.077-48.654-51.807-88.038Q120-594.154 120-634q0-76.308 51.846-128.154Q223.692-814 300-814q52.769 0 99 27t81 78.538Q514.769-760 561-787t99-27q76.308 0 128.154 51.846Q840-710.308 840-634q0 39.846-14.731 79.231-14.73 39.384-51.807 88.038-37.077 48.654-100.769 112.347Q609-290.692 510.308-201.231L480-173.846ZM480-228q96-86.769 158-148.654 62-61.884 98-107.384t50-80.616q14-35.115 14-69.346 0-60-40-100t-100-40q-47.769 0-88.154 27.269-40.384 27.269-72.307 82.116h-39.078q-32.692-55.616-72.692-82.5Q347.769-774 300-774q-59.231 0-99.615 40Q160-694 160-634q0 34.231 14 69.346 14 35.116 50 80.616t98 107q62 61.5 158 149.038Zm0-273Z" />
  </svg>
);
const Heart_active = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
  </svg>
);
const Reels = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M197.692-255.692q-34.154-44-52.154-87.616-18-43.615-24-96.692H162q6 44 22 83.5t42 72.5l-28.308 28.308ZM121.538-520q6.462-53.077 24.231-96.308 17.769-43.231 51.923-87.231L226-675.231q-26 33-42 72.116Q168-564 162-520h-40.462ZM438-122q-57.692-8.307-98.885-26.307-41.192-18-85.423-50.924L282-228q32.692 25.231 71.962 42.615Q393.231-168 438-162v40ZM284-732.769l-28.769-28.77q44.23-32.923 85.423-50.538Q381.846-829.693 440-838v40q-45 6-84.385 23-39.384 17-71.615 42.231Zm116 395.846v-286.154L623.077-480 400-336.923ZM520-122v-40q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-40q137.846 14.692 228.923 116.923T840-480q0 138.846-91.077 241.077T520-122Z" />
  </svg>
);
export default function () {
  const urls = ["/", "/reels", "/explore", "/following"];
  const pathname = usePathname();
  
  const [url, onChangeUrl] = useState(pathname);
  useEffect(() => {
    console.log(urls.includes(location.pathname));
    if (urls.includes(location.pathname)) onChangeUrl(location.pathname);
  }, [pathname]);
  
  //[0] => "/"
  //[1] => "/reels"
  //[2] => "/explore"
  //[3] => "/following

  return (
    <div className='gs-mains'>
      <Item
        title={t("Home")}
        icon={url === "/" ? <Home_active /> : <Home />}
        href="/"
        className={"item-side-bar "+(url==="/"?"active":"")}
      />
      <Item
        title={t("Reels")}
        icon={url === "/reels" ? <Reels /> : <Reels />}
        x-href="/reels"
        href="?page-inative=#reels"
        className={"item-side-bar inative "+(url==="/reels"?"active":"")}
      />
    {/*  <Item
        title={t("Explore")}
        icon={url === "/explore" ? <Explore_active /> : <Explore />}
        href="/explore"
        className={"item-side-bar "+(url==="/explore"?"active":"")}
      />*/}
      <Item
        title={t("Following")}
        icon={url === "/following" ? <Heart_active /> : <Heart />}
        href="/following"
        className={"item-side-bar "+(url==="/following"?"active":"")}
      />
  {/*    <Item athn50x
        title={t("History")}
        icon={url === "/history" ? <Heart_active /> : <Heart />}
        x-href="/history"
        href="?page-inative=#history"
        className={"item-side-bar inative "+(url==="/history"?"active":"")}
      />*/}
    </div>
  );
}
