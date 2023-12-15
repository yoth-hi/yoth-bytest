"use client";
import { render } from "react-dom";

import In from "../../libs/Interpolation";

import { useRef, useEffect, useLayoutEffect, memo, useState } from "react";
import BrowseChannelAndNextItem from "./../../components/BrowseChannelAndNextItem";
import Player from "../../components/player";
var player = {};
function Page({ id, platform, data }) {
  var h = {};
  const [p, sp] = useState(true);
  const w = useRef(null);
  const t = useRef(null);

  useEffect(() => {
    const el = document.querySelector(".layout-content");
    const b = document.querySelector("#player-video");
    var _w = window.yoth;
    if (_w) _w.sp = sp;
    if (p) {
      el?.removeAttribute("full");
      _w?.append(w.current);
    } else {
      el?.setAttribute("full", "");
      _w?.append(t.current);
    }
  }, [p]);
  useLayoutEffect(() => {
    var _w = window.yoth;
    if (_w) _w.sp = sp;
    const el = document.body;
    el.setAttribute("watchpage", "");
    return () => {
      el.removeAttribute("watchpage");
      document
        .querySelector(".layout-content")
        ?.classList?.remove("animation_on_mode_miniplayer");
    };
  }, []);
  useEffect(() => {
    const a = window.yoth || {};
    if (id && platform) a?.setId && a.setId(id, platform);
    a?.setMode && a.setMode("watch");
  }, [id, platform]);
  return (
    <>
      <>
        <style global jsx>{`
          html[dark] body:not([fullscreen]) {
            background: #000 !important;
          }
        `}</style>
      </>
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
