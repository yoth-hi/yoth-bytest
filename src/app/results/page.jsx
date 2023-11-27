"use client";
import Image from "../../components/image";
import Title from "../../components/string";
import Button from "../../components/button_brr";
import S from "../../components/icons/span";


import CardVideo from "../../components/CardVideo";
import Fetch from "../../service/ApiRest";
import CardChannel from "../../components/cardChannelBox";
import A from "../../components/cardChannelRow";
import { t } from "../../libs/transition";
import { useLayoutEffect, useState } from "react";
export default function (props) {
  const [data, setData] = useState(null);
  const ApiGet = () =>
    Fetch({
      type: "browse",
      context: {
        type: "page_results",
        query: props?.searchParams?.search_query,
      },
    });
  useLayoutEffect(() => {
    ApiGet().then(setData);
  }, []);
  const a = {
    "*":"\\",
    actorImage:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/219332ac-75e2-473b-9a9c-6e8d51dd96fd-profile_image-50x50.png",
    actorName: "OverLordZv",

    thumbnail:
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_overlordzv-1920x1080.jpg",
    title: "chegar a unreal",
  };
  return (
    <div className="page-query">
      <div>
        {data?.content?.list?.map((q) => (
          <A q={q} />
        ))}
        <S />
      </div>
    </div>
  );
}


