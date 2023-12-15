import { getTraslate } from "../_service";
import { getStream } from "./_m3u8_tw";

import { headers } from "next/headers";

// `https://yoth-hi-github-io.vercel.app/yothpi/stream?q=${encodeURIComponent(
const getUrlStreamTwichM3u8 = function (p, channel) {
  if (!p) return;
  const { signature, value } = p;
  return (
    `http://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?player=twitchweb&&token=${encodeURIComponent(
      value
    )}&sig=${signature}&allow_audio_only=true&allow_source=true&type=any&p=${Math.floor(
      Math.random() * 10000
    )}`)
  /*
    {
      method: "GET",
    }
  )
    .then((a) => a.text())
    .then((a) => {
      return parsePlaylist(a);
    });*/
  //)}`;
};
const twitch = async function (channel, ling = "en") {
  const a = await fetch("https://gql.twitch.tv/gql", {
    method: "POST",
    headers: {
      Accept: "application/json",
    "Accept-Encoding": "gzip",
      "Accept-Language": ling,
      "Client-Id": "r8s4dac0uhzifbpu9sjdiwzctle17ff",
      "Content-Type": "application/json",
      //'Authorization': 'OAuth r8s4dac0uhzifbpu9sjdiwzctle17ff',
      "Device-Id": "qQkSyxaRxX4Jbu0abiq2QPZLDwm02vOJ",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
      Referer: "https://m.twitch.tv/" + channel,
    },
    body: JSON.stringify({
      query:
        "query Channel_Query(\n  $login: String!\n  $isBrowser: Boolean!\n  $url: String!\n  $platform: String!\n  $playerType: String!\n  $skipPlayToken: Boolean!\n) {\n  channel: user(login: $login) {\n    ...StreamPlayer_channel\n    ...StreamInfoBox_channel\n    id\n bannerImageURL\n   __typename\n    login\n    displayName\n    description\n    broadcastSettings {\n      id\n      __typename\n      title\n      game {\n        displayName\n        id\n        __typename\n      }\n    }\n    stream {\n      id\n      __typename\n      createdAt\n      height\n      previewImageURL\n      game {\n        id\n        __typename\n        name\n      }\n    }\n  }\n  channelHome: user(login: $login) @skip(if: $isBrowser) {\n    ...ChannelLayout_user\n    id\n    __typename\n    login\n    displayName\n    stream {\n      id\n      __typename\n      ...ChannelFeaturedCardStream_stream\n    }\n    subscriptionProducts {\n      ...FeaturedClipsShelfCover_subscriptionProducts\n      id\n      __typename\n    }\n    archives: videos(first: 1, type: ARCHIVE, sort: TIME) {\n      edges {\n        node {\n          ...ChannelFeaturedCardVideo_video\n          id\n          __typename\n        }\n      }\n    }\n    videoShelves(first: 1) {\n      edges {\n        node {\n          type\n          title\n          items {\n            __typename\n            ...VideoShelf_items\n            ... on Clip {\n              id\n              __typename\n            }\n            ... on Video {\n              id\n              __typename\n            }\n          }\n          id\n          __typename\n        }\n      }\n    }\n    channel {\n      home {\n        shelves {\n          categoryShelf {\n            edges {\n              node {\n                ...CategoryShelf_items\n                id\n                __typename\n              }\n            }\n          }\n          streamerShelf {\n            edges {\n              node {\n                ...StreamerShelf_items\n                id\n                __typename\n              }\n            }\n          }\n        }\n      }\n      id\n      __typename\n    }\n  }\n  ...SeoHead_query\n  ...StreamPlayer_token\n}\n\nfragment CategoryShelf_items on Game {\n  id\n  __typename\n  name\n  ...GameCard_game\n}\n\nfragment ChannelCover_user on User {\n  login\n  bannerImageURL\n  primaryColorHex\n}\n\nfragment ChannelDescription_user on User {\n  login\n  displayName\n  description\n  lastBroadcast {\n    game {\n      displayName\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n  videos(first: 30) {\n    edges {\n      node {\n        id\n        __typename\n        game {\n          id\n          __typename\n          displayName\n        }\n      }\n    }\n  }\n}\n\nfragment ChannelFeaturedCardStream_stream on Stream {\n  id\n  __typename\n  broadcaster {\n    broadcastSettings {\n      title\n      id\n      __typename\n    }\n    id\n    __typename\n    login\n  }\n  previewImageURL\n  game {\n    displayName\n    id\n    __typename\n  }\n}\n\nfragment ChannelFeaturedCardVideo_video on Video {\n  id\n  __typename\n  title\n  viewCount\n  previewThumbnailURL\n  publishedAt\n  game {\n    name\n    id\n    __typename\n  }\n}\n\nfragment ChannelLayout_user on User {\n  ...ChannelCover_user\n  ...ChannelProfileInfo_user\n  id\n  __typename\n  login\n}\n\nfragment ChannelName_user on User {\n  displayName\n  login\n  roles {\n    isPartner\n  }\n}\n\nfragment ChannelProfileInfo_user on User {\n  ...ChannelStatus_user\n  ...ChannelDescription_user\n  ...ChannelName_user\n  ...SocialMediaLinks_user\n  ...useFollowChannelFragment\n  profileImageURL(width: 150)\n  login\n  displayName\n  primaryColorHex\n  followers {\n    totalCount\n  }\n  stream {\n    id\n    __typename\n  }\n}\n\nfragment ChannelStatus_user on User {\n  lastBroadcast {\n    id\n    __typename\n    startedAt\n    game {\n      id\n      __typename\n      displayName\n    }\n  }\n  stream {\n    id\n    __typename\n    createdAt\n    game {\n      id\n      __typename\n      displayName\n    }\n    type\n    viewersCount\n  }\n}\n\nfragment FeaturedClipsShelfCover_subscriptionProducts on SubscriptionProduct {\n  id\n  __typename\n  emotes {\n    id\n    __typename\n    token\n  }\n}\n\nfragment GameCard_game on Game {\n  id\n  __typename\n  boxArtURL\n  displayName\n  name\n  slug\n  viewersCount\n}\n\nfragment SeoHead_query on Query {\n  urlMetadata(url: $url) {\n    title\n    metatags {\n      name\n      attributes {\n        key\n        value\n      }\n    }\n    jsonld\n    share {\n      title\n      text\n      url\n    }\n  }\n}\n\nfragment SocialMediaLinks_user on User {\n  channel {\n    id\n    __typename\n    socialMedias {\n      id\n      __typename\n      name\n      title\n      url\n    }\n  }\n}\n\nfragment StreamInfoBox_channel on User {\n  login\n  displayName\n  profileImageURL(width: 50)\n  stream {\n    id\n    __typename\n    game {\n      name\n      slug\n      id\n      __typename\n    }\n    ...useStreamTagListFragment_stream\n  }\n  ...useFollowChannelFragment\n}\n\nfragment StreamPlayer_channel on User {\n  id\n  __typename\n  displayName\n  login\n  offlineImageURL\n  roles {\n    isPartner\n  }\n  self {\n    subscriptionBenefit {\n      id\n      __typename\n    }\n  }\n  stream {\n    id\n    __typename\n    game {\n      id\n      __typename\n      name\n    }\n    createdAt\n    previewImageURL\n    restrictionType\n    self {\n      canWatch\n    }\n    archiveVideo {\n      id\n      __typename\n    }\n    contentClassificationLabels {\n      id\n      __typename\n      localizedName\n    }\n    contentClassificationLabelPolicyProperties {\n      signPostProperties {\n        signPost\n        contentClassificationLabels\n      }\n      contentGateProperties {\n        contentGate\n      }\n    }\n  }\n  broadcastSettings {\n    isMature\n    id\n    __typename\n  }\n  videos(sort: TIME, first: 3) {\n    edges {\n      node {\n        id\n        __typename\n        previewThumbnailURL\n        title\n        status\n      }\n    }\n  }\n}\n\nfragment StreamPlayer_token on Query {\n  user(login: $login) {\n    login\n    stream @skip(if: $skipPlayToken) {\n      playbackAccessToken(params: {platform: $platform, playerType: $playerType}) {\n        signature\n        value\n        expiresAt\n        authorization {\n          isForbidden\n          forbiddenReasonCode\n        }\n      }\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n}\n\nfragment StreamerShelf_items on User {\n  id\n  __typename\n  ...UserCard_user\n}\n\nfragment UserCard_user on User {\n  id\n  __typename\n  displayName\n  login\n  stream {\n    viewersCount\n    id\n    __typename\n  }\n  primaryColorHex\n  profileImageURL(width: 150)\n}\n\nfragment VideoShelfClip_clip on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    id\n    __typename\n  }\n  clipCreatedAt: createdAt\n  durationSeconds\n  game {\n    name\n    displayName\n    id\n    __typename\n  }\n  slug\n  thumbnailURL\n  clipTitle: title\n  clipViewCount: viewCount\n}\n\nfragment VideoShelfVideo_video on Video {\n  id\n  __typename\n  createdAt\n  lengthSeconds\n  game {\n    name\n    displayName\n    id\n    __typename\n  }\n  previewThumbnailURL\n  title\n  viewCount\n}\n\nfragment VideoShelf_items on VideoShelfItem {\n  __isVideoShelfItem: __typename\n  __typename\n  ... on Clip {\n    id\n    __typename\n    game {\n      name\n      id\n      __typename\n    }\n    ...VideoShelfClip_clip\n  }\n  ... on Video {\n    id\n    __typename\n    game {\n      name\n      id\n      __typename\n    }\n    ...VideoShelfVideo_video\n  }\n}\n\nfragment useFollowChannelFragment on User {\n  id\n  __typename\n  self {\n    follower {\n      followedAt\n    }\n  }\n}\n\nfragment useStreamTagListFragment_stream on Stream {\n  streamTags: tags {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useTagLinkFragment_tag on Tag {\n  id\n  __typename\n  tagName\n  localizedDescription\n  localizedName\n}\n",
      variables: {
        login: channel,
        isBrowser: true,
        url: "https://m.twitch.tv/" + channel,
        platform: "mobile_web",
        playerType: "pulsar",
        skipPlayToken: false,
      },
    }),
  }).catch(console.error);
  const b = await a.json();

  return b;
};
function parsePlaylist(playlist) {
  const parsedPlaylist = [];
  const lines = playlist.split("\n");
  for (let i = 4; i < lines.length; i += 3) {
    parsedPlaylist.push({
      quality: lines[i - 2].split('NAME="')[1].split('"')[0],
      resolution:
        lines[i - 1].indexOf("RESOLUTION") != -1
          ? lines[i - 1].split("RESOLUTION=")[1].split(",")[0]
          : null,
      url: `/yothpi/stream?q=${encodeURIComponent(lines[i])}`,
    });
  }
  return parsedPlaylist;
}

