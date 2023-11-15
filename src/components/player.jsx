"use client";
import Script from "next/script";

import tr from "../service/player";

import Slider from "./Slider";
import Image from "./image";
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
export default function ({ platform, id }) {
  const player = React.useRef(null);
  const video = React.useRef(null);
  return (
    <div ref={player} className="video-player" tabIndex="-1">
      <Image src={null} width={"100%"} />
{Date.now()}      <Video
        tabIndex="-1"
        className="video-stream"
        controlsList="nodownload"
        ref={video}
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      />
      <div className="player-top">
        <div className="player-top-bg" />
        <div>
          <h1 className="title">{"title"}</h1>
        </div>
      </div>
      <div className="video-stream" id="twplayer" />
      <div className="player-bottom-bg" />
      <div className="skip-ads">
        <span>Skip ads</span>
        <NextVideo />
      </div>
      <div className="player-bottom">
        <Slider />
        <div className="player-bottom-buttons">
          <div className="player-bottom-buttons-flex">
            <Button className="player-bottom-btn play">
              <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                {!true ? (
                  <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
                ) : (
                  <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
                )}
              </svg>
            </Button>
            <Button className="player-bottom-btn  next-video">
              <NextVideo />
            </Button>
            <Vol video={{ content: {} }} />
          </div>
          <div className="player-bottom-buttons-flex">
            {!false && (
              <Button className="player-bottom-btn">
                <TheaterMode />
              </Button>
            )}
            <Button className="player-bottom-btn">
              {false ? <ExitFullscreen /> : <Fullscreen />}
            </Button>
          </div>
        </div>
      </div>
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

//component => Video.jsx
var f = false;
const Video = function (props) {
  const [source, setSource] = React.useState(null);
  const { src, ...rest } = props;

  React.useEffect(() => {
    //tr(src,setSource)
  }, [src]);
  return (
    <>
      <video {...rest} src={source} />
    </>
  );
};
