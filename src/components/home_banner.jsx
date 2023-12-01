"use client";
import { t } from "../libs/transition";
import Image from "./image";
import { useState, useRef, useEffect } from "react";
export default function Banner({ data: { list } }) {
  const [index, setIndex] = useState(0);
  const [son, setRon] = useState(true);
  const banner = useRef(null);

  const { id, title } = list?.[index] || {};
  const _a = [];
  return (
    <div ref={banner} className={"banner-home" + (son ? " animate" : "")}>
      <div>
        <div className="banner-content-inner banner-bg" />
        <div className="banner-player">
          <Iframe type={id} className="banner-player-iframe" />
        </div>
        <div className="banner-content-inner metadata">
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
                  setTimeout(() => setIndex(b), 200);
                  setRon(true);
                }, 100);
              }}
              aria-label={a.title}
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
      (() => {
        var y;
        try {
          y = location.hostname;
        } catch (e) {
          y = "localhost";
        }
        return y;
      })()
  );
  return type && <iframe title={"Twitch - "+type.replace("tw:","")} allowfullscreen="" src={src} {...rest} />;
};
