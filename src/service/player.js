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
  var __type;
  const play = () => a.play();
  const setType = function (a) {
    __type = a;
  };
  const setSrc = (b) => {
    video.preload = "auto";
    var c = {
      credentials: "include",
      cache: "no-store",
      mode: "no-cors",
      body: new Uint8Array([120, 0]),
      method: "POST",
      
    };
  if(!b)return a.setSrc("");
     a.setSrc(b); //)b=`/yothpi/stream?q=${encodeURIComponent(b)}&m=${encodeURIComponent( JSON.stringify(c))}`);
    //  fetch(b);
    play()
    fetch(b, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,pt-BR;q=0.6,pt;q=0.5",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"120.0.6099.26\"",
    "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.26\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-ch-ua-platform-version": "\"\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CIzqygE="
  },
  "referrer": "https://www.youtube.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "x\u0000",
  "method": "POST",
  "mode": "no-cors",
  "credentials": "omit"
}).finally(console.log)
    
    

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
