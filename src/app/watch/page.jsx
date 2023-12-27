import Page from "./_page";
import Player from "../../components/player";
import Fetch from "../../service/ApiRest";
import { redirect } from "next/navigation";
import Head from "next/head";

import Script from "next/script";
const F = async function (a) {
  return await Fetch(a);
};
var _data = {};
export async function generateMetadata(props) {
  const {
    searchParams: { tw, v },
  } = props;
  const platform = tw ? "twitch" : v ? "youtube" : null;
  const id = tw || v;
  const data = await F({
    type: "player",
    context: {
      platform,
      id,
    },
  });
  const bs = "/watch?"+((tw?"tw":(v?"v":null))?.concat("=",id))+ ""
  return {
    title: data?.microformat?.title?.simpleText || data?.videoDetails?.title,
    description:
      data?.microformat?.description?.simpleText ||
      data?.videoDetails?.description,
    openGraph: {
      title: data?.microformat?.title?.simpleText || data?.videoDetails?.title,
      description:
        data?.microformat?.description?.simpleText ||
        rd(data?.videoDetails?.description),
      images: [
        platform === "youtube"
          ? "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
          : data?.videoDetails?.thumbnail,
      ],
    },category:data?.microformat?.category,
    metadataBase: new URL("https://yoth-hi.vercel.app"),
    alternates: {
      canonical: bs+ "/",
      languages: {
        pt:bs+ "&ling=pt",
        "pt-br": bs+"&ling=pt-br",
        en: bs+"&ling=en",
      },
    },
  };
}
export default async function Root(props) {
  const {
    searchParams: { tw, v },
  } = props;
  const platform = tw ? "twitch" : v ? "youtube" : null;
  const id = tw || v;
  if (!id) {
    return redirect("/");
  }
  const data = await F({
    type: "player",
    context: {
      platform,
      id,
    },
  });
  const newProps = {
    ...props,
    id,
    platform,
  };
  return (
    <>
      <div
        id="watch7-content"
        className="watch-main-col"
        itemscope=""
        itemid=""
        itemtype="http://schema.org/VideoObject"
        dangerouslySetInnerHTML={{
          __html: `<meta itemprop="name" content="${u(
            data?.videoDetails?.title
          )}" />
        <meta
          itemprop="description"
          content="${u(data?.microformat?.description?.simpleText || rd(data?.videoDetails?.descriptio))}"
        />
        ${"" /*   <meta itemprop="requiresSubscription" content="False" />*/}
        <meta itemprop="identifier" content="${id}" />
        ${
          "" /* 
        <meta itemprop="duration" content="PT25M25S"/>
       */
        }
        <span
          itemprop="author"
          itemscope=""
          itemtype="http://schema.org/Person"
        >
          <link itemprop="url" href="${data?.microformat?.ownerProfileUrl}" />
          <link itemprop="name" content="${u(
            data?.microformat?.ownerChannelName
          )}" />
        </span>
        <script
          type="application/ld+json"
          nonce="${btoa(encodeURIComponent(`${id+data?.microformat?.ownerChannelName}`))}"
        >{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "${
          data?.microformat?.ownerProfileUrl
        }", "name": "${data?.microformat?.ownerChannelName}"}}]}</script>
        <link
          itemprop="thumbnailUrl"
          href="${
            platform === "youtube"
              ? "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
              : data?.videoDetails?.thumbnail
          }"
        />
        <span
          itemprop="thumbnail"
          itemscope=""
          itemtype="http://schema.org/ImageObject"
        >
          <link
            itemprop="url"
            href="${
              platform === "youtube"
                ? "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
                : data?.videoDetails?.thumbnail
            }"
          />
          <meta itemprop="width" content="1280" />
          <meta itemprop="height" content="720" />
        </span>
        ${
          platform === "youtube"
            ? `
            <link
              itemprop="embedUrl"
              href="${"https://www.youtube.com/embed/" + id}"
            />
            <meta itemprop="playerType" content="HTML5 Flash" />
        `
            : ""
        }
        <meta itemprop="width" content="1280" />
        <meta itemprop="height" content="720" />
        <meta
          itemprop="isFamilyFriendly"
          content="${
            data?.microformat?.isFamilySafe ?? true ? "true" : "false"
          }"
        />
        ${
          "" /*
        <meta itemprop="interactionCount" content="424474"/>
        */
        }
        ${
          data?.microformat?.availableCountries &&
          `
          <meta
            itemprop="regionsAllowed"
            content="${data?.microformat?.availableCountries?.join(",")}"
          />
        `
        }
        <meta itemprop="genre" content="${data?.microformat?.category}" />
        <meta itemprop="uploadDate" content="${
          data?.microformat?.uploadDate
        }" />
        <meta
          itemprop="datePublished"
          content="${data?.microformat?.publishDate}"
        />`
            .replace(/\n/g, " ")
            .replace(/ {2,}/g, " "),
        }}
      />
      <link rel="preconnect" href="https://googlevideo.com" />
      <script
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'page_view', {page_title: document.title,page_location: location.href})`,
        }}
      />
      <Page {...newProps} data={data} key={276} />
    </>
  );
}
function rd(a = "") {
  return a.substring(0, 50) + (a.length > 50 ? "..." : "");
}
export const revalidate = 300;
function u(a) {
  return a || "";
}
