"use client";
import Script from "next/script";

import tr from "../service/player";

import Slider from "./Slider";
import Image from "./image";
import Spin from "./icons/span";
import Cine from "../libs/Cine";
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
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
/*      {!data?.videoDetails?.tw_isOffline && (
        <div className="player-top">
          <div className="player-top-bg" />
          <div>
            <h1 className="title">{data?.videoDetails?.title}</h1>
          </div>
        </div>
      )}*/
/*   {data?.videoDetails?.tw_isOffline && (
        <div className="player-card-info" title="offline">
          <div className="player-card-info-title">
            {STREAM_IS_OFFLINE}
          </div>
          <div className="player-card-info-metadata">
            <div>{STREAM_IS_OFFLINE}</div>
            <div>{" • "}</div>
            <div>{data?.labels?.STREAM_IS_OFFLINE}</div>
          </div>
        </div>
      )}*/
/*      {!data?.videoDetails?.tw_isOffline && (
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
      )}*/
var render_cine = undefined;

var time = 0,
  r = 0,
  temp = false;
export default React.memo(function ({ platform, id, sp }) {
  const player = React.useRef(null);
  const spin = React.useRef(null);
  const video = React.useRef(null);
  const [statusPlayerModeWatch, setStatusPlayerModeWatch] = React.useState(1);
  //0 = normal
  //1 = theater
  //2 = fullscreen
  const [isPlay, toPlay] = React.useState(false);
  const [data, setData] = React.useState({});
  const [start_play, set_start_play] = React.useState(true);
  const [a, b] = React.useState(null); // a = isModeAd, b = setModeAd, item = {stream:{url},config:{time:0}}
  const play_pouse = function () {
    const vid = video.current;
    if (start_play) set_start_play(false);
    if (!vid) return alert("%% no video ");
    vid.paused ? vid.play() : vid.pause();
  };
  const souce =
    a?.stream?.action?.src ||"https://rr3---sn-q4fl6nsr.googlevideo.com/videoplayback?expire=1700462459&ei=G6taZa-qK4jl8wSx8Ym4Cg&ip=5.182.110.23&id=o-AFlI1oNEwR5HNqeXrvDlmgWOYmGnPYY_fvChCXZhhEIr&itag=22&source=youtube&requiressl=yes&mh=6s&mm=31%2C29&mn=sn-q4fl6nsr%2Csn-q4flrnsl&ms=au%2Crdu&mv=m&mvi=3&pl=24&pcm2=yes&initcwndbps=590000&spc=UWF9f-eD7JWf5-WXhLMyQAHZH8lteNE&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=253.143&lmt=1699333533284311&mt=1700440635&fvip=3&fexp=24007246&beids=24350018&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=ANLwegAwRQIhAIHs_UCcirK1ceYkwbw19z_HsohWWwgtLcIuY-ihN4SwAiAqRvG2sRvo_gLhsilHLSuBDeJm8aKWsxhzGCIMeTa4Nw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AM8Gb2swRgIhAM7GxmU1qtiHIiJiQX1M20vkdBxKqemuO-gE-5Beq0akAiEAw07dhHiGZtJS-oR51OozkESEDkoImPIU-jHjTaRZh70%3D&title=Rogue%20-%20Empires%20%5BMonstercat%20Official%20Music%20Video%5D"
 const handleScroll = (e) => {
    var t = document.body;
    if((e.target). scrollTop > 20) {
       t.setAttribute("scrollwatch","")
    } else {
       t.removeAttribute("scrollwatch")
      
    }
  };
  React.useEffect(() => {
    const adt = document.querySelector ("#app-desktop");
    
    if (!sp) return;
    adt .addEventListener("scroll",handleScroll )
    switch (statusPlayerModeWatch) {
      case 0:
        if (temp === !1) sp((temp = !1));
        fullscreen(false);
        break;
      case 1:
        fullscreen(false);
        if (temp === !0) sp((temp = !0));
        break;
      case 2:
        if (temp === !1) sp((temp = !1));
        fullscreen(true);
        break;

      default:
        null;
    }
    return ()=> adt .removeEventListener("scroll",handleScroll )
  }, [statusPlayerModeWatch]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      var y;
      if ((y = data.ads)) {
        [...y].forEach((k) => {
          if (k.time === parseInt(r)) {
            b(k);
          }
        });
      }
      if (!isNaN(video.current.currentTime) && !video.current.paused) r++;

      time -= 5;
      var player_controls = player.current.querySelector(".player-controls");
      if (time < 0) {
        player_controls.style.opacity = 0;
      } else player_controls.style.opacity = 1;
      if (video.current.readyState === 4) {
        spin.current.style.display = "none";
      } else {
        spin.current.style.display = "block";
        time = 100;
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    if (!video.current) return;
    render_cine = render_cine || new Cine({ video: video.current });
    return () => {
      render_cine?.clear();
      render_cine = undefined;
    };
  }, [video]);
  React.useLayoutEffect(() => {
    Fetch({
      type: "player",
      context: {
        platform,
        id,
      },
    }).then(setData);
  }, []);
  const index_resolution = 3;
  const hoverPlayer = function () {
    time = 200;
    var player_controls = player.current.querySelector(".player-controls");
    player_controls.style.opacity = 1;
  };
  return (
    <div
      ref={player}
      onTouchMove={hoverPlayer}
      onMouseMove={hoverPlayer}
      className="video-player"
      tabIndex="-1"
    >
      {start_play && (
        <Image src={data?.videoDetails?.thumbnail} width={"100%"} />
      )}
      <Spin _ref={spin} isSpinning className="loading-player" />
      <video
        onTouchMove={hoverPlayer}
        onMouseMove={hoverPlayer}
        tabIndex="-1"
        onPlay={() => {
          toPlay(true);
        }}
        onPause={() => {
          toPlay(false);
        }}
        className="video-stream"
        controlsList="nodownload"
        muted=""
        onLoad={() => video.current.play()}
        autoplay=""
        onClick={() => {
          play_pouse();
        }}
        ref={video}
        src={souce || data.stream?.list?.[index_resolution]?.url}
        type="application/x-mpegURL"
      />

      <div
        className="player-controls"
        onTouchMove={hoverPlayer}
        onMouseMove={hoverPlayer}
      >
        <div className="player-top">
          <div className="player-top-bg" />
          <div>
            <h1 className="title">{data.videoDetails?.title}</h1>
          </div>
        </div>
        <div className="video-stream" id="twplayer" />
        <div className="player-bottom-bg" />
        {a && (
          <div className="skip-ads">
            <span>Skip ads</span>
            <NextVideo />
          </div>
        )}
        {data.videoDetails && (
          <div className="player-bottom">
            <Slider video={video} />
            <div className="player-bottom-buttons">
              <div className="player-bottom-buttons-flex">
                <Button
                  className="player-bottom-btn play"
                  onClick={() => {
                    play_pouse();
                  }}
                >
                  <svg
                    height="100%"
                    version="1.1"
                    viewBox="0 0 36 36"
                    width="100%"
                  >
                    {isPlay ? (
                      <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
                    ) : (
                      <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
                    )}
                  </svg>
                </Button>
                <Button className="player-bottom-btn  next-video">
                  <NextVideo />
                </Button>
                <Vol video={video} />
              </div>
              <div className="player-bottom-buttons-flex">
                {statusPlayerModeWatch != 2 && (
                  <Button
                    className="player-bottom-btn"
                    onClick={() => {
                      setStatusPlayerModeWatch(
                        statusPlayerModeWatch === 1 ? 0 : 1
                      );
                    }}
                  >
                    <TheaterMode />
                  </Button>
                )}
                <Button
                  className="player-bottom-btn"
                  onClick={() => {
                    setStatusPlayerModeWatch(
                      statusPlayerModeWatch === 2 ? 0 : 2
                    );
                  }}
                >
                  {statusPlayerModeWatch === 2 ? (
                    <ExitFullscreen />
                  ) : (
                    <Fullscreen />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
const Iframe = function ({ type, ...rest }) {
  const src = type?.replace(
    /tw\:(\S+)/,
    "https://player.twitch.tv/?channel=$1&autoplay=true&parent=" +
      location.hostname
  );
  return type && <iframe allowfullscreen="" src={src} {...rest} />;
};
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
function fullscreen(a) {
  var isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  var body = document.body;
  const is = a ?? !isInFullScreen;
  if (is) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
    body.setAttribute("fullscreen", "");
  } else {
    if (docElm.exitFullscreen) {
      docElm.exitFullscreen();
    } else if (docElm.webkitExitFullscreen) {
      docElm.webkitExitFullscreen();
    } else if (docElm.mozCancelFullScreen) {
      docElm.mozCancelFullScreen();
    } else if (docElm.msExitFullscreen) {
      docElm.msExitFullscreen();
    }
    body.removeAttribute("fullscreen");
  }
}
