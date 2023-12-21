"use client";
import CardVideo from "../components/CardVideo";
import Banner from "../components/home_banner";
import Title from "../components/string";
import Spin from "../components/icons/span";
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
const getData = async (a = {}) =>
  await Fetch({
    type: "browse",
    context: {
      type: "home_page",
      ...a,
    },
  });
  function grid(inputArray, columns) {
  const resultArray = [];
  const outr = [];
  for (let i = 0; i < inputArray.length; i += columns) {
    resultArray.push(inputArray.slice(i, i + columns));
  }
for (let z = 0;z< resultArray.length; z++) {
  var item = resultArray[z];
  if(item)outr.push(item)
}
  return outr;
}
export default function ({ data }) {
  const [list, setList] = useState(data?.content?.listVideo);
  const [w,  setW] = useState(parseInt((innerWidth-200)/320));
  //   const [row, setRow] = useState(parseInt(window.innerWidth / 360));

   useEffect(() => {
     const resize = function(){
       /*const a = parseInt((innerWidth-200)/320);
       if(a!==w) setW(a);*/
     }
     window.addEventListener("resize", resize)
  //       const w = window.innerWidth;
  //       const r = parseInt(w / 360);
  //       const u = y(data?.content?.listVideo || [], r);
  //      if(u.length === data?.content?.listVideo.length)return;
  //       setRow(r)
  //      setList(u);
  //     });
  return ()=>{
     window.removeEventListener("resize", resize)
    
  }
   }, []);
  //  data?.content?.listVideo?
const h =  /*grid(*/(list||data?.content?.listVideo)/*,parseInt(w)) */
  var start = 0,
    _list = [];
  
  useEffect(() => {
    var sst = true;
    const interval = setInterval(function () {
      const a = document.querySelectorAll(
        ".page-content-video-list-row .card-video[skeleton]"
      )[0];
      const b = document.querySelector("#app-desktop");
      if (!a) return;
      const { height, y } = a.getBoundingClientRect();
      const e = y - innerHeight;
      if (e < 100) {
        if (sst) {
          sst = false;
          getData({
            start,
          }).then((a) => {
            var m = b.scrollTop;

            setList((list) => {
              var l = [...list, ...a?.content?.listVideo];
              setTimeout(() => {
                sst = true;
              }, 300);
              start = l.length;

              return l.map(
                (a) => (a && (a.key ? null : (a.key = crypto.randomUUID())), a)
              );
            });
            setTimeout(() => (b.scrollTop = m), 16 * 3);
          });
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="page-home-top-buttons">
        {
          null
          /*
          data?.content?.topBtnFilters?.map(({ name, apiFilter }) => (
          <button key={apiFilter} aria-label={name} className="page-home-top-button">
            <span>{"name"}</span>
          </button>
        ))
          
        */
        }
      </div>
  {/*    <Banner data={data?.content?.banner ?? {}} />*/}
      <div id="center">
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
          {/*h?.map?.((a) => (
            <div className="page-content-video-list-row">
              {a?.map?.((a) => a && <CardVideo data={a} key={a?.key} />)}
            </div>
          ))*/}
              {(h)?.map?.((a) => a && <CardVideo data={a} key={a?.key} />)}
        </div> 
          <div className="page-content-video-list-row">
          {(new Array(w*2)).fill("?$").map(() => (
            <CardVideo data={{}} skeleton />
          ))}
          </div>
        <Spin />
      </div>
    </>
  );
}
