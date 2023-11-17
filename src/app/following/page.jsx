"use client";
import Image from "../../components/image";
import Title from "../../components/string";
import Button from "../../components/button_brr";
import CardVideo from "../../components/CardVideo";
import Fetch from "../../service/ApiRest";
import CardChannel from "../../components/cardChannelBox";
import { useState, useEffect, useLayoutEffect } from "react";
import { t } from "../../libs/transition";
export default function (props) {
  const [data, setData] = useState(null);
  const ApiGet = () =>
    Fetch({
      type: "browse",
      context: {
        type: "following",
      },
    });
  useLayoutEffect(() => {
    ApiGet().then(setData);
  }, []);
  const a = {
    actorImage:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/219332ac-75e2-473b-9a9c-6e8d51dd96fd-profile_image-50x50.png",
    actorName: "OverLordZv",

    thumbnail:
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_overlordzv-1920x1080.jpg",
    title: "chegar a unreal",
  };
  return (
    <div>
      <div>
        <div className="page-sub-content">
          <div className="page-content-title">
            <Title
              title={t("Channels_you_followed")}
              semibold=""
              large=""
            />
            <Button title={t("See_more")} />
          </div>
          <div>
            <div className="channels page-content-video-list-grid">
              {data?.content?.channels?.list?.map?.((t) => (
                <CardChannel
                  data={{
                    name: "Escola para Youtubers",
                    profileImage:
                      "https://yt3.ggpht.com/3Es6M_K4K9qpHGmZu9Jl9C1QpCcNNqznjCzms6Ip1h1KumaIVEpsFinBWoq_ovly27ke2ZaJbQ=s88-c-k-c0x00ffffff-no-rj",
                  }}
                />
              )) || (
                <>
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="page-sub-content">
          <div className="page-content-title">
            <Title title={t("Last")} semibold="" large="" />
            <Button title={t("See_more")} />
          </div>
          <div>
            <div className="page-content-video-list-grid">
              {[]?.map?.((t) => <CardVideo data={t} />) || (
                <>
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                </>
              )}
            </div>
          </div>
          {(data?.content?.videos?._types || ["", "", ""])?.map((a) => (
            <div className="page-subscriptions-list">
              <div className="page-content-title">
                <Title title={capitalizeFirstLetter(a)} semibold="" large="" />
                <Button title={t("See_more")} />
              </div>
              <div className="page-content-video-list-grid">
                {data?.content?.videos?.[a]?.map((t) => (
                  <CardVideo data={t} />
                )) || (
                  <>
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//page-watch-primary => scroll
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
