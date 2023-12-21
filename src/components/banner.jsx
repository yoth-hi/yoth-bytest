"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Player from "./player";
import Slider from "react-slick";
import Image from "./image";
import Title from "./string";
import { useState } from "react";
export default function ({ list }) {
  const [slide, setSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange(index) {
      setSlide(Number(index));
    },
    afterChange(index) {
      setSlide(Number(index));
    },
    onSwipe(index) {
      setSlide(Number(index));
    },
    autoplaySpeed: 20000,
  };
  const data = list || [];
  return (
    <div className="top-banner">
      <div className="top-banner-inner">
        <Slider
          {...settings}
          onSwipe={(index) => setSlide(Number(index))}
          className="slider-top"
        >
          {data?.map((a, b) => (
            <Items i={b === slide} data={a} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
const Items = function ({ i, data }) {
  return (
    <div className="slider-item">
      <div className="slider-item-borw">
        <div className="slider-item-thumbnail">
          <Image src={data?.thumbnail} />
        </div>
        <div className="slider-item-detalis">
          <Title title={data?.title} />
        </div>
      </div>
    </div>
  );
};
