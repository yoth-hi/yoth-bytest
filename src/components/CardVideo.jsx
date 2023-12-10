"use client";
import Image from "./image";
import Link from "next/link";
import Btn from "./button_root";
import { useEffect, memo, useState } from "react";

export default memo(function ({ data, skeleton }) {
  if (!data) return;
  const { title, endpoint, plt, actorImage, actorName, viewsCount, thumbnail } =
    data;
  return (
    <Btn
      root={"div"}
      skeleton={skeleton ? "" : undefined}
      className="card-video"
    >
      <Link href={endpoint || "/"} aria-label={title || ""}>
        <div
          className={
            thumbnail ? "card-video-thumbnail" : "skeleton-image-video"
          }
        >
          <Image
            loadingSkeleton="thumbnail"
            classRoot="card-thumbnail"
            src={thumbnail}
            aria-label={title}
          />
         {(0,!skeleton)&&(<div className="card-video--time">
            <div className="card-video--time-pf">
              {plt === "tw" ? "Twitch" : "YouTube"}
            </div>
          </div>)}
        </div>
      </Link>
      <Link
        href={endpoint || "/"}
        className="endpoint-block"
        aria-label={title || ""}
      >
        <div className="card-video-details">
          <div
            className={
              actorImage ? "card-video-profile" : "skeleton-image-square"
            }
          >
            {actorImage && (
              <Image
                classRoot="card-video-profile"
                width={64}
                src={actorImage}
                aria-label={actorName}
              />
            )}
          </div>
          <div className="card-matadata">
            <h3 className="card-video-title">
              {title || <div className="skeleton-text title" />}
            </h3>
            <div className="card-video-details">
              <div className="card-video-channel-name">
                {actorName || <div className="skeleton-text" />}
              </div>
              <div className="card-video-matadata">{viewsCount}</div>
            </div>
          </div>
        </div>
      </Link>
    </Btn>
  );
});