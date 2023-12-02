"use client";
import Sound from "./icons/sound";
import { useState } from "react";
var lest = 100;
export default function ({ video }) {
  const [vol, setVol] = useState((video?.current?.volume||1)*100);
  return (
    <div className="player-bottom-volume-content">
      <button onClick={()=>{
        const r = vol===0?lest:0;
        if(vol===0){lest=vol}
        if (video.current) video.current.volume = r / 100;
        setVol(r)
      }} className="resize-icon-player player-bottom-btn">
        <Sound />
      </button>
      <div className="player-bottom-volume">
        <div
          className="player-bottom-volume-line"
          style={{
            width: `${vol}%`,
          }}
        />
        <input
          value={vol}
          type="range"
          min={0}
          onChange={({ target: { value } }) => {
            setVol(value > 100 ? 100 : value);
            if (video.current) video.current.volume = value / 100;
          }}
          className="player-bottom-volume-input"
          max={100}
        />
      </div>
    </div>
  );
}
