"use client";
import { useState, useRef } from "react";
import Image from "../components/image";
import CardVideo from "../components/CardVideo";

import Title from "../components/string";
import Fetch from "./../service/ApiRest";
import CardCategory from "../components/CardCategory";

import { t } from "../libs/transition";

export default function Home() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const getdata = function () {
    Fetch({
      type: "browse",
      context: {
        type: "home_page",
      },
    }).then(setData);
  };
  useState(getdata, [loaded]);
  return (
    <>
      <div className="page-home">
        <Banner data={data?.content?.banner ?? {}} />
        <Title semibold="" large="" title={t("Recommended")} />
        <div className="page-content-video-list-grid">
          {data?.content?.listVideo?.map((a) => (
            <CardVideo data={a} />
          ))}
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
          <CardVideo data={{}} skeleton />
        </div>
      </div>
    </>
  );
}
function Banner({ data: { list } }) {
  const [index, setIndex] = useState(0);
  const [son, setRon] = useState(true);
  const banner = useRef(null);

  const { id, title } = list?.[index] || {};
  const _a = [];
  return (
    <div ref={banner} className={"banner-home" + (son ? " animate" : "")}>
      <div>
        <div className="banner-content-inner banner-bg" />
        <div className="banner-content-inner metadata">
          <div className="banner-player">
            <Iframe type={id} className="banner-player-iframe" />
          </div>
          <h2 className="title">{title}</h2>
          <div className="views-count">6 Mil visualizações</div>
        </div>
        <Image
          className="banner-content-inner animate-start-banner"
          src={_a?.[index]}
        />
        <div className="thumbnail-pagenation">
          {list?.map((a, b) => (
            <button
              onClick={(_) => {
                setRon(false);
                setTimeout(() => {
                  setTimeout(()=>setIndex(b),200)
                  setRon(true);
                }, 100);
              }}
              data-index={b}
              className="thumbnail-pagenation-item"
            >
              <Image src={_a[b]} alt={a?.title} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const Iframe = function ({ type, ...rest }) {
  const src = type?.replace(
    /tw\:(\S+)/,
    "https://player.twitch.tv/?channel=$1&autoplay=true&parent=" +
      location.hostname
  );
  return type && <iframe allowfullscreen="" src={src} {...rest} />;
};
