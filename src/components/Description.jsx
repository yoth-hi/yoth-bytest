"use client";
import { useState, useRef } from"react";
export default function ({ text }) {
  const [ exped, setExped ] = useState(false);
  const ref = useRef(null)
  if(!text) return;
  text=text
    .replace(/\<|\>/g,"")
    .replace(/\n/g," <br/>")
  text=parceLink("",text)
  return (
    <div onClick={({ target })=>{
      if(target. nodeName === "DIV"){
         setExped(!exped);
      } 
    }} ref={ref} className={"description-text"+(exped?" exped-description":"")}>
      <div
        className="string-text"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
}


// # utils.js
function parceLink(a="",b=""){
  return b.replace(/https?\:\/\/([\w\.]+)(\/?[\S\?\=]+)?/g,function(a,b,c,d,e){
    return`<a target="_blank" class="description-link" aria-label="${b}" href="${a}">${a}</a>`
  })
}