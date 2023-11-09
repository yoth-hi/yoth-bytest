"use client";
import Slider from "./Slider";
import Image from "./image";
import Cine from "../libs/Cine";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import Play from "./icons/play";
import Pause from "./icons/pause";
import Fullscreen from "./icons/fullscreen";
import ExitFullscreen from "./icons/exitFullscreen";
import TheaterMode from "./icons/theaterMode";
import Settings from "./icons/Settings";
import Fetch from "../service/ApiRest";
import Popout from "./icons/Popout";
import NextVideo from "./icons/nextVideo";
import Vol from "./volume";
import Button from "./button_root";

import videojs from "video.js";
import "video.js/dist/video-js.css";
import Hls from "hls.js";
var data_cache = null;
function fullscreen(call) {
  var is = false;
  var isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (!isInFullScreen) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
    is = true;
  } else {
    is = false;
    if (docElm.exitFullscreen) {
      docElm.exitFullscreen();
    } else if (docElm.webkitExitFullscreen) {
      docElm.webkitExitFullscreen();
    } else if (docElm.mozCancelFullScreen) {
      docElm.mozCancelFullScreen();
    } else if (docElm.msExitFullscreen) {
      docElm.msExitFullscreen();
    }
    alert("exit fullscreen, doesnt work");
  }
  call?.(is);
}
var initialized = false;
const setPlayerMode = function (isFull, isTheater) {
  if(!initialized)return;
  initialized=true
  const b = document.querySelector("body");
  const a = document.querySelector(".page-watch-container");
  fullscreen((is) => {
    if (is) b?.setAttribute("fullscreen", "");
    else b?.removeAttribute("fullscreen", "");
    if (is || isTheater) a?.setAttribute("full", "");
    else a?.removeAttribute("full");
  });
  const c = document.querySelector("html");
};

