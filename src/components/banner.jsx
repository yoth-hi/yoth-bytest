"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Player from "./player";
import Slider from "react-slick";
import Image from "./image";
import {useState} from "react";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
export default function () {
  const [slide, setSlide] = useState(0)
  return (
    <div className="top-banner">
      <div className="top-banner-inner">
        <Slider {...settings} onSwipe={(index) => setSlide(Number(index))} className="slider-top">
          {[1,1,1,1,1].map(()=><Items/>)}
        </Slider>
      </div>
    </div>
  );
}
const Items = function ({i}) {
  const data = {
    thumbnail:"https://static-cdn.jtvnw.net/previews-ttv/live_user_7kazzio7-1920x1080.jpg",
    id:"7kazzio7",
    platform:"twitch"
  }
  return (
    <div className="slider-item">
      <div>
      <div>
        <Image src={data.thumbnail}/>
        <Player {...data}/>
      </div>
      </div>
    </div>
  );
};