export async function POST(req) {
  const { context } = await req.json();
  
  const headersList = headers();
//  var forwardedIpsStr = req.header('x-forwarded-for');
  console.log (headersList.get("x-forwarded-for"))
  var data, list, streamM3u8Url;
  const ling = context?.lg || "en";
  const ts = getTraslate(ling || "en");
  if (context?.platform === "twitch") {
    const channel = context.id;
    data = await twitch(channel, ling);
    streamM3u8Url =  getUrlStreamTwichM3u8(
      data?.data?.user?.stream?.playbackAccessToken,
      channel
    );
  }
  if (context?.platform === "youtube") {
    const res = await fetch(
      "https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
      {
        headers: {
          accept: "*/*",
          "accept-language":ling,
          "content-type": "application/json",
          "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120"',
          "sec-ch-ua-arch": '"x86"',
          "sec-ch-ua-bitness": '"64"',
          "sec-ch-ua-full-version": '"120.0.6099.20"',
          "sec-ch-ua-full-version-list":
            '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.20"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": '""',
          "sec-ch-ua-platform": '"Linux"',
          "sec-ch-ua-platform-version": '""',
          "sec-ch-ua-wow64": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "same-origin",
          "sec-fetch-site": "same-origin",
          "Accept-Encoding": "gzip",
          "x-client-data": "CIzqygE=",
          "x-goog-visitor-id": "Cgs3Qmxmak1KT250RSjp0f-qBjIICgJCUhICGgA%3D",
          "x-youtube-bootstrap-logged-in": "false",
          "x-youtube-client-name": "1",
          "x-youtube-client-version": "2.20231121.08.00",
        },
        referrer: "https://yoth-hi.vercel.app/watch?v=" + context?.id + "",
        referrerPolicy: "strict-origin-when-cross-origin",
        body:
          '{"context":{"client":{"hl":"'+ling+'","gl":"US","remoteHost":"143.137.158.18","deviceMake":"","deviceModel":"","visitorData":"Cgs3Qmxmak1KT250RSjp0f-qBjIICgJCUhICGgA%3D","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20231121.08.00","osName":"X11","osVersion":"","originalUrl":"https://yoth-hi.vercel.app/watch?v=' +
          context?.id +
          '","screenPixelDensity":1,"platform":"DESKTOP","clientFormFactor":"UNKNOWN_FORM_FACTOR","configInfo":{"appInstallData":"COnR_6oGEJrwrwUQ1YiwBRCrh7AFEIjjrwUQooGwBRCu1P4SEK2HsAUQq4KwBRDrlrAFENDirwUQr4ewBRC--a8FENShrwUQlpWwBRDks_4SEInorgUQ2cmvBRDh2K8FEKf3rwUQvbauBRDh8q8FEO6irwUQ1JKwBRDnuq8FEPq-rwUQ4tSuBRDqw68FEIiHsAUQ1-mvBRC8-a8FEPX7_hIQvoqwBRDp6P4SEKKSsAUQnYuwBRCp968FELfq_hIQ5v3-EhDM364FEMeDsAUQpoGwBRDj2K8FELfvrwUQzK7-EhDrk64FELGHsAUQ26-vBRDb2K8FEPyFsAUQ3IKwBRCogbAFEKXC_hIQv_evBRDd6P4SEOvo_hIQrLevBRD3jrAFEPX5rwUQ39ivBRCU-v4SELiLrgUQ0-GvBRDJ968FEJmRsAUQ1v-vBRCIj7AF"},"screenDensityFloat":1.4434934854507446,"userInterfaceTheme":"USER_INTERFACE_THEME_DARK","timeZone":"America/Sao_Paulo","browserName":"Chrome","browserVersion":"120.0.0.0","acceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","deviceExperimentId":"ChxOek13TkRneE16SXdPRGMzTlRBNE1UWTRPUT09EOnR_6oGGOnR_6oG","screenWidthPoints":1782,"screenHeightPoints":1726,"utcOffsetMinutes":-180,"memoryTotalKbytes":"4000000","clientScreen":"WATCH","mainAppWebInfo":{"graftUrl":"/watch?v=' +
          context?.id +
          '","pwaInstallabilityStatus":"PWA_INSTALLABILITY_STATUS_UNKNOWN","webDisplayMode":"WEB_DISPLAY_MODE_BROWSER","isWebNativeShareAvailable":true}},"user":{"lockedSafetyMode":false},"request":{"useSsl":true,"internalExperimentFlags":[],"consistencyTokenJars":[]},"clickTracking":{"clickTrackingParams":"CLYBENwwIhMInczUvavbggMVj7uVAh3w8ArjMgpnLWhpZ2gtcmVjWg9GRXdoYXRfdG9fd2F0Y2iaAQYQjh4YngE="},"adSignalsInfo":{"params":[{"key":"dt","value":"1700784363567"},{"key":"flash","value":"0"},{"key":"frm","value":"0"},{"key":"u_tz","value":"-180"},{"key":"u_his","value":"2"},{"key":"u_h","value":"918"},{"key":"u_w","value":"412"},{"key":"u_ah","value":"918"},{"key":"u_aw","value":"412"},{"key":"u_cd","value":"24"},{"key":"bc","value":"31"},{"key":"bih","value":"1726"},{"key":"biw","value":"1782"},{"key":"brdim","value":"0,0,0,0,412,0,412,399,1782,1726"},{"key":"vis","value":"1"},{"key":"wgl","value":"true"},{"key":"ca_type","value":"image"}]}},"videoId":"' +
          context?.id +
          '","playbackContext":{"contentPlaybackContext":{"currentUrl":"/watch?v=' +
          context?.id +
          '","vis":0,"splay":false,"autoCaptionsDefaultOn":false,"autonavState":"STATE_NONE","html5Preference":"HTML5_PREF_WANTS","signatureTimestamp":0,"referer":"https://yoth-hi.vercel.app/","lactMilliseconds":"-1","watchAmbientModeContext":{"hasShownAmbientMode":true,"watchAmbientModeEnabled":true}}},"racyCheckOk":false,"contentCheckOk":false}',
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );
    data = await res.json();
    //list=data?.streamingData?.adaptiveFormats;
    list = data?.streamingData?.formats || [
      {
        url: data?.streamingData?.hlsManifestUrl,
      },
      ...data?.streamingData?.adaptiveFormats,
    ];
  }
  const us = data?.data?.channel;
  const t = data?.videoDetails;
  return Response.json(
    {
      data,
      labels: {
        STREAM_IS_OFFLINE: ts.Stream_is_offiline,
      },
      microformat:data?.microformat?.playerMicroformatRenderer || {
        title:{
          simpleText:(us?.broadcastSettings || t)?.title,
          ownerChannelName: us?.login,
          ownerProfileUrl:"/c/tw@"+us?.login,
          uploadDate: us?.stream?.createdAt||"",
          publishDate: us?.stream?.createdAt||"",
          category: us?.stream?.game?.name||"",
        }
      },
      stream: {
        streamM3u8Url,
        ...list,
      },
      screenEnd: {
        list:(data?.endscreen?.endscreenRenderer?.elements?.map(({endscreenElementRenderer })=>endscreenElementRenderer))
      },
      
      nextVideosOnEnd: [   ],
      captions:data?.captions?.playerCaptionsTracklistRenderer?.captionTracks,
      videoDetails: {
        title: (us?.broadcastSettings || t)?.title,
        description: us?.description,
        actorName: us?.login || t?.acthor,
        actorId: us?.login,
        actorImage: us?.profileImageURL,
        thumbnail:
          us?.stream?.previewImageURL
            .replace("{width}", 1280)
            .replace("{height}", 720) ||
          us?.offlineImageURL ||
          us?.bannerImageURL,
        id: us?.id || t?.videoId,
        isLive: !!us?.stream || !!t?.isLive,
        tw_isOffline: !us?.stream && context?.platform === "twitch",
      },
    },
    {
      headers: {
        "Accept-Encoding": "gzip",
      },
    }
  );
}
export const revalidate = 100;
