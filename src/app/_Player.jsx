"use client";
import { useRef, useEffect, useLayoutEffect, memo, useState } from "react";
import Player from "./../components/player";
export default function () {
  const [id, setId] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [mode, setMode] = useState("watch");
  const _ = useRef(null);
  if (typeof window !== "undefined") {
    var w = (window.yoth = window.yoth || {});
    // Client-side-only code
    w.setId = function (a, b) {
      setId(a);
      setPlatform(b);
    };
    w.setMode = setMode;
    w.append = function (a) {
      if (_.current) a?.appendChild(_.current);
    };
  }
  useEffect(() => {
    var x = document.querySelector(".miniplayer");
    switch (mode) {
      case "miniplayer":
        var j = x?.querySelector(".miniplayer .miniplayer-player-container");
        if (j) w.append(j);

        x?.classList.remove("hidden");

        break;

      default:
        x?.classList.add("hidden");
    }
  }, [mode]);
  useEffect(() => {
    if (id) w.hasVideo = true;
    else {
      w.hasVideo = false;
    }
    return () => {
      w.hasVideo = false;
    };
  }, [id]);
  return (
    <div ref={_}>
      <Layer id={id} platform={platform} sp={(a) => w.sp?.(a)} />
    </div>
  );
}
const Layer = memo(({ id, sp, platform }) => (
  <div className="page-watch-container" key={287}>
    <div className="page-watch-primary">
      <div className="page-watch-primary-player">
        <div id="cinematic" />
        <div className="page-watch-primary-player-conteiner" videoid={id}>
          <Player {...{ id, platform, sp }} key={287} />
        </div>
      </div>
    </div>
  </div>
));
