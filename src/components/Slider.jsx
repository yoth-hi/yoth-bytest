"use client";
import React, { useState, useEffect, useRef } from "react";
function formatTime(milliseconds) {
  
  if(Infinity==(milliseconds)){
    return"--:--";
  }
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  } else if (minutes > 0) {
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  } else {
    return `0:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}

export default function ({ video,tt, time }) {
  const [progressPlay, setProgressPlay] = useState(0);
  const [progressHover, setProgressHover] = useState(-1);
  const root = useRef(null);
  const handleMove = (event) => {
    // Extracting x and y coordinates
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    const Rect = root.current.getBoundingClientRect();
    // Your logic using x and y
    const value = (x - Rect.x) / Rect.width;
    setProgressHover(value);
  };
  const handleLeave = (event) => {
    setProgressHover(-1);
  };
  const handleUp = (event) => {
    const t = progressHover;
    var vid = video.current;
    setProgressPlay(t);
    if (vid && vid.currentTime) {
      vid.currentTime = t * vid.duration;
    }
    setProgressHover(-1);
  };
  useEffect(() => {
    var vid,timm;
    const interval = setInterval(() => {
      if ((vid = video.current)) {
      if(timm=time.current){
        timm.innerText=`${formatTime(vid.currentTime*1000)} / ${formatTime(vid.duration*1000)}`
      }
        if (vid.currentTime !== vid.duration * progressPlay) {
          setProgressPlay(vid.currentTime / vid.duration);
        }
      }
    }, 500/1.2);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        onTouchMove={handleMove}
        onMouseMove={handleMove}
        onTouchLeave={handleLeave}
        onMouseLeave={handleLeave}
        onTouchEnd={handleUp}
        onMouseUp={handleUp}
        ref={root}
        className="player-prosses-content"
      >
        <div className="player-prosses pbg"></div>
        <div
          className="player-prosses pload"
          style={{ transform: `scaleX(${(video.current?._loadTime||0)/100})` }}
        ></div>
        <div
          className="player-prosses pplay"
          style={{ transform: `scaleX(${progressPlay<0?0:(progressPlay>1?1:progressPlay)})` }}
        ></div>
        <div
          className="player-prosses phove"
          style={{
            transform: `scaleX(${
              progressHover < 0 ? 0 : progressHover > 1 ? 1 : progressHover
            })`,
          }}
        ></div>
         <div
          className="player-prosses-dot"
          style={{ marginLeft: `${progressPlay * 100}%` }}
        ></div>
      </div>
    </>
  );
}
