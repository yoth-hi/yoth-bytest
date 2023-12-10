"use client";
import Script from "next/script";
import { useRouter } from "next/navigation";
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
import { t } from "../libs/transition";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// var mw=
// {
//     p7:function(a)
//     {
//       a.reverse()
//     },
//     UX:function(a,b)
//     {
//       a.splice(0,b)
//     },
//     qM:function(a,b)
//     {
//       var c=a[0];
//       a[0]=a[b%a.length];
//       a[b%a.length]=c
//     }
// };
function _t(a) {
  if (!a) return;
  a = a.split("");
  a = cz(a, 61);
  a = cz(a, 5);
  a = a.reverse();
  a = a.slice(2);
  a = cz(a, 69);
  a = a.slice(2);
  a = a.reverse();
  return a.join("");
}

function cz(a, b) {
  var c = a[0];
  a[0] = a[b % a.length];
  a[b] = c;
  return a;
}
var bz = function (a) {
  if (!a) return;
  a = a.split("&");
  var _1 = "";
  var _2 = "";
  var _3 = []; //[...a];
  a.forEach((a) => {
    _3.push(a.split("="));
  });
  _1 = decodeURIComponent(_3[2][1]);
  _2 = _3[0][1];
  _1 = _1 + "&alr=yes&sig=" + t(_2);

  return _3.reverse().join("&");
  // decodeURIComponent([_3[2]?.[1],_3[1]?.[1]+"="+_3[0]?.[1]].join("&"));
};

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
            seth={seth}
            h={h}
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
                  onClick={() => seth(h === 0 ? 1 : 0)}
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
var render_cine = undefined,
  srt = undefined,
  audioSource = undefined;

var time = 0,
  r = 0,
  M = 0,
  temp = false;
