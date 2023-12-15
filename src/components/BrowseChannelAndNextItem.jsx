"use client";
import Image from "next/image";
import Chat from "./chat";
import Description from "./Description";
import Title from "./string";
import AvtCh from "./cardChannel";
import CardVideo from "./CardVideoRow";
import Button from "./button_brr";
import { useEffect, Suspense, useState } from "react";
import Fetch from "./../service/ApiRest";
import Share from "./icons/share";
import S from "./icons/span";
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
          <AvtCh
            data={data?.content?.cardChannel}
            endpoint={videoDetails?.actorEndpoint}
          />
          {videoDetails ? (
            <div className="page-watch-info-buttons">
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
                    ? ("Watch on Youtube")
                    : ("Watch on Twitch")
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
        <Description
          metadata={videoDetails?.metadata}
          text={videoDetails?.description}
        />
      </div>
      <div className="page-watch-items">
        {videoDetails?.isLive && (
          <div className="page-watch-chat">
            <Chat id={_context?.id} plataforma="tw" auto={null} />
          </div>
        )}
        <VideoList platform={platform} id={id} data={data} />
      </div>
    </div>
  );
};
const VideoList = function ({ platform, id, data }) {
  const [list, setList] = useState(data?.content?.listVideo);
  useEffect(() => {
    var sst = true;
    /*const interval = setInterval(function () {
      const a = document.querySelectorAll(
        ".page-watch-next .card-video-row[skeleton]"
      )[0];
      const b = document.querySelector("#app-desktop");
      if (!a) return;
      const { height, y } = a.getBoundingClientRect();
      const e = y - innerHeight;
      if (e < 100) {
        if (sst) {
          sst = false;
          Fetch({
            type: "browse",
            context: {
              type: "player_page_render_next_videos",
              platform,
              id,
            },
          }).then((a) => {
            if(!a?.content?.listVide) return;
            var m = b.scrollTop;

            setList((list) => {
              
              var y=a?.content?.listVideo||[]
              var l = [];
              l?.push(...list)
              l?.push(...data?.content?.listVideo)
              l?.push(...a?.content?.listVideo)
              setTimeout(() => {
                sst = true;
              }, 300);
              start = l?.length;

              return l
            });
            setTimeout(() => (b.scrollTop = m), 16 * 3);
          });
        }
      }
    }, 10);

    return () => clearInterval(interval);*/
  }, []);
  return (
    <div className="page-watch-next">
      {(list || data?.content?.listVideo) && (
        <Title semibold="" large="" title={t("Others")} />
      )}
      {(list || data?.content?.listVideo)?.map?.(function (a) {
        return a && <CardVideo data={a} />;
      })}
      {(list || data?.content?.listVideo) && <CardVideo skeleton data={{}} />}
      {(list || data?.content?.listVideo) && <S />}
    </div>
  );
};

//page-watch-primary => scroll
export default BrowseChannelAndNextItem;