export default function ({ platform, id }) {
  const [data, setData] = useState({});
  const sp = window["_change-player-mode"];
  const video = useRef(null);
  const [paused, setPaused] = useState(true);
  const [start_play, setStart_play] = useState(false);
  const [cogMenutype, setCogMenuType] = useState(0);

  const [theater, setTheater] = useState(false);
  const [resolutions, setResolutions] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [_hls, set_hls] = useState(null);
  useLayoutEffect(() => {
    const hls = new Hls();
    if (Hls.isSupported() && platform === "twitch") {
      set_hls(hls);
      hls.attachMedia(video.current);
    }
    const setQuality = (qualityIndex) => {
      hls.startLoad(0); // Stop loading the current playlist
      hls.nextLevel = qualityIndex; // Set the desired quality
      hls.startLoad(); // Start loading the new playlist
      return { hls, Hls };
    };
    setQuality;
    data_cache =
      data_cache ||
      Fetch({
        type: "player",
        context: {
          platform,
          id,
        },
      }).then((a) => {/*
        var options = {
    width: 100000,
    height: 10000,
    channel: id,
    
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ["embed.example.com", "othersite.example.com"]
  };console.log(__a)
  var player = new __a.Player("twplayer", options);
  player.setVolume(0.5);
  window.player=player*/
        setData(a);
        hls.loadSource(a?.stream?.streamM3u8Url);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          // Access available variants (resolutions)
          function calc(height, width) {
            const res = height * width;
            var result;
            if (res > 8294400) result = "4k";
            else if (res > 2073600) result = "hd";
            else if (res > 0) result = "";
            return result;
          }
          const variants = data.levels.map((level, index) => ({
            title: level.height + "p",
            bandwidth: level.bitrate,
            subtitle: calc(level.height, level.width),
            onClick(t) {
              t?.();
              setQuality(index);
            },
          }));
          setResolutions(variants);
          // Function to get the current quality
          const getCurrentQuality = () => {
            const currentQualityIndex = hls.currentLevel;
            const currentQuality = variants[currentQualityIndex];
            return currentQuality;
          };
          //    setQuality(getCurrentQuality``)
        });
      });

    const a = document.body;
    if (location?.pathname == "/watch") {
      a?.setAttribute("watchpage", "");
    } else a?.removeAttribute("watchpage");
    return () => {
      a?.removeAttribute("watchpage");
    };
  }, []);
  useEffect(() => {
    const a = document.querySelector("#app-desktop");
    a?.addEventListener?.("scroll", () => {
      if (location?.pathname != "/watch") return;
      window.__Scroll = 0;
      if (a?.scrollTop > 10) {
        b?.setAttribute("scrollwatch", "");
        window.__Scroll = a?.scrollTop;
      } else b?.removeAttribute("scrollwatch");
    });
    const b = document.body;
    const d =b["_Cinematic"] ||
      (b["_Cinematic"] = Cine({
        video: video.current,
      }));
  }, []);
  useEffect(() => {
    setPlayerMode(fullscreen,theater)
  }, [fullscreen,theater]);
  return (
    <div className="video-player" tabIndex="-1">
      {(data?.videoDetails?.tw_isOffline || !start_play) && data && (
        <Image src={data?.videoDetails?.thumbnail} width={"100%"} />
      )}
   {/*   <video
        tabIndex="-1"
        className="video-stream"
        controlsList="nodownload"
        ref={video}
        onClick={() =>
          video.current?.paused
            ? video.current?.play?.()
            : video.current?.pause?.()
        }
        onPlay={() => (setStart_play(true), setPaused(false))}
        onPause={() => setPaused(true)}
        //src={"https://video-weaver.ord03.hls.ttvnw.net/v1/playlist/CpsFAJ0uvSHEgdNq2TwfJSreCb6fOcZRWEFg7FKH_lrLeJnZkNSP2duniMqY78ZwWW3xSnGPSfHMnjBo8fHgcToMKP6eEr-hb9BUBNQE2ENqZLIWdOzLcfEnOoTFSfmRBrt9OZc2PVR7sXE8OEjVoZrPXjbNz34zInW-BrfNZOJIHlQ6YTXaPC6QZcJDEmMeXM8cv6i_oPpFvmLU2zT9ZqBEHQDBG-EK-bhgoSV8O6p6eH8S6p0rQPhNNKS3upsbDgJswn_DG-tejjxpcnUtHAuInmvTDuWRg-lqlWqDQr8x6WUsk3FTpqoAq-tZaY1CpG_3eejhosLyozGtG6aS2DtZ_vDOsWYpkxBa2WW3V894cStR9sLqzMQsvDEUrRCzh5H3944hoYDqHa1iLVsV10KhhiVOl66MCeeTqzwBSFjNzQZlxcgGkn2LD_9rygrnjCCK55Z6owfhdMgYcIHGVahHq62EWtVYhasaqfDfaNS72rdJsL7-QpC21Hyq7D9b9SRZJV6YUXJzlSC7lQ9jjOHHDWSirXaYjLDS0FbWQUpLIxtL-erq8KWa0uXtyNKWURYnIGRHsuo_6fc7_bOWgsWI52RIPe97-tS4aJ6RxQxB10FLXo8Z2-F6Hi3QkN0MU2dFaoXd_ssqb7b45zdw_UdJYRdwwhRVI94I4GDRiEvF4VvyGfRg0UAR0Nod5izBsTdeRh5kw8YdSlU1gwd1jb7YWLl0WvBsThPeJDXhmFi1jCmxi7KwkD-ZF7OyKEJMEWDR4IHS4isB4eHXZtzsbmuSG0w_xWoYFaXrYmUjQdAIVXd5CY4p_aRj5b02QuBM2-5I_6doPrbKZPIuTmK3RE7qcEyTnDS2iH-jrlPV2Ebda34JVtu-rYJnJV_bRhoMIU3vuZRPsqK8Ra7CIAEqCXVzLWVhc3QtMjDuBw.m3u8"}
      ></video>*/}
      <div className="video-stream" id="twplayer"/>
      {!data?.videoDetails?.tw_isOffline && (
        <div className="player-top">
          <div className="player-top-bg" />
          <div>
            <h1 className="title">{data?.videoDetails?.title}</h1>
          </div>
        </div>
      )}

      {data?.videoDetails?.tw_isOffline && (
        <div className="player-card-info" title="offline">
          <div className="player-card-info-title">
            {data?.labels?.STREAM_IS_OFFLINE}
          </div>
          <div className="player-card-info-metadata">
            <div>{data?.labels?.STREAM_IS_OFFLINE}</div>
            <div>{" • "}</div>
            <div>{data?.labels?.STREAM_IS_OFFLINE}</div>
          </div>
        </div>
      )}
      {!data?.videoDetails?.tw_isOffline && (
        <>
          <CogMenu
            resolutions={resolutions}
            setCogMenuType={setCogMenuType}
            cogMenutype={cogMenutype}
          />
          <div className="player-bottom-bg" />
          <div className="player-bottom">
            <Slider />
            <div className="player-bottom-buttons">
              <div className="player-bottom-buttons-flex">
                <Button
                  className="player-bottom-btn play"
                  onClick={() =>
                    video.current?.paused
                      ? video.current?.play?.()
                      : video.current?.pause?.()
                  }
                >
                  <svg
                    height="100%"
                    version="1.1"
                    viewBox="0 0 36 36"
                    width="100%"
                  >
                    {!paused ? (
                      <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
                    ) : (
                      <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
                    )}
                  </svg>
                </Button>
                <Button className="player-bottom-btn  next-video">
                  <NextVideo />
                </Button>
                <div className="player-next">
                  <img
                    src="https://i.ytimg.com/vi/IIJs2LmjjfQ/hq720.jpg"
                    className="player-next-thumbnail"
                  />
                  <div className="player-next-details ">
                    <h3 className="player-next-title">
                      Caso da MC Pipokinha plagiando música
                    </h3>
                    <span className="player-next-metadata">Goularte2</span>
                    <span className="player-next-metadata">
                      13 mil visualizações • há 48 minutos
                    </span>
                  </div>
                </div>
                <Vol video={video} />
              </div>
              <div className="player-bottom-buttons-flex">
                <Button
                  className="player-bottom-btn"
                  onClick={() => {
                    video.current
                      ?.requestPictureInPicture?.()
                      .then(() => null)
                      .catch(console.error);
                  }}
                >
                  <Popout />
                </Button>
                <Button
                  className="player-bottom-btn"
                  onClick={() => setCogMenuType(cogMenutype === 0 ? 1 : 0)}
                >
                  <Settings />
                </Button>
                {!fullscreen && (
                  <Button
                    className="player-bottom-btn"
                    onClick={() => (setTheater(!theater), sp(theater))}
                  >
                    <TheaterMode />
                  </Button>
                )}
                <Button
                  className="player-bottom-btn"
                  onClick={() => (setFullscreen(!fullscreen), sp(fullscreen))}
                >
                  {fullscreen ? <ExitFullscreen /> : <Fullscreen />}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const CogMenu = function ({ setCogMenuType, resolutions, cogMenutype }) {
  const controles = [
    {
      type: "menu",
      onClick: () => setCogMenuType(2),
      icon: null,
      title: "Quality",
      items: [
        {
          onClick: () => setCogMenuType(1),
          title: "< Voutar",
        },
        ...resolutions,
      ],
    },
    {
      type: "menu",
      onClick: () => setCogMenuType(2),
      icon: null,
      title: "Speed",
      items: [
        {
          onClick: () => setCogMenuType(1),
          title: "< Voutar",
        },
        {},
      ],
    },
  ];
  return (
    <div
      className={
        "settings-player" + (cogMenutype == 0 ? " settings-player-hidden" : "")
      }
      style={{
        height:
          (cogMenutype == 1
            ? controles.length
            : controles[cogMenutype - 2]?.items?.length > 5
            ? 5
            : controles[cogMenutype - 2]?.items?.length) *
            32 +
          18 +
          "px",
      }}
    >
      <div className="settings-player-content">
        {cogMenutype == 1
          ? controles.map((props) => <ButtonCog {...props} />)
          : controles[cogMenutype - 2]?.items?.map((props) => (
              <ButtonCog {...props} set_={setCogMenuType} />
            ))}
      </div>
    </div>
  );
};

const ButtonCog = function ({ set_, title, onClick }) {
  return (
    <div onClick={() => onClick(() => set_(0))} className="btn-cog">
      <div className="btn-cog-icon"></div>
      <div className="btn-cog-text">
        {title}
        <div className="btn-cog-subtitle">h2</div>
      </div>
      <div className="btn-cog-default">f</div>
    </div>
  );
};
function ry(a, b) {
  b.apply(arguments, this);
  a.apply(arguments, this);
}
function t(r, e) {
  r?.(e === 1);
}
