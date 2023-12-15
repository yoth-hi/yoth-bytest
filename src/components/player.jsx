"use client";
import Script from "next/script";
import { useRouter } from "next/navigation";
import tr from "../service/player";
import Slider from "./Slider";
import HoverCardVideo from "./hoverCardVideo";
import Image from "./image";
import Spin from "./icons/span";
import Cine from "../libs/Cine";
import Play from "./icons/play";
import Pause from "./icons/pause";
import Fullscreen from "./icons/fullscreen";
import ExitFullscreen from "./icons/exitFullscreen";
import ArrowLeft from "./icons/ArrowLeft";
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
function xmlToVtt(xmlString) {
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(xmlString, "text/xml");
  let textNodes = xmlDoc.querySelectorAll("text");

  let vttString = "WEBVTT\n\n";

  textNodes.forEach((textNode, index) => {
    let start = parseFloat(textNode.getAttribute("start")).toFixed(3);
    let dur = parseFloat(textNode.getAttribute("dur")).toFixed(3);
    let textContent = textNode.textContent.trim();

    vttString += `${index + 1}\n${formatTime(start)} --> ${formatTime(
      parseFloat(start) + parseFloat(dur)
    )}\n${textContent}\n\n`;
  });

  return vttString;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = (seconds % 60).toFixed(3);
  return `${String(minutes).padStart(2, "0")}:${remainingSeconds.padStart(
    6,
    "0"
  )}`;
}

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
  const [caption, setCaption] = React.useState(-1);
  const [audioTruck, setAudioTruck] = React.useState(-1);
  const [fff, setfff] = React.useState(null);
  const [isModeAnb, setModeAnb] = React.useState(true);
  const [nerd, setNerd] = React.useState(false);

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
  const audioSrc = Object.values(data?.stream || {}).filter(
    ({ qualityLabel }) => !!!qualityLabel
  )?.[_audioSrc];

  const souce =
    a?.stream?.action?.src ||
    bz(data?.stream?.[c]?.signatureCipher) ||
    data?.stream?.[c]?.url ||
    data?.stream?.streamM3u8Url;
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
  React.useEffect(() => {
    /* if(!audioSource)return;
    audioSource.src = audioSrc?.url;
    audioSource.type = audioSrc?.mimeType?.split(";")?.[0];
*/
  }, [_audioSrc, data]);
  React.useEffect(() => {
    if (data?.captions?.[caption]?.baseUrl)
      fetch(data?.captions?.[caption]?.baseUrl)
        .then((a) => a.text())
        .then((a) => {
          const blob = new Blob([xmlToVtt(a)], {});
          setfff(URL.createObjectURL(blob));
        });
  }, [caption, data]);
  React.useState(() => {
    try {
      /* code */
    const body = document.body;
    const spo = body.querySelector(".btn-cog input");
    if (spo) spo.checked = isModeAnb;
    if (isModeAnb) {
      body.classList.remove("no-mode-ambiente");
    } else {
      body.classList.add("no-mode-ambiente");
    }
    } catch (e) {}
  }, [isModeAnb]);
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
    audioSource = audioSource || document.createElement("source");

    try {
      video.current.appendChild(audioSource);
    } catch (a) {}
    return () => {
      render_cine?.clear();
      render_cine = undefined;
      srt?.clear?.();
      srt = undefined;
      try {
        video.current.removeChild(audioSource);
      } catch (a) {}
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
      style={
        id
          ? {}
          : {
              pointerEvents: "none",
              display: "none",
              width:"0px",
              height:"0px",
              userSelect:"none"
            }
      }
      tabIndex="-1"
    >
      {(start_play || data?.videoDetails?.tw_isOffline) && (
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
        /*  onError={() => (souce ? setError(true) : null)}*/
        onPlay={() => {
          set_start_play(false);
          if(!id){
            video.current?.pause?.();
          }
          toPlay(id&&true);
        }}
        onPause={() => {
          toPlay(false);
          set_start_play(false)
        }}
        className="video-stream"
        loading="lazy"
        preload="none"
        controlsList="nodownload"
        muted=""
        autoPlay=""
     /*   onCanPlayThrough={srt?.onCanPlayThrough}*/
        onProgress={()=>{
          srt?.onProgress?.();
          try {
            const vid = video.current||{};
            const end = vid?.buffered.end?.(0);
            const soFar = parseInt((end/vid?.duration)*100);
            vid._loadTime=soFar;
          } catch (e) {}
        }}
        onClick={() => {
          play_pouse();
        }}
        ref={video}
        type={souce_type}
      >
        {caption > -1 && (
          <track
            label={data?.captions?.[caption]?.name?.simpleText}
            kind="subtitles"
            src={fff || data?.captions?.[caption]?.baseUrl}
            srcLang={data?.captions?.[caption]?.languageCode}
            default
          />
        )}
      </video>
      {false&&<Snerd video={video.current} config={{ platform, id }} />}
      <div className="player-screan-end">
        <div className="player-screan-end-content">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
            <div className="player-screan-end-item">
              <img src="https://i3.ytimg.com/vi/k7_KXpwQ2PY/hq720.jpg" />
            </div>
          ))}
        </div>
      </div>
      {isErr && (
        <div className="player-error">
          {"Error: " +
            t("This_video_could_not_be_loaded") +
            " | code:" +
            srt?.a?.errorCode()}
        </div>
      )}

          <div className="player-top-bg" />
      <div
        className="player-controls"
        onTouchMove={hoverPlayer}
        onMouseMove={hoverPlayer}
      >
        <div className="player-top">
          <div>
            <h1 className="title">{data.videoDetails?.title}</h1>
          </div>
        </div>
        <CogMenu
          resolutions={resolutions}
          setResolution={setResolution}
          seth={seth}
          isModeAnb={isModeAnb}
          setModeAnb={setModeAnb}
          setAudioTruck={setAudioTruck}
          h={h}
          listCaptions={data?.captions}
          setCaption={setCaption}
        />
        <div className="player-bottom-bg" />
        {a && (
          <div className="skip-ads">
            <span>Skip ads</span>
            <NextVideo />
          </div>
        )}
        {data?.videoDetails && data?.videoDetails?.tw_isOffline && (
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
              <Slider video={video} tt={srt} time={refTime} />
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
                        d={`${
                          isPlay
                            ? "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
                            : "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                        }`}
                      ></path>
                    </svg>
                  </Button>
                  <Button className="player-bottom-btn  resize-icon-player next-video">
                    <NextVideo />
                  </Button>
                  <HoverCardVideo />
                  <Vol video={video} />
                  <span className="player-time-display" ref={refTime}>
                    00:00 / 00:00
                  </span>
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
                        router.push("/watch?v=" + id)?.then?.(() => {
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
const CogMenu = function ({
  seth,
  listCaptions,
  setCaption,
  setResolution,
  resolutions,
  setAudioTruck,
  h,
  isModeAnb,
  setModeAnb,
}) {
  const setPlaybackRate = function (a) {
    srt?.setPlaybackRate(a);
  };
  resolutions = resolutions.map(({ qualityLabel }, a) => {
    return {
      title: qualityLabel,
      onClick: () => (seth(0), setResolution(a)),
    };
  });
  listCaptions = listCaptions || [];
  listCaptions = listCaptions?.map(({ name }, a) => {
    return {
      title: name?.simpleText,
      onClick: () => (seth(0), setCaption(a)),
    };
  });

  const controles = [
    {
      type: "switch",
      onClick: () => setModeAnb(!isModeAnb),
      icon: null,
      title: "Mode ambiente",
      value: isModeAnb,
    },
    {
      type: "menu",
      onClick: () => seth(3),
      icon: <Settings />,
      title: "Quality",
      items: [
        {
          onClick: () => seth(1),
          title: "Back",
          icon: <ArrowLeft />,
        },
        ...resolutions,
      ],
    },
    {
      type: "menu",
      onClick: () => seth(4),
      icon: null,
      title: "Speed",
      items: [
        {
          onClick: () => seth(1),
          title: "Back",
          icon: <ArrowLeft />,
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
    {
      type: "menu",
      onClick: () => seth(5),
      icon: null,
      title: "Audio track",
      items: [
        {
          onClick: () => seth(1),
          title: "Back",
          icon: <ArrowLeft />,
        },
        {
          title: "Disable",
          onClick: () => (seth(0), setAudioTruck(-1)),
        },
        /*     ...listCaptions,*/
      ],
    },
    {
      type: "menu",
      onClick: () => seth(6),
      icon: null,
      title: "Captions",
      items: [
        {
          onClick: () => seth(1),
          title: "Back",
          icon: <ArrowLeft />,
        },
        {
          title: "Disable",
          onClick: () => (seth(0), setCaption(-1)),
        },
        ...listCaptions,
      ],
    },
  ];
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={"settings-player" + (h == 0 ? " settings-player-hidden" : "")}
      style={{
        height:
          (h == 1
            ? controles.length
            : controles[h - 2]?.items?.length > 10
            ? 10
            : controles[h - 2]?.items?.length) *
            40 +
          18 +
          "px",
      }}
    >
      <div className="settings-player-content">
        {h == 1
          ? controles.map((props) => {
              if (props.type === "menu") return <ButtonCog {...props} />;
              if (props.type === "switch") return <Switch {...props} />;
            })
          : controles[h - 2]?.items?.map((props) => (
              <ButtonCog {...props} set_={seth} />
            ))}
      </div>
    </div>
  );
};

const ButtonCog = function ({ set_, g, h, icon, title, onClick }) {
  return (
    <div onClick={() => onClick(() => set_(0))} className="btn-cog">
      <div className="btn-cog-icon">{icon} </div>
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

  var dom = document;
  var docElm = dom.documentElement;
  var body = dom.body;
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
    if (dom.exitFullscreen) {
      dom.exitFullscreen();
    } else if (dom.webkitExitFullscreen) {
      dom.webkitExitFullscreen();
    } else if (dom.mozCancelFullScreen) {
      dom.mozCancelFullScreen();
    } else if (dom.msExitFullscreen) {
      dom.msExitFullscreen();
    }
    body.removeAttribute("fullscreen");
  }
}

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={this.props.onClick} className="disabled btn-cog">
        <div className="btn-cog-icon">{this.props.icon} </div>
        <div className="btn-cog-text">
          {this.props.title}
          {false && <div className="btn-cog-subtitle">h2</div>}
        </div>
        {true && (
          <div className="btn-cog-default">
            <label class="btn-switch">
              <input onClick={this.props.onClick} type="checkbox" />
              <span class="btn-slider-round"></span>
            </label>
          </div>
        )}
      </div>
    );
  }
}
class Snerd extends React.Component {
  constructor(props) {
    const { config:{ platform, id } } = props;
    super(props);
    this.state = {
      config: [
        ["Id", id],
        ["Platform", platform],
        ["Dorps", null],
      ],
    };
  }
  componentDidMount(){
    this._Id = setInterval(()=>{
      
    },800)
  }
  componentWillUnmount(){
    clearInterval(this._Id)
  }
  
  render() {
    const { config = [] } = this.state;
    return (
      <div className="box-nerd-statistics">
        {config.map(([name, value]) => value&&(
          <pre>
            <span>{name}:</span>
            <code style={{ opacity:.7 }}>{value}</code>
          </pre>
        ))}
      </div>
    );
  }
}
