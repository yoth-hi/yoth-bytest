"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Title from "./string";
type Props = {
  data: {
    aspectRatio?: number;
    endMs?: any;
    endpoint?: any;
    id?: string;
    image?: object;
    left?: any;
    metadata?: any;
    startMs?: any;
    style?: string;
    thumbnailOverlays?: [object];
    title?: string;
    top?: number;
    trackingParams?: string;
    width?: number;
  };
  ctr?: any;
};

export default function ({ data, ctr }: Props) {
  const [visible, setVisible] = useState<any>(false);
  useEffect(() => {
    const interval: any = setInterval(() => {
      setVisible(!(+data?.startMs >= ctr?.()?.a?.getCurrentTime() * 1000));
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      style={{
        left: flow(data?.left) + "%",
        top: flow(data?.top) + "%",
        width: flow(data?.width) + "%",
        aspectRatio: data?.aspectRatio,
        opacity: visible ? "1" : "0",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="item-video-end-scream"
    >
      <Link href={"/watch?v=" + data.endpoint?.watchEndpoint?.videoId}>
        <div className="endpoint-block">
          <img
            src={
              (data.image?.thumbnails?.[3] || data.image?.thumbnails?.[0])?.url
            }
          />
          <div className="item-video-end-scream-details">
            <div className="player-bottom-bg" />
          </div>
        </div>
      </Link>
    </div>
  );
}
function flow(a: any): number {
  return (a || 0) * 100;
}
