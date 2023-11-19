"use client";
import { useState } from "react";
import Image from "../../components/image";
import CardVideo from "../../components/CardVideo";
import Banner from "../../components/banner";
import Title from "../../components/string";
import Fetch from "../../service/ApiRest";
import CardCategory from "../../components/CardCategory";
export const metadata = {
  title: "Yoth - gaming"
}
export default function Home() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const getdata = function () {try{
    Fetch({
      type: "browse", 
      context: {
        type: "home_gaming",
      },
    }).then(setData);}catch(a){}
  };
  useState(getdata, [loaded]);
  return (
    <>
      <div className="page-home">
        <Banner />
        <Title semibold="" large="" title="Gamers" />
        <div className="row-list">
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
        <div className="page-content-video">
          <Title semibold="" large="" title="Recommended for you" />
          <div className="page-content-video-list-grid">
            {data?.content?.listVideo?.map((a) => (
              <CardVideo data={a} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
