"use client";
import Image from "../../components/image";
import Title from "../../components/string";
import Button from "../../components/button_brr";
import S from "../../components/icons/span";

import CardVideo from "../../components/CardVideo";
import Fetch from "../../service/ApiRest";
import CardVideoRow from "../../components/CardVideoRow";
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
  }, [props?.searchParams?.search_query]);
  return (
    <div>
      <div>
        <div className="page-search-topbar">
          <Title
            semibold=""
            title={t("Search_for_*", [props?.searchParams?.search_query])}
          />
        </div>
        <div className="page-search-content">
          <div>
            {data?.content?.list?.map((q) => (
              <div className="page-search-content-alist">
                <Title semibold="" title={q?.title} />
                <div>
                  {q?.list?.map((q) =>
                    q && q?.type === "video" ? (
                      <CardVideoRow big data={q} />
                    ) : (
                      <A q={q} />
                    )
                  )}
                </div>
              </div>
            ))}
            <S />
          </div>
        </div>
      </div>
    </div>
  );
}
