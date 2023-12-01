"use client";
import type { Metadata } from "next";
import { render } from "react-dom";

import In from "../../libs/Interpolation";

import { useRef, useEffect, useLayoutEffect, memo, useState } from "react";
import BrowseChannelAndNextItem from "./../../components/BrowseChannelAndNextItem";
import Player from "../../components/player";
var player = {};
const Layer = memo(({ id, sp, platform }: any) => (
  <div className="page-watch-container" key={287}>
    <div className="page-watch-primary">
      <div className="page-watch-primary-player">
        <div id="cinematic" />
        <div className="page-watch-primary-player-conteiner">
          <Player {...{ id, platform, sp }} key={287} />
        </div>
      </div>
    </div>
  </div>
));
function Page({ id, platform, data }: any) {
  var h = {};
  const [p, sp] = useState(true);
  const w = useRef<any>(null);
  const t = useRef<any>(null);
  In(h, "_change-player-mode", function () {
    sp(!arguments[0]["in"][1][0]);
  });
  
  useEffect(() => {
    const el = document.querySelector(".layout-content") as HTMLElement | null;
    const b = document.querySelector("#player-video") as HTMLElement | null;
    var _w = window.yoth;if(_w)_w.sp=sp;
    if (p) {
      el?.removeAttribute("full");
      _w?.append(w.current);
    } else {
      el?.setAttribute("full", "");
      _w?.append(t.current);
    }
  }, [p]);
  useLayoutEffect(() => {
    var _w = window.yoth;if(_w)_w.sp=sp;
    const el = document.body;
    el.setAttribute("watchpage", "");
    return () => {
      el.removeAttribute("watchpage");
      document.querySelector(".layout-content")?.classList?.remove("animation_on_mode_miniplayer");
    };
  }, []);
  useEffect(() => {
    const a: object = window?.yoth || {};
    if(id&&platform)a?.setId && a.setId(id, platform);
    a?.setMode && a.setMode("watch");
  }, [id, platform]);
  return (
    <>
      <style global jsx>{`
        html[dark] body {
          background: #000 !important;
        }
      `}</style>
      <div ref={t}></div>
      <div className="page-watch">
        <BrowseChannelAndNextItem
          Player={<div ref={w}></div>}
          data={data}
          _context={{ id, platform }}
        />
      </div>
    </>
  );
}
export default Page;
