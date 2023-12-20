"use client";
import Title from "./string";
export default function () {
  const W = (() => {
    var h;
    try {
      h = window?.yoth || {};
    } catch (e) {}
    return h;
  })();

  return (
    <div className="miniplayer hidden">
      <div>
        <div className="miniplayer-player-container"></div>
        <div>
          <div className="miniplayer-metadata">
            <Title
              className="miniplayer-title"
              title={W?.Ur?.videoDetails?.title || "[[title]]"}
            />
            <div>{W?.Ur?.videoDetails?.author || "[[author]]"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
