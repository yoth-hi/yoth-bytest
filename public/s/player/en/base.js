

var aaa,bb,vf,$ie,cv,Hs,Vy, Hd,cf,cn,dj,
U,Yr,gd,Vy,sj
;
var A ={},I={};
var e;
var Ra=window;
var vf=function(a){return dj(document,a)};
cv=function(){var a=cf("yoth.player.utils.videoElement");a||(a=vf("VIDEO"),cn("yoth.player.utils.videoElement",a));return a}
yf=function(){var a=cf("yoth.player.utils.audioElement");a||(a=vf("AUDIO"),cn("yoth.player.utils.audioElement",a));return a}
cf=function(a,b){a=a.split(".");b=b||Ra;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
cn=function(a,b,c){a=a.split(".");c=c||Ra;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
dj=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
var icons = {
  "play/pouse":function(){
    var e = {N:"SVG",X:{height:"100%" ,version:"1.1", viewBox:"0 0 36 36", width:"100%"}}
    return e;
  }
}




U=function(a){
  Jt.call(this,a)
  this.dj=true;
}
Jt=function(a){
this.createElement=function(a){
  var b = a.N==="svg"?document.createElementNS("http://www.w3.org/2000/svg",a.N):document.createElement(a.N);
  var c = a.S;if(c)b.classList.add(...c.split(" "));
  var d = a.C;
    var e = this;
  if(d){
    d.forEach((child) => { console.log(e.createElement(child))
      if (typeof child === 'string') {
        b.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        b.appendChild(child);
      }else  b.appendChild((new e.createElement(child))?.element);
    });
  }
  this.element=b;
  this.querySelector=function(){return b. querySelector(...arguments)};
  this.update = function(a,b,d){
    var c = a==="this"?e.element:e.querySelector(a);
    if(c){
      
      var f = c[b] 
      var g = typeof d ==="string"?[...d.split?.(",")]:[d];
      if(typeof f==="function"){
        
        c[b]?.(...g);
        
      }
      else c[b]=g
    }
  }
  var f = a. X;
  if(f){
    Object.entries(f).forEach(([a,b])=>{
  this.update("this","setAttribute",`${a},${b}`)
      
    })
  }
}
  this.listener=[];
  this.createElement(a);
  var b = this;
  this.addEventListener=function(c,d,e){
    var f ={name:c,call:d,used:0}
    b.listener.push(f)
    b .element.addEventListener(c,function(){
      d.call(this,arguments)
      f.used++;
    },e)
  };
}

//a.i.update("img","src:/he")


Hs=function(a){
  this.t = a;
}
e=Hs.prototype;
e.getCurrentTime=function(){return this.t.currentTime};
e.setCurrentTime=function(a){this.t.currentTime=a};
e.getSrc=function(){return this.t.src};
e.isPaused=function(){return this.t.paused};
e.pause=function(){this.t.pause()};
e.play=function(){
  var a=this.t.play();
  if(!a||!a.then)return null;
  a.then(void 0,function(){});
  return a
}
e.getVolume=function(){return this.t.volume};
e.setVolume=function(a){this.t.volume=a};
e.setAttribute=function(a,b){this.t.setAttribute(a,b)};
e.removeAttribute=function(a){this.t.removeAttribute(a)};
e.hasAttribute=function(a){return this.t.hasAttribute(a)};



$ie=function(a){
  U.call(this,{N:"div",S:"video-player",X:{tabIndex:"-1","aria-label":"this is a player"}})
  var b = this;
  this.IP=function(){b.element.focus()};
}
Hd=function(a){
  this.root=new $ie(a);
  this.l=new Hs(cv());
  this.y =new Hs(yf("audio"));
  this.l.setAttribute("tabIndex","-1")
  this.l.setAttribute("class","video-stream")
  this.l.setAttribute("controlsList","nodownload")
  Yr.call(this,a)
  gd.call(this,a)
  wf.call(this,a)
}
Yr=function(a){
  U.call(this.tf={},{N:"div",C:[this.l.t]})
}
gd=function(a){
  this.root.update("this","appendChild",this .tf.element)
}
Vy=function(a){
  this.l.setAttribute("src",URL.createObjectURL(a))
}
A.dj=function(a,b){
  a .appendChild(aaa[b*10])
}

Jh=function(a){
  var a = window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09.00"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99.00"')
  return a&&window.MediaSource||null;
}

wf=function(){
  U.call(this.next={},{N:"button", S:"player-bottom-btn"});
  U.call(this.previous={},{N:"button", S:"player-bottom-btn"});
  U.call(this.play_p={},{N:"button", S:"player-bottom-btn play"});
  sj.call(this,{})
}
sj=function(){
  var s=this. events=this.events||{};
  this.previous.addEventListener("click",(a)=>s.previous?.(a))
  this.next.addEventListener("click",(a)=>s.next?.(a))
  this.play_p.addEventListener("click",(a)=>s.play_p?.(a))
}


console.log(a=new Hd)
document.querySelector("body,c-console"). appendChild(a.root.element)
console.log(a.root.element. outerHTML)