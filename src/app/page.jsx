"use client";
import { useState } from "react";
import Image from "../components/image";
import CardVideo from "../components/CardVideo";

import Title from "../components/string";
import Fetch from "./../service/ApiRest";
import CardCategory from "../components/CardCategory";

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
        <Banner data={data?.content?.banner??{}}/>
         <Title semibold="" large="" title="Recomendados" />
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
function Banner({data:{id,title}}) {
  const [index, setIndex] = useState(0);
  const _a = [
    "https://wallpapercave.com/wp/wp"+parseInt(6208027*Math.random())+".jpg",
    "https://wallpapercave.com/wp/wp"+parseInt(6208017*Math.random())+".jpg",
    "https://wallpapercave.com/wp/wp"+parseInt(6208043*Math.random())+".jpg",
    "https://wallpapercave.com/wp/wp"+parseInt(6208015*Math.random())+".jpg",
    "https://wallpapercave.com/wp/wp"+parseInt(6238035*Math.random())+".jpg",
  ]
  return (
    <div className="banner-home">
      <div>
        <div className="banner-content-inner banner-bg" />
        <div className="banner-content-inner metadata">
          <div className="banner-player">
        <Iframe type={id} className="banner-player-iframe"/>
          </div>
          <h2 className="title">{title}</h2>
          <div className="">6 Mil visualizações</div>
        </div>
        <Image
          className="banner-content-inner animate-start-banner"
          src={_a?.[index]||"https://wallpapercave.com/wp/wp6208017.jpg"}
        />
        <div className="thumbnail-pagenation">
          {[0, 0, 0, 0, 0]?.map((a, b) => (
            <button onClick={_=>setIndex(b)} data-index={b} className="thumbnail-pagenation-item">
              <Image
                src={_a[b]}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const Iframe = function({type, ...rest}){
  const src=type?.replace(/tw\:(\S+)/,"https://player.twitch.tv/?channel=$1&autoplay=true&parent="+location.hostname)
  return type&&<iframe allowfullscreen="" src={src} {...rest}/>
}