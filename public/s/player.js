var _ = {};
var e;
var aaa = {};
var aab = 0;
var aac = window;
var aa = function(a,b){return b?aaa[a]=b:aaa[a]}
var ab = function(a){return aa(aab++,a)}
var ac =function(a,b){a=a.split(".");b=b||aac;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
var ad =function(a,b,c){a=a.split(".");c=c||aac;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
var $e = function (a, b) {
  b = String(b);
  "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
  return a.createElement(b);
};
var bl = function(a,b,c){
  a=a||document;
  c=c||0;
  return a.querySelectorAll(b)[0];
}
var ha = function (a) {
  return $e(document, a);
};
var hs = function (a, b, c, d) {
  switch (b) {
    case "class":
      c.forEach((c) => a.classList.add(c));
      break;
    case "append":
      c.forEach((e) => {
        var f;
        if ("string" === typeof e) {
          f = document.createTextNode(e);
        } else if (e.A) {
          f = d(e);
        } else {
          f = e.element;
        }
        a.appendChild(f);
      });
      break;
    case "attr":
      Object.entries(c).forEach(([ key, value ]) => {
        a.setAttribute(key,value)
      });
      break;
    default:
      break;
  }
};
var ht = function (a, b) {
  var e = this;
  this.element = hf(a);
  this.listeners = [];
  this.ss = function(d){
    hs(d,"append",[e]);
  }
  this.as = function(a,b,c){
    gf(a,e.element.addEventListener,function(a){
      b.call(this,a);
    },c);
    e.listeners.push({ name:a, callback: b })
  }
  return;
};
var hf = function (a, b) {
  b = b || a.A === "svg";
  var e;
  if (b) {
    e = document.createElementNS("http://www.w3.org/2000/svg", a.A);
  } else {
    e = ha(a.A);
  }
  if (a.B) {
    hs(e, "class", a.B);
  }
  if (a.C) {
    hs(e, "append", a.C, hf);
  }
  if (a.D) {
    hs(e, "attr", a.D);
  }
  return e;
};
var gf = function (a, b,c,d) {
  var e = ab(c);
  console.log(c)
  b(a,e,c)
};

var jd = function(){
  this.anlp = [
    "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z",
    "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
  ]
  ht.call(this,{A:"button",B:["ytp-play-button","ytp-button"],C:[_.Hf(this.anlp[0])],D:{title:"{{title}}","aria-keyshortcuts":"k","data-title-no-tooltip":"{{data-title-no-tooltip}}"}});
  var d = this;
  var b = bl(this.element,"svg path");
  this.$set = function(a){
    hs(b,"attr",{d:d.anlp[a]});
  }
  
}
var jq = function () {
  ht.call(this,{A:"div",B:["player-bottom-buttons-flex"]});
  this.next = new ht({
    A: "button",
    B: ["player-bottom-btn", "next-video"],
    C: [_.gm()],
    D: {"aria-label":"Mostrar mais v\u00eddeos sugeridos"}
  });
  this.play = new jd();
  this.play.ss(this.element)
  this.next.ss(this.element)
  this.play.as("click", console.log, !1)
};
var jk=function(){
  ht.call(this,{A:"div",B:["player-bottom-buttons-flex"]});
  this
}
var jl=function(a){
  ht.call(this,{A:"div",B:["player-bottom-buttons"]});
  this.bottomsRight=new jq(a)
  this.bottomsLeft=new jk(a)
  this.bottomsRight.ss(this.element)
  this.bottomsLeft.ss(this.element)
  
}
var jf=function(a ){
  ht.call(this,{A:"div",B:["player-bottom"]});
  this._controls=new jl(a);
  this._controls.ss(this.element)
  
}
var hr = function ( a) {
  ht.call(this,{A:"div",B:["video-player"]});
  
  this.controls=new jf(a);
  this.controls.ss(this.element)
  this.media = new Hd(true);
  this.media.video.ss(this.element)
};
/*
g.eX=function(a,b){g.U.call(this,{I:"button",Ma:["ytp-play-button","ytp-button"],W:{title:"{{title}}","aria-keyshortcuts":"k","data-title-no-tooltip":"{{data-title-no-tooltip}}"},xa:"{{icon}}"});this.J=a;this.j=null;this.transition=new nV;this.tooltip=b.Fc();g.L(this,this.transition);a.xb(this.element,this,36842);a.Wa(this.element,!0);this.T(a,"fullscreentoggled",this.onVideoDataChange);this.T(a,"presentingplayerstatechange",this.onStateChange);this.T(a,"videodatachange",this.onVideoDataChange);this.Hc(a.Tb());
this.Sa("click",this.Nr,this);g.wb(this,g.DU(b.Fc(),this.element))};
*/

var Gr=function(a,b){this.resource=a;this.media=void 0===b?!1:b;this.B=!1};
var Gs=function(a){
  a=window.MediaSource?new window.MediaSource:null;
  return a
}
var Gt=function(a,b){
  this.ms = Gs();
}

var Gz = function(){var a=ac("yt.player.utils.audioElement_");a||(a=ha("AUDIO"),ad("yt.player.utils.audioElement_",a));return a};
var Ha = function(){var a=ac("yt.player.utils.videoElement_");a||(a=ha("VIDEO"),ad("yt.player.utils.videoElement_",a));return a};
var Hb=function(a){var b=Ha();return!!(b&&b.canPlayType&&b.canPlayType(a))};

var Hc = function(a){
  Gt(this,"",a);
  this.media = a;
}
e=Hc.prototype;
e.play=function(){var a=this.media.play();if(!a||!a.then)return null;a.then(void 0,function(){});return a};
e.pause=function(){this.media.pause()};
e.setCurrentTime=function(a){this.media.currentTime=a};
e.getCurrentTime=function(){return this.media .currentTime};
e.getDuration=function(){return this.media .duration};
e.getLoop=function(){return this.media.loop};
e.setLoop=function(a){this.media.loop=a};
e.canPlayType=function(a,b){return this. media.canPlayType(a,b)};
e.isPaused=function(){return this.media.paused};
e.setSrc=function(a){var b=this.getPlaybackRate();this.media.src=a;this.setPlaybackRate(b)};
e.ss = function(a){var b = this;a.appendChild(b.media)}

var Hd = function(a){
  this.video = new Hc(Ha());
  if(a){
    this.audio = new Hc(Gz());
    this.a = true
  }
}



_.gm = function () {
  return new ht({
    A: "svg",
    D: {
      enableBackground: "new 0 0 24 24",
      height: "24",
      viewBox: "382 240 20 20",
      width: "24",
    },
    C: [
      {
        A: "g",
        C: [
          {
            A: "path",
            D: {
              d: "M394.386936,251.146839 L383.991655,257.797386 C383.381469,258.187762 382.57817,257.997046 382.197435,257.37141 C382.068405,257.159385 382,256.914486 382,256.664572 L382,243.335248 C382,242.597811 382.583047,242 383.302273,242 C383.546858,242 383.7865,242.070623 383.993757,242.203782 L394.389038,248.882558 C394.998498,249.274125 395.182974,250.098127 394.801078,250.723018 C394.696173,250.894673 394.554551,251.039605 394.386936,251.146839 Z M399.5,241 C400.328427,241 401,241.671573 401,242.5 L401,257.5 C401,258.328427 400.328427,259 399.5,259 C398.671573,259 398,258.328427 398,257.5 L398,242.5 C398,241.671573 398.671573,241 399.5,241 Z",
            },
          },
        ],
      },
    ],
  });
};
_.Hf = function (a) {
  return new ht({
    A: "svg",
    D: {
      height: "100%",
      viewBox: "0 0 36 36",
      width: "100%",
    },
    C: [
      {
        A: "g",
        C: [
          {
            A: "path",
            D: {
              d: a   
            },
          },
        ],
      },
    ],
  });
};
var h;
console.log((h=new hr()));
//by test
document.querySelector("c-console, body").appendChild((h).element)
document.querySelector("c-console, body").appendChild((()=>{
  var a = document.createElement("style");
  a.textContent=(
    `*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

::before,
::after {
  --tw-content: '';
}


.layout-content:not([full])
  .page-watch-container
  .page-watch-primary-player-conteiner {
  aspect-ratio: 1.7777777777777/1;
}
.page-watch-primary-player-conteiner > * * {
  position: relative;
  z-index: 130;
}
.page-watch-primary-player-conteiner {
  min-width: min(200px, calc(100vw - var(--sidebar-width)));
  overflow: hidden;
  border-radius: 16px;

  position: relative;
  max-width: calc(100vw - var(--sidebar-width));
}
[full] .page-watch-primary-player-conteiner {
  border-radius: 0px;
}
.video-player {
  font-size: 15px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  line-height: 1.2;
  z-index: 10;
}
.video-stream {
  position: absolute;
  inset: 0px;
  display: block;
  height: 100%;
  width: 100%;
}
.player-bottom {
  height: 48px;

  position: absolute;
  z-index: 2000;
  bottom: 0px;
  left: 15px;
  right: 15px;
  max-width: 100%;
}
.player-prosses.pplay {
  --tw-bg-opacity: 1;
  background-color: rgb(116 29 255 / var(--tw-bg-opacity));
}
.player-prosses.pload {
  background-color: rgb(255 255 255 / 0.4);
}
.player-prosses.phove {
  background-color: rgb(255 255 255 / 0.4);
}
.player-prosses.pbg {
  background-color: rgb(255 255 255 / 0.3);
}
.player-prosses {
  height: 4px;
  z-index: 200;
  width: 100%;
  cursor: pointer;
  position: absolute;
  inset: 0px;
  transform-origin: top left;
}
.player-prosses-content {
  height: 8px;
  width: 100%;
  position: relative;
  padding-top: 3px;
}
.player-prosses-dot {
  width: 16px;
  height: 16px;
  background: #741dff;
  border-radius: 50%;
  z-index: 230;
  transform: translate(-50%, -9px);
}
.player-bottom-buttons {
  height: 40px;
}
.player-bottom-buttons-flex {
  display: flex;
  align-items: center;
}
.player-bottom-volume {
  width: 100px;
  position: relative;
  height: 4px;
}
.player-bottom-volume-line {
  height: 4px;
  position: absolute;
  width: 30px;
  background: #fff;
}
.player-bottom-volume-content {
  display: flex;
  align-items: center;
}
.player-bottom-volume-input {
  position: absolute;
  inset: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  background: transparent;
  cursor: pointer;
  background: #fff2 !important;
}
.player-bottom-volume-input::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff !important;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.player-bottom-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.player-bottom-btn {
  width: 40px;
  height: 40px;
}
.player-bottom-btn * {
  transition: 0.3s;
}
.player-top {
  height: 48px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.player-top .title {
  font-size: 20px;
  margin-left: 14px;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
[full] #cinematic {
  display: none;
}
.cinematic-canvas {
  transition: 0.5s;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
#cinematic {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scale(2.5, 1.5);
}
.player-bottom-bg {
  height: 150px;
  z-index: 150;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADCCAYAAACIaaiTAAAAAXNSR0IArs4c6QAAARFJREFUOE9lyNdHBQAAhfHb3nvvuu2997jNe29TJJEkkkgSSSSJJJJEEkkiifRH5jsP56Xz8PM5gcC/xfCIWBNHiXiTQIlEk0SJZJNCpZo0SqSbDEpkmixKZJscSuSaPErkmwJKFJoiShSbEkqUmjJKlJsKqtJUUaLa1FAiaGopUWfqKdFgGinRZJop0WJaKdFm2inRYTop0WW6qR7TS4k+00+JATNIiSEzTIkRM0qJMTNOiQkTosSkmaLEtJmhxCzMmTAlIiZKiXmzQIlFs0SJZViBVViDddiATdiCbdiBXdiDfTiAQziCYziBUziDc7iAS7iCa7iBW7iDe3iAR3iCZ3iBV3iDd/iAT/iCb/iB3z+hYCsRlTEd8QAAAABJRU5ErkJggg==);
}
.player-top-bg {
  height: 150px;
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: rotate(180deg);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADCCAYAAACIaaiTAAAAAXNSR0IArs4c6QAAARFJREFUOE9lyNdHBQAAhfHb3nvvuu2997jNe29TJJEkkkgSSSSJJJJEEkkiifRH5jsP56Xz8PM5gcC/xfCIWBNHiXiTQIlEk0SJZJNCpZo0SqSbDEpkmixKZJscSuSaPErkmwJKFJoiShSbEkqUmjJKlJsKqtJUUaLa1FAiaGopUWfqKdFgGinRZJop0WJaKdFm2inRYTop0WW6qR7TS4k+00+JATNIiSEzTIkRM0qJMTNOiQkTosSkmaLEtJmhxCzMmTAlIiZKiXmzQIlFs0SJZViBVViDddiATdiCbdiBXdiDfTiAQziCYziBUziDc7iAS7iCa7iBW7iDe3iAR3iCZ3iBV3iDd/iAT/iCb/iB3z+hYCsRlTEd8QAAAABJRU5ErkJggg==);
}
.player-bottom-btn:not(.play) {
  padding: 0 10px;
}
.page-watch-secondary {
  min-width: 2 00px;
  min-height: 500px;
}
.page-watch-items {
  padding-left: 24px;
}
html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}
`)
  return a
})())

