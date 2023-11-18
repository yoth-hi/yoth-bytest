"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ({ video }) {
  const [progressPlay, setProgressPlay] = useState(0);
  const [progressHover, setProgressHover] = useState(0);
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
  useEffect(() => {
    var vid;
    const interval = setInterval(() => {
      if ((vid = video.current)) {
        if (vid.currentTime !== vid.duration * progressPlay) {
          setProgressPlay(vid.currentTime / vid.duration);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        onTouchMove={handleMove}
        onMouseMove={handleMove}
        ref={root}
        className="player-prosses-content"
      >
        <div className="player-prosses pbg"></div>
        <div
          className="player-prosses pload"
          style={{ transform: `scaleX(${0})` }}
        ></div>
        <div
          className="player-prosses pplay"
          style={{ transform: `scaleX(${progressPlay})` }}
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
