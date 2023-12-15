"use client";
/*
 only 'cio' can maintain these codes 
*/
var e;
var autoPlay = true;
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
  
  const z = new Z(new _(video));
  const a = z.d;
  const k = {
    mediaElement:z
  }
  var __type;
  const play = () => Aj(k);
  const setType = function (a) {
    __type = a;
  };
  const setSrc = (b) => {

    if (!b) return a.removeSrc();
    play();
    z.setSrc(b); //)b=`/yothpi/stream?q=${encodeURIComponent(b)}&m=${encodeURIComponent( JSON.stringify(c))}`);
    play();
    var c = {
      credentials: "include",
      cache: "no-store",
      mode:"no-cors",
      redirect:"follow",
      body: new Uint8Array([120, 0]),
      method: "POST",
    };
 //   const m = new Jt(b,c)
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
  const onCanPlayThrough = ()=>{
    if(autoPlay){
      
    }
  }
  const pause = () => a.pause();
  const setPlaybackRate = (b) => a.setPlaybackRate(b);
  return {
    setSrc,
    play,
    setPlaybackRate,
    pause,
    onCanPlayThrough,
    a,
  };
}

class Z {
  constructor(a,b,c) {
    this.q=0;
    this.endTime=this.startTime=null;
    this.d = a;
    this.l = [];
   this.stz();
  }
  F(a){ this.H(a)}
  play(){
    this.F("play");
    this.startTime = Date.now();
  }
  load(){
    this.F("load");
    this.c = true;
  }
  setSrc(a){
    this.c = false;
    this.d["setSrc"](a);
    
    
  }
  H(a){
    this.d[a]();
    this.endTime = Date.now();
  }
  playVideo(){
    var b = this.play();
    this.c || this.load();
  }
  stz(){
    const a = window.MediaSource?new A(this,new window.MediaSource):null;
    this.resource = a;
  }
}

const Aj = function(a){
  if(a.mediaElement){
    a.z=a.mediaElement.playVideo()
  }
}

function A(a,b){
  this.mediaElement=a;
  this.u=b;
  this.t=URL.createObjectURL(b);
}


class Jt {
  constructor(url,config={}) {
    this.t = config;
    var _this = this;
    this.handleResponse=function(response){
      
      if(response){
        if(_this.status=response.status,response.ok&&response.body&&204!==_this.status){
          _this.status=_this.status||242;
          _this.body=response.body. getReader();
          Gh(_this);
        }else console.info?.("[ INFO/NoStream ]", ...arguments);
      }
    }
    this.start(url);
  }
  start(req){
    var init = {credentials:"include",cache:"no-store"};
    Object.assign(init,this.t);
    req=new Request(req,init);
    fetch(req)
      .then(this.handleResponse);
  }
  ren(){
    console.info?.("[ INFO/READ ]", ...arguments);
  }
}

function Gh(a){
  a.body .read()
    .then(a.ren)
}