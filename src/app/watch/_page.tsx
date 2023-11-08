"use client";
import type { Metadata } from "next";
import { render } from "react-dom";

import In from "../../libs/Interpolation";

import { useRef,useEffect, useState } from "react";
import BrowseChannelAndNextItem from "./../../components/BrowseChannelAndNextItem";
var player = {};

function Page({id, RendOlayer,platform}:any) {
  
  const [p, sp] = useState(false);
  In(window,"_change-player-mode",function(){
    sp(arguments[0]["in"][1][0])
  })
  return (
    <>
      <>{!p&&RendOlayer}</>
      <div className="page-watch">
        <BrowseChannelAndNextItem
             Player={p&&RendOlayer}
             _context={{ id, platform }}
        />
      </div>
    </>
  );
}
export default Page;