export default React.memo(function ({ platform, id, sp, controls = true }) {
  const player = React.useRef(null);
  const spin = React.useRef(null);
  const video = React.useRef(null);
  const refTime = React.useRef(null);
  const router = useRouter();
  const [statusPlayerModeWatch, setStatusPlayerModeWatch] = React.useState(1);
  //0 = normal
  //1 = theater
  //2 = fullscreen
  const [isPlay, toPlay] = React.useState(false);
  const [data, setData] = React.useState({});
  const [isErr, setError] = React.useState(false);
  const [start_play, set_start_play] = React.useState(true);
  const [a, b] = React.useState(null); // a = isModeAd, b = setModeAd, item = {stream:{url},config:{time:0}}
  const [c, setResolution] = React.useState(0); // index resolutions
  const [_audioSrc, set_audioSrc] = React.useState(0); // index resolutions
  const [h, seth] = React.useState(0);
  const [temp_, s] = React.useState(false);
  const play_pouse = function () {
    const vid = video.current;
    if (start_play) set_start_play(false);
    if (!vid) return alert("%% no video ");
    vid.paused ? srt.play() : srt.pause();
  };
  const audioSrc = (Object.values(data?.stream || {}).filter(({ qualityLabel })=>!!!qualityLabel))?.[_audioSrc]

  const souce =
    a?.stream?.action?.src ||
    bz(data?.stream?.[c]?.signatureCipher) ||
    data?.stream?.[c]?.url ||data?.stream?.streamM3u8Url;
  const souce_type = a?.stream?.action?.mimeType || data?.stream?.[c]?.mimeType;
  // M?.change?.(souce,souce_type)
  const resolutions = Object.values(data?.stream || {});
  const { STREAM_IS_OFFLINE } = data?.labels || {};
  const handleScroll = (e) => {
    var t = document.body;
    if (e.target.scrollTop > 20) {
      t.setAttribute("scrollwatch", "" + e.target.scrollTop);
    } else {
      t.removeAttribute("scrollwatch");
    }
  };
  React.useEffect(()=>{
   /* if(!audioSource)return;
    audioSource.src = audioSrc?.url;
    audioSource.type = audioSrc?.mimeType?.split(";")?.[0];
*/  },[_audioSrc,data])
  React.useEffect(() => {
    const adt = document.querySelector("#app-desktop");

    if (!sp) return;
    adt.addEventListener("scroll", handleScroll);
    switch (statusPlayerModeWatch) {
      case 0:
        if (temp_) sp((temp = !1));
        fullscreen(false);
        adt.scrollTop = 0;
        break;
      case 1:
        fullscreen(false);
        adt.scrollTop = 0;
        if (temp_) sp((temp = !0));
        break;
      case 2:
        if (temp_) sp((temp = !1));
        fullscreen(true);
        adt.scrollTop = 0;
        break;

      default:
        null;
    }
    return () => {
      adt.scrollTop = 0;
      adt.removeEventListener("scroll", handleScroll);
    };
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
      if (isNaN(video.current.currentTime) || !video.current.paused) r++;
      const vid = video.current;
      if (!video.current.paused) time -= 5;
      var player_controls = player.current.querySelector(".player-controls");
      if (time < 0) {
        player_controls.style.opacity = 0;
      } else player_controls.style.opacity = 1;
      if (video.current.readyState === 4 || video.current.readyState === 3) {
        spin.current.style.display = "none";
      } else {
        spin.current.style.display = "block";
        time = 100;
      }
    }, 50);
    const ev = (event) => {
      if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
      } else {
      }
    };

    addEventListener("fullscreenchange", ev);

    return () => {
      removeEventListener("fullscreenchange", ev);
      clearInterval(interval);
    };
  }, []);
  React.useEffect(() => {
    if (!video.current) return;
    render_cine = render_cine || new Cine({ video: video.current });
    srt = srt || new tr({ video: video.current });
     audioSource = audioSource || document.createElement('source');

  try{
  video.current.appendChild(audioSource);
}catch(a){}
    return () => {
      render_cine?.clear();
      render_cine = undefined;
      srt?.clear?.();
      srt = undefined;
  try{
  video.current.removeChild(audioSource);
}catch(a){}

    };
  }, [video]);
  React.useEffect(() => {
    srt?.setType?.(souce_type || M?.souce_type);
    srt?.setSrc?.(souce || M?.src);
  }, [souce]);
  React.useLayoutEffect(() => {
    Fetch({
      type: "player",
      context: {
        platform,
        id,
      },
    }).then((ft) => {
      window.yoth?.setData?.(ft);
      setData(ft);
    });

    setError(false);
    s(true);
    return () => {};
  }, [id, platform]);

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
      {(start_play|| data?.videoDetails?.tw_isOffline) && (
        <Image
          src={
            platform === "youtube"
              ? "https://i.ytimg.com/vi/" + id + "/hq720.jpg"
              : data?.videoDetails?.thumbnail
          }
          width={"100%"}
        />
      )}
      <Spin _ref={spin} isSpinning className="loading-player" />
      <video
        onTouchMove={hoverPlayer}
        onMouseMove={hoverPlayer}
        tabIndex="-1"
        onError={() => (souce ? setError(true) : null)}
        onPlay={() => {
          toPlay(true);
        }}
        onPause={() => {
          toPlay(false);
        }}
        className="video-stream"
        controlsList="nodownload"
        muted=""
        autoPlay=""
        onClick={() => {
          play_pouse();
        }}
        ref={video}
        type={souce_type}
      />
      {isErr && (
        <div className="player-error">
          {"Error: " +
            t("This_video_could_not_be_loaded") +
            " | code:" +
            srt?.a?.errorCode()}
        </div>
      )}
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
        <CogMenu
          resolutions={resolutions}
          setResolution={setResolution}
          seth={seth}
          h={h}
        />
        <div className="player-bottom-bg" />
        {a && (
          <div className="skip-ads">
            <span>Skip ads</span>
            <NextVideo />
          </div>
        )}
        {data?.videoDetails&&data?.videoDetails?.tw_isOffline && (
          <div className="player-card-info" title="offline">
            <div className="player-card-info-title">{STREAM_IS_OFFLINE}</div>
            <div className="player-card-info-metadata">
              <div>{"--"}</div>
              <div>{" • "}</div>
              <div>{"--"}</div>
            </div>
          </div>
        )}
        {data.videoDetails && controls && !data?.videoDetails?.tw_isOffline && (
          <>
            {!data?.videoDetails?.tw_isOffline && (
              <div className="player-top">
                <div className="player-top-bg" />
                <div>
                  <h1 className="title">{data?.videoDetails?.title}</h1>
                </div>
              </div>
            )}
            <div className="player-bottom">
              <Slider video={video} tt={srt} time={refTime}/>
              <div className="player-bottom-buttons">
                <div className="player-bottom-buttons-flex">
                  <Button
                    className="player-bottom-btn play"
                    onClick={() => {
                      play_pouse();
                    }}
                    aria-label={isPlay ? t("Pause_K") : t("Play_K")}
                  >
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                    >
                      <path
                        d={
                          isPlay
                            ? "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
                            : "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                        }
                      ></path>
                    </svg>
                  </Button>
                  <Button className="player-bottom-btn  resize-icon-player next-video">
                    <NextVideo />
                  </Button>
                  <Vol video={video} />
                  <span className="player-time-display" ref={refTime}>00:00 / 00:00</span>
                </div>
                <div className="player-bottom-buttons-flex">
                  <Button
                    className="resize-icon-player player-bottom-btn"
                    onClick={() => seth(h === 0 ? 1 : 0)}
                  >
                    <Settings />
                  </Button>
                  <Button
                    className="player-bottom-btn"
                    onClick={() => {
                      if (location.pathname === "/watch") {
                        router.push("/");

                        window.yoth?.setMode?.("miniplayer");
                        document
                          .querySelector(".layout-content")
                          ?.classList?.add("animation_on_mode_miniplayer");
                      } else {
                        router.push("/watch?v=" + id).then(() => {
                          window.yoth?.setMode?.("watch");
                        });
                      }
                    }}
                  >
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                    >
                      <path
                        d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </Button>
                  {statusPlayerModeWatch != 2 && (
                    <Button
                      className="resize-icon-player player-bottom-btn"
                      onClick={() => {
                        if (location.pathname !== "/watch") {
                          router.push("/watch?v=" + id).then(() => {
                            window.yoth?.setMode?.("watch");
                          });
                        }
                        setStatusPlayerModeWatch(
                          statusPlayerModeWatch === 1 ? 0 : 1
                        );
                      }}
                    >
                      <TheaterMode />
                    </Button>
                  )}
                  <Button
                    className="resize-icon-player player-bottom-btn"
                    onClick={() => {
                      if (location.pathname !== "/watch") {
                        router.push("/watch?v=" + id).then(() => {
                          window.yoth?.setMode?.("watch");
                          setStatusPlayerModeWatch(
                            statusPlayerModeWatch === 2 ? 1 : 2
                          );
                        });
                      } else
                        setStatusPlayerModeWatch(
                          statusPlayerModeWatch === 2 ? 1 : 2
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
          </>
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
const CogMenu = function ({ seth, setResolution, resolutions, h }) {
  const setPlaybackRate = function (a) {
    srt?.setPlaybackRate(a);
  };
  resolutions = resolutions.map(({ qualityLabel }, a) => {
    return {
      title: qualityLabel,
      onClick: () => setResolution(a),
    };
  });
  const controles = [
    {
      type: "menu",
      onClick: () => seth(2),
      icon: null,
      title: "Quality",
      items: [
        {
          onClick: () => seth(1),
          title: "< Back",
        },
        ...resolutions,
      ],
    },
    {
      type: "menu",
      onClick: () => seth(3),
      icon: null,
      title: "Speed",
      items: [
        {
          onClick: () => seth(1),
          title: "< Back",
        },
        {
          onClick: () => (setPlaybackRate(0.25), seth(1)),
          title: "0.25x",
        },
        {
          onClick: () => (setPlaybackRate(0.5), seth(1)),
          title: "0.5x",
        },
        {
          onClick: () => (setPlaybackRate(0.75), seth(1)),
          title: "0.75x",
        },
        {
          onClick: () => (setPlaybackRate(1), seth(1)),
          title: "normal",
        },
        {
          onClick: () => (setPlaybackRate(1.25), seth(1)),
          title: "1.25x",
        },
        {
          onClick: () => (setPlaybackRate(1.5), seth(1)),
          title: "1.5x",
        },
        {
          onClick: () => (setPlaybackRate(1.75), seth(1)),
          title: "1.75x",
        },
        {
          onClick: () => (setPlaybackRate(2), seth(1)),
          title: "2x",
        },
      ],
    },
  ];
  return (
    <div
      className={"settings-player" + (h == 0 ? " settings-player-hidden" : "")}
      style={{
        height:
          (h == 1
            ? controles.length
            : controles[h - 2]?.items?.length > 5
            ? 5
            : controles[h - 2]?.items?.length) *
            32 +
          18 +
          "px",
      }}
    >
      <div className="settings-player-content">
        {h == 1
          ? controles.map((props) => <ButtonCog {...props} />)
          : controles[h - 2]?.items?.map((props) => (
              <ButtonCog {...props} set_={seth} />
            ))}
      </div>
    </div>
  );
};

const ButtonCog = function ({ set_, g, h, title, onClick }) {
  return (
    <div onClick={() => onClick(() => set_(0))} className="btn-cog">
      <div className="btn-cog-icon"></div>
      <div className="btn-cog-text">
        {title}
        {h && <div className="btn-cog-subtitle">h2</div>}
      </div>
      {g && <div className="btn-cog-default">f</div>}
    </div>
  );
};
function ry(a, b) {
  b.apply(arguments, this);
  a.apply(arguments, this);
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
  const is = a === undefined ? !isInFullScreen : a;
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