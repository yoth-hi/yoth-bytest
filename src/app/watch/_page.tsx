"use client";
import type { Metadata } from "next";
import { render } from "react-dom";

import In from "../../libs/Interpolation";

import { useRef, useEffect, useLayoutEffect, memo, useState } from "react";
import BrowseChannelAndNextItem from "./../../components/BrowseChannelAndNextItem";
import Player from "../../components/player";
var player = {};
const Layer = memo(({ id, sp, platform }: any) => (
  <div className="page-watch-container">
    <div className="page-watch-primary">
      <div className="page-watch-primary-player">
        <div id="cinematic" />
        <div className="page-watch-primary-player-conteiner">
          <Player {...{ id, platform, sp }} />
        </div>
      </div>
    </div>
  </div>
));
function Page({ id, platform }: any) {
  var h ={};
  const [p, sp] = useState(true);
  In(h, "_change-player-mode", function () {
    sp(!arguments[0]["in"][1][0]);
  });
  useEffect(() => {
    window._t_=h;
    const el = document.querySelector(".layout-content") as HTMLElement | null;
    if (p) {
      el?.removeAttribute("full");
    } else el?.setAttribute("full", "");
  }, [p]);
  useLayoutEffect(() => {
    const el = document.body;
    el.setAttribute("watchpage", "");
    return () => el.removeAttribute("watchpage");
  }, []);
  return (
    <>
      <>{!p && <Layer {...{ id, sp, platform }} key={65} />}</>
      <div className="page-watch">
        <BrowseChannelAndNextItem
          Player={p && <Layer {...{ id, sp, platform }} key={65} />}
          _context={{ id, platform }}
        />
      </div>
    </>
  );
}
export default Page;
