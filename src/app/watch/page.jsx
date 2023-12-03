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
  console.log("start", data?.microformat, "end");
  return {
    title: data?.microformat?.title?.simpleText || data?.videoDetails?.title,
    description:
      data?.microformat?.description?.simpleText ||
      data?.videoDetails?.description,
    openGraph: {
      title: data?.microformat?.title?.simpleText || data?.videoDetails?.title,
      description:
        data?.microformat?.description?.simpleText ||
        data?.videoDetails?.description,
      images: [
        data?.videoDetails?.thumbnail,
        data?.microformat?.thumbnail?.thumbnails?.map(() => a?.url),
      ],
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
        class="watch-main-col"
        itemscope=""
        itemid=""
        itemtype="http://schema.org/VideoObject"
      >
        <meta itemprop="name" content={data?.videoDetails?.title} />
        <meta
          itemprop="description"
          content={data?.videoDetails?.description}
        />
        {/*   <meta itemprop="requiresSubscription" content="False" />
         */}
        <meta itemprop="identifier" content={id} />
        {/* 
        <meta itemprop="duration" content="PT25M25S"/>
        <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
          <link itemprop="url" href="http://www.youtube.com/@CanalUtopia"/>
          <link itemprop="name" content="Utopia"/>
        </span>
       <script type="application/ld+json" nonce="W-OZpwMZrBGlfSq_CXU62w">{`{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "http:\/\/www.youtube.com\/@CanalUtopia", "name": "Utopia"}}]}`}</script>
       */}
        <link
          itemprop="thumbnailUrl"
          href={
            platform === "youtube"
              ? "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
              : data?.videoDetails?.thumbnail
          }
        />
        <span
          itemprop="thumbnail"
          itemscope=""
          itemtype="http://schema.org/ImageObject"
        >
          <link
            itemprop="url"
            href={
              platform === "youtube"
                ? "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
                : data?.videoDetails?.thumbnail
            }
          />
          <meta itemprop="width" content="1280" />
          <meta itemprop="height" content="720" />
        </span>
        {platform === "youtube" ? (
          <>
            <link
              itemprop="embedUrl"
              href={"https://www.youtube.com/embed/" + id}
            />
            <meta itemprop="playerType" content="HTML5 Flash" />
          </>
        ) : null}
        <meta itemprop="width" content="1280" />
        <meta itemprop="height" content="720" />
        {/*
        <meta
          itemprop="isFamilyFriendly"
          content={data?.microformat?.isFamilySafe ? "true" : "false"}
        />
        <meta itemprop="regionsAllowed" content="AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GB,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IM,IN,IO,IQ,IR,IS,IT,JE,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,UM,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,YE,YT,ZA,ZM,ZW"/>
        <meta itemprop="interactionCount" content="424474"/>
        <meta itemprop="datePublished" content="2021-01-14T15:15:00-08:00"/>
        <meta itemprop="uploadDate" content="2021-01-14T15:15:00-08:00"/>
        <meta itemprop="genre" content="Gaming"/>*/}
      </div>
      <Page {...newProps} data={data} key={276} />
    </>
  );
}
export const revalidate = 0;
