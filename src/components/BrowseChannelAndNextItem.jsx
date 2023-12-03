"use client";
import Image from "next/image";
import Chat from "./chat";
import Description from "./Description";
import Title from "./string";
import AvtCh from "./cardChannel";
import CardVideo from "./CardVideoRow";
import Button from "./button_brr";
import {useEffect, useState } from "react";
import Fetch from "./../service/ApiRest";
import Share from "./icons/share";
import { t } from "../libs/transition";
var j = {};
const BrowseChannelAndNextItem = function ({ Player, _context }) {
  const { platform, id } = _context;
  const [data, setData] = useState({});
  useEffect(() => {
    Fetch({
      type: "browse",
      context: {
        type: "player_page",
        platform,
        id,
      },
    }).then(setData);
  }, [_context.id]);
  const { videoDetails, content } = data;
  return (
    <div className="page-watch-info">
      <div className="page-watch-info-conteiner">
        <div id="player-video">{Player}</div>
        <div className="page-watch-info-title">
          <h3 className="title-string">
            {videoDetails?.title || <div className="skeleton-text title" />}
          </h3>
        </div>
        <div className="page-watch-info-outers">
          <AvtCh data={data?.content?.cardChannel} />
          {videoDetails ? (
            <div className="page-watch-info-buttons">
              <Button
                title="Follow"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                  </svg>
                }
              />
              <div className="page-watch-info-buttons-like">
                <Button
                  title="Like"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                    </svg>
                  }
                />
                <Button
                  title="Deslike"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z" />
                    </svg>
                  }
                />
              </div>
              <Button title="Share" icon={<Share />} />
              <Button
                title={
                  platform === "youtube"
                    ? content?.asesibility?.Go_to_Youtube
                    : content?.asesibility?.Go_to_Twitch
                }
                type="link"
                href={
                  (platform === "youtube"
                    ? "https://youtube.com/watch?v="
                    : "https://twitch.tv/") + id
                }
                target="_blank"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                }
              />
            </div>
          ) : (
            <div className="skeleton_page-watch-info-buttons">
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
            </div>
          )}
        </div>
        <Description text={videoDetails?.description} />
      </div>
      <div className="page-watch-items">
        {videoDetails?.isLive && (
          <div className="page-watch-chat">
            <Chat id={_context?.id} plataforma="tw" auto={null} />
          </div>
        )}
        <div className="page-watch-next">
          {data?.content?.listVideo && (
            <Title semibold="" large="" title={t("Others")} />
          )}
          {data?.content?.listVideo?.map((a) => (
            <CardVideo data={a} />
          ))}
        </div>
      </div>
    </div>
  );
};
//page-watch-primary => scroll
export default BrowseChannelAndNextItem;
