"use client";
import Button from "./Button";
import ChavronLeft from "./icons/ChavronLeft";
import { useState, useEffect } from "react";
export default function ({ Trass }) {
  const [ isOpen, setOpen ] = useState(false)
  const Clock = function(){
    setOpen(!isOpen)
  }
  useEffect(()=>{
    const body = document?.body;
    if(isOpen){
      body.setAttribute("exped","true")
    }
    else{
      body.removeAttribute("exped")
    }
  },[isOpen])
  return (
    <Button
      icon={<ChavronLeft />}
      onClick={Clock}
      aria-label={Trass?.Close}
      className="button-menu"
    />
  );
}
