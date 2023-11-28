"use client";
import CardVideo from "../components/CardVideo";
import Banner from "../components/home_banner";
import Title from "../components/string";
import Fetch from "./../service/ApiRest";
import { useState, useEffect } from "react";
import { t } from "../libs/transition";
import CardCategory from "../components/CardCategory";
function y(arr, r = 3) {
  const resultado = [];
  let sublista = [];

  arr.forEach((elemento) => {
    if (!elemento) return;
    sublista.push(elemento);

    if (sublista.length === r) {
      resultado.push(sublista);
      sublista = [];
    }
  });

  resultado.push(sublista);

  return resultado;
}
export default function ({ data }) {
  // const [list, setList] = useState([]);
  //   const [row, setRow] = useState(parseInt(window.innerWidth / 360));

  // useEffect(() => {
  //     window.addEventListener("resize", function () {
  //       const w = window.innerWidth;
  //       const r = parseInt(w / 360);
  //       const u = y(data?.content?.listVideo || [], r);
  //      if(u.length === data?.content?.listVideo.length)return;
  //       setRow(r)
  //      setList(u);
  //     });
  //   }, []);
  //  data?.content?.listVideo?
  return (
    <>
      <Banner data={data?.content?.banner ?? {}} />
      <Title semibold="" large="" title={t("Recommended")} />
      {/* 
      <div className="page-content-video-list-items">
        {list.map((a) => (
          <div className="page-content-video-list-items-row">
            {a?.map((a) => (
              <CardVideo data={a} />
            ))}
          </div>
        ))}
        {[0, 0].map((a) => (
          <div className="skeleton page-content-video-list-items-row">
            {Array(row)?.map((a) => (
              <CardVideo data={{}} skeleton />
            ))}
          </div>
        ))}
      </div>
          */}
      <div className="page-content-video-list-grid">
        {data?.content?.listVideo?.map((a) => (
          <CardVideo data={a} />
        ))}
      </div>
    </>
  );
}
