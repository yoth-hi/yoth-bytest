"use client";
import Router from "next/router";
import { useState, useEffect } from "react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import NextNProgress from "nextjs-progressbar";
export default function () {
  useEffect(() => {
    NProgress.configure({
            showSpinner: false,
            trickleSpeed: 100,
        })
  },[])
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);
  }, [Router]);
  return (<>
  <NextNProgress color="#29D" startPosition={0} stopDelayMs={200} height={3} showOnShallow={true} />
    <style jsx>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0, -4px);
        -ms-transform: rotate(3deg) translate(0, -4px);
        transform: rotate(3deg) translate(0, -4px);
      }
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: 2px solid transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;
        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .bar,
      .nprogress-custom-parent #nprogress .spinner {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
    </>
  );
}
