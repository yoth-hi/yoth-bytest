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
  var __type;
  const a = new _(video);
  const play = () => a.play();
  const setType = function (a) {
    __type = a;
  };
  const setSrc = (b) => {
    var c = {
      credentials: "include",
      cache: "no-store",
      body: new Uint8Array([120, 0]),
      method: "POST",
    };
     a.setSrc(b); //)b=`/yothpi/stream?q=${encodeURIComponent(b)}&m=${encodeURIComponent( JSON.stringify(c))}`);
    //  fetch(b);
    play()
      return;
/*
    if (!b) {
      a.setSrc("");
    }
    // Check if the browser supports the MediaSource API
    const mediaSource = new MediaSource();

    // Set up the video element to use the MediaSource
    a.setSrc(URL.createObjectURL(mediaSource));

    mediaSource.addEventListener("sourceopen", () => {
      const sourceBuffer = mediaSource.addSourceBuffer(
        'video/mp4; codecs="avc1.64000d,mp4a.40.2"'
      );

      // Fetching and streaming videoaltitags
      fetch(b, {
        credentials: "include",
        method: "POST",
        body: "x\u0000",
        mode: "no-cors",
        cache: "no-store",
      })
        .then((response) =>{
          response.body
          const reader = response.body.getReader();
          
          // Reading and appending stream chunks
          function read() {
            reader.read().then(({ done, value }) => {
              if (done) {
                console.log("Stream finished");
                return;
              }

              // Append the chunk to the source buffer
              sourceBuffer.appendBuffer(value);
              console.log(value);
              // Continue reading the next chunk
              read();
            }).catch(console.error);
          }
          read();

          // Start reading the stream
        })
        .catch((error) => console.error("Error fetching video:", error));
    });
*/
  };
  const pause = () => a.pause();
  const setPlaybackRate = (b) => a.setPlaybackRate(b);
  return {
    setSrc,
    play,
    setPlaybackRate,
    pause,
    a,
  };
}
