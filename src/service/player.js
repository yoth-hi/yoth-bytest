"use client";
var e;

var _ = function (a) {
  this.t = a;
};
e = _.prototype;
e.getCurrentTime = function () {
  return this.t.currentTime;
};
e.setCurrentTime = function (a) {
  this.t.currentTime = a;
};
e.getDuration = function () {
  return this.t.duration;
};
e.load = function () {
  var a = this.t.playbackRate;
  try {
    this.t.load();
  } catch (b) {}
  this.t.playbackRate = a;
};
e.pause = function () {
  this.t.pause();
};
e.getVideo = function () {
  return this.t;
};
e.play = function () {
  var a = this.t.play();
  if (!a || !a.then) return null;
  a.then(void 0, function () {});
  return a;
};
e.getReadyState = function () {
  return this.t.readyState;
};
e.getPlaybackRate = function () {
  try {
    return 0 <= this.t.playbackRate ? this.t.playbackRate : 1;
  } catch (a) {
    return 1;
  }
};
e.setPlaybackRate = function (a) {
  this.getPlaybackRate() !== a && (this.t.playbackRate = a);
  return a;
};
e.getNetworkState = function () {
  return this.t.networkState;
};
e.setSrc = function (a) {
  var b = this.getPlaybackRate();
  this.t.src = a;
  this.setPlaybackRate(b);
};
e.getSrc = function () {
  return this.t.src;
};
e.removeSrc = function () {
  this.t.removeAttribute("src");
};
e.errorCode = function () {
  return this.t.error ? this.t.error.code : null;
};
e.errorMessage = function () {
  return this.t.error ? this.t.error.message : "";
};
e.setAttribute = function (a, b) {
  this.t.setAttribute(a, b);
};
e.removeAttribute = function (a) {
  this.t.removeAttribute(a);
};
e.getVideoPlaybackQuality = function () {
  if (
    window.HTMLVideoElement &&
    this.t instanceof window.HTMLVideoElement &&
    this.t.getVideoPlaybackQuality
  )
    return this.t.getVideoPlaybackQuality();
  if (this.t) {
    var a = this.t,
      b = a.webkitDroppedFrameCount;
    if ((a = a.webkitDecodedFrameCount))
      return { droppedVideoFrames: b || 0, totalVideoFrames: a };
  }
  return {};
};
e.hasAttribute = function (a) {
  return this.t.hasAttribute(a);
};
export default function ({ video }) {
  const a = new _(video);
  const play = ()=>a.play();
  const setSrc = (b) => {
    var c = {
      credentials: "include",
      cache: "no-store",
      body: new Uint8Array([120, 0]),
      method: "POST",
    };
    a.setSrc(b); //)b=`/yothpi/stream?q=${encodeURIComponent(b)}&m=${encodeURIComponent( JSON.stringify(c))}`);
    //  fetch(b);
    play();
  };
  const pause = ()=>a.pause();
  const setPlaybackRate = (b)=>a.setPlaybackRate(b);
  return {
    setSrc,
    play,
    setPlaybackRate,
    pause,
    a,
  };
}
