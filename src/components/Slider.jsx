export default function () {
  return (
    <div className="player-prosses-content">
      <div className="player-prosses pbg"></div>
      <div
        className="player-prosses pload"
        style={{ transform: "scaleX(.7)" }}
      ></div>
      <div
        className="player-prosses pplay"
        style={{ transform: "scaleX(.5)" }}
      ></div>
      <div
        className="player-prosses phove"
        style={{ transform: "scaleX(.2)" }}
      ></div>
      <div className="player-prosses-dot" style={{ marginLeft: "50%" }}></div>
    </div>
  );
}
