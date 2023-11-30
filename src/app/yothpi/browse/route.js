import { NextResponse } from "next/server";
import { getTraslate, req_btn } from "../_service";
export async function POST(req) {
  const startTime = Date.now();
  const data = { content: {} };
  try {
    var json;
    try {
      json = await req.json();
    } catch (error) {
      json = {};
    }
    if (!json || !json.context) {
      return new NextResponse(`the '${JSON.stringify(json)}' not is valid`, {
        status: 403,
      });
    }
    const {
      context: { lg = "en", platform, start=0, query, id, type },
    } = json || { context: {} };
    const auto = "test";
    const { context } = json;

    const _ = getTraslate(json?.context?.ling || "en");
    if (type === "player_page") {
      if (platform === "twitch") {
        const channel = id;
        const _data = await fetch("https://gql.twitch.tv/gql", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-Language": lg,
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
              "query Channel_Query(\n  $login: String!\n  $isBrowser: Boolean!\n  $url: String!\n  $platform: String!\n  $playerType: String!\n  $skipPlayToken: Boolean!\n) {\n  channel: user(login: $login) {\n    ...StreamPlayer_channel\n    ...StreamInfoBox_channel\n   id\n  __typename\n  followers {\n totalCount }\n login\n    displayName\n    description\n    broadcastSettings {\n      id\n      __typename\n      title\n      game {\n        displayName\n        id\n        __typename\n      }\n    }\n    stream {\n      id\n      __typename\n      createdAt\n      height\n      previewImageURL\n      game {\n        id\n        __typename\n        name\n      }\n    }\n  }\n  channelHome: user(login: $login) @skip(if: $isBrowser) {\n    ...ChannelLayout_user\n    id\n    __typename\n    login\n    displayName\n    stream {\n      id\n      __typename\n      ...ChannelFeaturedCardStream_stream\n    }\n    subscriptionProducts {\n      ...FeaturedClipsShelfCover_subscriptionProducts\n      id\n      __typename\n    }\n    archives: videos(first: 1, type: ARCHIVE, sort: TIME) {\n      edges {\n        node {\n          ...ChannelFeaturedCardVideo_video\n          id\n          __typename\n        }\n      }\n    }\n    videoShelves(first: 1) {\n      edges {\n        node {\n          type\n          title\n          items {\n            __typename\n            ...VideoShelf_items\n            ... on Clip {\n              id\n              __typename\n            }\n            ... on Video {\n              id\n              __typename\n            }\n          }\n          id\n          __typename\n        }\n      }\n    }\n    channel {\n      home {\n        shelves {\n          categoryShelf {\n            edges {\n              node {\n                ...CategoryShelf_items\n                id\n                __typename\n              }\n            }\n          }\n          streamerShelf {\n            edges {\n              node {\n                ...StreamerShelf_items\n                id\n                __typename\n              }\n            }\n          }\n        }\n      }\n      id\n      __typename\n    }\n  }\n  ...SeoHead_query\n  ...StreamPlayer_token\n}\n\nfragment CategoryShelf_items on Game {\n  id\n  __typename\n  name\n  ...GameCard_game\n}\n\nfragment ChannelCover_user on User {\n  login\n  bannerImageURL\n  primaryColorHex\n}\n\nfragment ChannelDescription_user on User {\n  login\n  displayName\n  description\n  lastBroadcast {\n    game {\n      displayName\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n  videos(first: 30) {\n    edges {\n      node {\n        id\n        __typename\n        game {\n          id\n          __typename\n          displayName\n        }\n      }\n    }\n  }\n}\n\nfragment ChannelFeaturedCardStream_stream on Stream {\n  id\n  __typename\n  broadcaster {\n    broadcastSettings {\n      title\n      id\n      __typename\n    }\n    id\n    __typename\n    login\n  }\n  previewImageURL\n  game {\n    displayName\n    id\n    __typename\n  }\n}\n\nfragment ChannelFeaturedCardVideo_video on Video {\n  id\n  __typename\n  title\n  viewCount\n  previewThumbnailURL\n  publishedAt\n  game {\n    name\n    id\n    __typename\n  }\n}\n\nfragment ChannelLayout_user on User {\n  ...ChannelCover_user\n  ...ChannelProfileInfo_user\n  id\n  __typename\n  login\n}\n\nfragment ChannelName_user on User {\n  displayName\n  login\n  roles {\n    isPartner\n  }\n}\n\nfragment ChannelProfileInfo_user on User {\n  ...ChannelStatus_user\n  ...ChannelDescription_user\n  ...ChannelName_user\n  ...SocialMediaLinks_user\n  ...useFollowChannelFragment\n  profileImageURL(width: 150)\n  login\n  displayName\n  primaryColorHex\n  followers {\n    totalCount\n  }\n  stream {\n    id\n    __typename\n  }\n}\n\nfragment ChannelStatus_user on User {\n  lastBroadcast {\n    id\n    __typename\n    startedAt\n    game {\n      id\n      __typename\n      displayName\n    }\n  }\n  stream {\n    id\n    __typename\n    createdAt\n    game {\n      id\n      __typename\n      displayName\n    }\n    type\n    viewersCount\n  }\n}\n\nfragment FeaturedClipsShelfCover_subscriptionProducts on SubscriptionProduct {\n  id\n  __typename\n  emotes {\n    id\n    __typename\n    token\n  }\n}\n\nfragment GameCard_game on Game {\n  id\n  __typename\n  boxArtURL\n  displayName\n  name\n  slug\n  viewersCount\n}\n\nfragment SeoHead_query on Query {\n  urlMetadata(url: $url) {\n    title\n    metatags {\n      name\n      attributes {\n        key\n        value\n      }\n    }\n    jsonld\n    share {\n      title\n      text\n      url\n    }\n  }\n}\n\nfragment SocialMediaLinks_user on User {\n  channel {\n    id\n    __typename\n    socialMedias {\n      id\n      __typename\n      name\n      title\n      url\n    }\n  }\n}\n\nfragment StreamInfoBox_channel on User {\n  login\n  displayName\n  profileImageURL(width: 50)\n  stream {\n    id\n    __typename\n    game {\n      name\n      slug\n      id\n      __typename\n    }\n    ...useStreamTagListFragment_stream\n  }\n  ...useFollowChannelFragment\n}\n\nfragment StreamPlayer_channel on User {\n  id\n  __typename\n  displayName\n  login\n  offlineImageURL\n  roles {\n    isPartner\n  }\n  self {\n    subscriptionBenefit {\n      id\n      __typename\n    }\n  }\n  stream {\n    id\n    __typename\n    game {\n      id\n      __typename\n      name\n    }\n    createdAt\n    previewImageURL\n    restrictionType\n    self {\n      canWatch\n    }\n    archiveVideo {\n      id\n      __typename\n    }\n    contentClassificationLabels {\n      id\n      __typename\n      localizedName\n    }\n    contentClassificationLabelPolicyProperties {\n      signPostProperties {\n        signPost\n        contentClassificationLabels\n      }\n      contentGateProperties {\n        contentGate\n      }\n    }\n  }\n  broadcastSettings {\n    isMature\n    id\n    __typename\n  }\n  videos(sort: TIME, first: 10) {\n    edges {\n      node {\n     ...ChannelFeaturedCardVideo_video\n id\n      __typename\n        previewThumbnailURL\n        title\n        status\n      }\n    }\n  }\n}\n\nfragment StreamPlayer_token on Query {\n  user(login: $login) {\n    login\n    stream @skip(if: $skipPlayToken) {\n      playbackAccessToken(params: {platform: $platform, playerType: $playerType}) {\n        signature\n        value\n        expiresAt\n        authorization {\n          isForbidden\n          forbiddenReasonCode\n        }\n      }\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n}\n\nfragment StreamerShelf_items on User {\n  id\n  __typename\n  ...UserCard_user\n}\n\nfragment UserCard_user on User {\n  id\n  __typename\n  displayName\n  login\n  stream {\n    viewersCount\n    id\n    __typename\n  }\n  primaryColorHex\n  profileImageURL(width: 150)\n}\n\nfragment VideoShelfClip_clip on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    id\n    __typename\n  }\n  clipCreatedAt: createdAt\n  durationSeconds\n  game {\n    name\n    displayName\n    id\n    __typename\n  }\n  slug\n  thumbnailURL\n  clipTitle: title\n  clipViewCount: viewCount\n}\n\nfragment VideoShelfVideo_video on Video {\n  id\n  __typename\n  createdAt\n  lengthSeconds\n  game {\n    name\n    displayName\n    id\n    __typename\n  }\n  previewThumbnailURL\n  title\n  viewCount\n}\n\nfragment VideoShelf_items on VideoShelfItem {\n  __isVideoShelfItem: __typename\n  __typename\n  ... on Clip {\n    id\n    __typename\n    game {\n      name\n      id\n      __typename\n    }\n    ...VideoShelfClip_clip\n  }\n  ... on Video {\n    id\n    __typename\n    game {\n      name\n      id\n      __typename\n    }\n    ...VideoShelfVideo_video\n  }\n}\n\nfragment useFollowChannelFragment on User {\n  id\n  __typename\n  self {\n    follower {\n      followedAt\n    }\n  }\n}\n\nfragment useStreamTagListFragment_stream on Stream {\n  streamTags: tags {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useTagLinkFragment_tag on Tag {\n  id\n  __typename\n  tagName\n  localizedDescription\n  localizedName\n}\n",
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
        const __1data = await _data.json();
        if (json?.context?.cursor === 0) {
          data.header = {
            start: {},
            center: {},
            end: {},
          };
        }
        data._1data = __1data;
        const us = __1data?.data?.channel;

        if (platform === "twitch") {
          data.videoDetails = {
            title: us?.broadcastSettings?.title,
            description: us?.description,
            actorName: us?.displayName,
            actorId: us?.login,
            actorImage: us?.profileImageURL,
            thumbnail:
              size(us?.stream?.previewImageURL, 400, (400 / 16) * 9) ||
              us?.offlineImageURL,
            id: us?.id,
            isLive: !!us?.stream,
            tw_isOffline: !(us?.stream && context?.platform === "twitch"),
          };

          data.content.listVideo = us?.videos?.edges?.map(({ node }) => ({
            title: node.title,
            actorName: us?.displayName,
            viewsCount: node?.viewCount || 0,
            thumbnail: size(node.previewThumbnailURL, 400, (400 / 16) * 9),
            endpoint: `/watch?vod_tw=${node.id}`,
          }));
          data.content.asesibility = {
            Share: _["Share"],
            Go_to_Twitch: _["Go_to_Twitch"],
          };
          data.content.cardChannel = {
            name: us?.displayName,
            endpoint: "/" + us?.login,
            profileImage: us?.profileImageURL,
            onSubscrive: {
              id: btoa(`SUBSCRIBE_${context?.platform}_${us?.login}_${auto}`),
              api: 2987,
            },
            subscribers: {
              label: `${String(us?.followers?.totalCount || 0).replace(
                /(\d{3})/g,
                " $1"
              )}`,
              number: us?.followers?.totalCount || 0,
            },
          };
        }
      }
      if (platform === "youtube") {
        const resp = await fetch(
          "https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
          {
            headers: {
              accept: "*/*",
              "accept-language":
                "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,pt-BR;q=0.6,pt;q=0.5",
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
              "x-client-data": "CIzqygE=",
              "x-goog-visitor-id": "Cgs3Qmxmak1KT250RSizjf2qBjIICgJCUhICGgA%3D",
              "x-youtube-bootstrap-logged-in": "false",
              "x-youtube-client-name": "1",
              "x-youtube-client-version": "2.20231121.08.00",
            },
            referrer: "https://www.youtube.com/watch?v=" + id + "",
            referrerPolicy: "strict-origin-when-cross-origin",
            body:
              '{"context":{"client":{"hl":'+lg+',"gl":"BR","remoteHost":"177.124.75.110","deviceMake":"","deviceModel":"","visitorData":"Cgs3Qmxmak1KT250RSizjf2qBjIICgJCUhICGgA%3D","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20231121.08.00","osName":"X11","osVersion":"","originalUrl":"https://www.youtube.com/watch?v=' +
              id +
              '","screenPixelDensity":1,"platform":"DESKTOP","clientFormFactor":"UNKNOWN_FORM_FACTOR","configInfo":{"appInstallData":"CLON_aoGEInorgUQ2cmvBRCvh7AFEJrwrwUQt-r-EhD1-_4SENSSsAUQ3ej-EhD8hbAFEIiHsAUQ0OKvBRDf2K8FEOPYrwUQ6-j-EhC--a8FEMyu_hIQqfevBRCI468FEKuHsAUQnYuwBRDnuq8FENvYrwUQ4divBRDHg7AFEL6KsAUQ9fmvBRDi1K4FENfprwUQ1KGvBRCn968FEOrDrwUQzN-uBRC9tq4FEKy3rwUQuIuuBRDT4a8FEK2HsAUQ6ej-EhDcgrAFELGHsAUQpcL-EhDuoq8FEKuCsAUQ1YiwBRDks_4SEOHyrwUQ-r6vBRC8-a8FEKKBsAUQopKwBRC_968FEOuTrgUQqIGwBRCWlbAFEJT6_hIQpoGwBRD3jrAFEOb9_hIQ65awBRCZkbAFEK7U_hIQyfevBRDbr68FELfvrwUQ1v-vBRCIj7AF"},"screenDensityFloat":1.4434934854507446,"userInterfaceTheme":"USER_INTERFACE_THEME_DARK","timeZone":"America/Sao_Paulo","browserName":"Chrome","browserVersion":"120.0.0.0","acceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","deviceExperimentId":"ChxOek13TkRZek5EZzFOVE15TkRrd05ERTBNZz09ELON_aoGGLON_aoG","screenWidthPoints":1782,"screenHeightPoints":1726,"utcOffsetMinutes":-180,"memoryTotalKbytes":"4000000","clientScreen":"WATCH","mainAppWebInfo":{"graftUrl":"/watch?v=' +
              id +
              '","pwaInstallabilityStatus":"PWA_INSTALLABILITY_STATUS_UNKNOWN","webDisplayMode":"WEB_DISPLAY_MODE_BROWSER","isWebNativeShareAvailable":true}},"user":{"lockedSafetyMode":false},"request":{"useSsl":true,"internalExperimentFlags":[],"consistencyTokenJars":[]},"clickTracking":{"clickTrackingParams":"CNICENwwIhMInOjb5JDaggMVaFVIAB33zgZyMgpnLWhpZ2gtcmVjWg9GRXdoYXRfdG9fd2F0Y2iaAQYQjh4YngE="},"adSignalsInfo":{"params":[{"key":"dt","value":"1700742839642"},{"key":"flash","value":"0"},{"key":"frm","value":"0"},{"key":"u_tz","value":"-180"},{"key":"u_his","value":"2"},{"key":"u_h","value":"918"},{"key":"u_w","value":"412"},{"key":"u_ah","value":"918"},{"key":"u_aw","value":"412"},{"key":"u_cd","value":"24"},{"key":"bc","value":"31"},{"key":"bih","value":"1726"},{"key":"biw","value":"1782"},{"key":"brdim","value":"0,0,0,0,412,0,412,399,1782,1726"},{"key":"vis","value":"1"},{"key":"wgl","value":"true"},{"key":"ca_type","value":"image"}]}},"videoId":"' +
              id +
              '","racyCheckOk":false,"contentCheckOk":false,"autonavState":"STATE_NONE","playbackContext":{"vis":0,"lactMilliseconds":"-1"},"captionsRequested":false}',
            method: "POST",
            mode: "cors",
            credentials: "include",
          }
        );
        const r_data = await resp.json();
        const _id = id;
        data.videoDetails = {
          title:
            r_data?.playerOverlays?.playerOverlayRenderer?.videoDetails?.playerOverlayVideoDetailsRenderer?.title?.simpleText,
          description:
            r_data?.contents?.twoColumnWatchNextResults?.results?.results
              ?.contents?.[1]?.videoSecondaryInfoRenderer?.attributedDescription?.content,
          actorName:
            r_data?.playerOverlays?.playerOverlayRenderer?.videoDetails?.playerOverlayVideoDetailsRenderer?.subtitle?.runs[0]?.text, //"" ,
          actorId: "",
          actorImage: "",
          thumbnail: `https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_SMS_RU_xg_3zyu7PGqD3VkSY8Q`,
          id: _id,
          isLive: false,
        };
        data.content.cardChannel = {
          name: r_data?.playerOverlays?.playerOverlayRenderer?.videoDetails?.playerOverlayVideoDetailsRenderer?.subtitle?.runs[0]?.text,
          endpoint: "/yt@" + "null",
          profileImage: "",
          onSubscrive: {
            id: btoa(`SUBSCRIBE_${context?.platform}_${"%null%"}_${auto}`),
            api: 2987,
          },
          subscribers: {
            label: `${String("0" || 0).replace(/(\d{3})/g, " $1")}`,
            number: "0" || 0,
          },
        };
        data.content.listVideo = r_data?.contents?.twoColumnWatchNextResults?.secondaryResults?.secondaryResults?.results?.map(({ compactVideoRenderer }) => (compactVideoRenderer&&({
            title: compactVideoRenderer?.title?.simpleText,
            actorName: "",//us?.displayName,
            viewsCount: Number((compactVideoRenderer?.viewCountText?.simpleText||"").match(/\d/g)?.join("")),
            //node?.viewCount || 0,
            publishedTimeText:compactVideoRenderer?.publishedTimeText?.simpleText ,
            thumbnail:  `https://i.ytimg.com/vi/${compactVideoRenderer?.videoId}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_SMS_RU_xg_3zyu7PGqD3VkSY8Q`,//size(node.previewThumbnailURL, 400, (400 / 16) * 9),
            endpoint: `/watch?v=${compactVideoRenderer?.videoId}`,
          })));
      }
    } else if (type === "home_gaming") {
      const _data = await fetch("https://gql.twitch.tv/gql", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": lg,
          "Client-Id": "r8s4dac0uhzifbpu9sjdiwzctle17ff",
          "Content-Type": "application/json",
          //'Authorization': 'OAuth r8s4dac0uhzifbpu9sjdiwzctle17ff',
          "Device-Id": "qQkSyxaRxX4Jbu0abiq2QPZLDwm02vOJ",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
          Referer: "https://m.twitch.tv/",
        },
        body: JSON.stringify({
          query:
            "query Homepage_Query(\n  $requestID: String!\n  $platform: String!\n  $itemsPerRow: Int!\n  $url: String!\n  $first: Int!\n  $after: Cursor\n) {\n  ...RecommendationShelves_shelves\n  ...SeoHead_query\n}\n\nfragment ClipCardCommon_clip on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    displayName\n    profileImageURL(width: 64)\n    id\n    __typename\n  }\n  createdAt\n  durationSeconds\n  game {\n    categorySlug: slug\n    displayName\n    name\n    id\n    __typename\n  }\n  slug\n  thumbnailURL(width: 480, height: 272)\n  title\n  viewCount\n}\n\nfragment RecommendationShelves_shelves on Query {\n  shelves(requestID: $requestID, platform: $platform, itemsPerRow: $itemsPerRow, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        __typename\n        ...Shelf_shelf\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SeoHead_query on Query {\n  urlMetadata(url: $url) {\n    title\n    metatags {\n      name\n      attributes {\n        key\n        value\n      }\n    }\n    jsonld\n    share {\n      title\n      text\n      url\n    }\n  }\n}\n\nfragment ShelfGameCard_game on Game {\n  id\n  __typename\n  name\n  ...useGameCardCommonFragment_game\n}\n\nfragment ShelfStreamCard_stream on Stream {\n  id\n  __typename\n  ...useStreamCardCommonFragment_stream\n  broadcaster {\n    login\n    id\n    __typename\n  }\n}\n\nfragment ShelfTitle_title on ShelfTitle {\n  key\n  fallbackLocalizedTitle\n  localizedTitleTokens {\n    node {\n      __typename\n      ...TokenContent_node\n      ... on BrowsableCollection {\n        id\n        __typename\n      }\n      ... on Game {\n        id\n        __typename\n      }\n      ... on Tag {\n        id\n        __typename\n      }\n      ... on User {\n        id\n        __typename\n      }\n    }\n  }\n}\n\nfragment Shelf_shelf on Shelf {\n  __typename\n  id\n  __typename\n  title {\n    ...ShelfTitle_title\n  }\n  content {\n    __typename\n    edges {\n      __typename\n      trackingID\n      node {\n        __typename\n        ... on Game {\n          id\n          __typename\n          ...ShelfGameCard_game\n        }\n        ... on Stream {\n          id\n          __typename\n          broadcaster {\n            id\n            __typename\n            login\n          }\n          ...ShelfStreamCard_stream\n        }\n        ... on Clip {\n          id\n          __typename\n          ...useShelfClipCardFragment\n        }\n        ... on Tag {\n          id\n          __typename\n        }\n        ... on Video {\n          id\n          __typename\n        }\n      }\n    }\n  }\n  trackingInfo {\n    __typename\n    rowName\n  }\n}\n\nfragment StreamCardDropDownMenu_broadcaster on User {\n  id\n  __typename\n  login\n  displayName\n}\n\nfragment TokenContent_node on TitleTokenNode {\n  __isTitleTokenNode: __typename\n  __typename\n  ... on Game {\n    id\n    __typename\n    name\n    displayName\n    categorySlug: slug\n  }\n  ... on TextToken {\n    text\n    hasEmphasis\n    location\n  }\n  ... on BrowsableCollection {\n    id\n    __typename\n    collectionSlug: slug\n    collectionName: name {\n      fallbackLocalizedTitle\n    }\n  }\n}\n\nfragment useGameCardCommonFragment_game on Game {\n  boxArtURL\n  displayName\n  name\n  categorySlug: slug\n  viewersCount\n  ...useGameTagListFragment_game\n}\n\nfragment useGameTagListFragment_game on Game {\n  gameTags: tags(limit: 10, tagType: CONTENT) {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useShelfClipCardFragment on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    id\n    __typename\n  }\n  slug\n  ...ClipCardCommon_clip\n}\n\nfragment useStreamCardCommonFragment_stream on Stream {\n  id\n  __typename\n  viewersCount\n  previewImageURL\n  type\n  game {\n    id\n    __typename\n    name\n    slug\n  }\n  broadcaster {\n    id\n    __typename\n    broadcastSettings {\n      title\n      id\n      __typename\n    }\n    login\n    displayName\n    profileImageURL(width: 50)\n    ...StreamCardDropDownMenu_broadcaster\n  }\n  ...useStreamTagListFragment_stream\n}\n\nfragment useStreamTagListFragment_stream on Stream {\n  streamTags: tags {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useTagLinkFragment_tag on Tag {\n  id\n  __typename\n  tagName\n  localizedDescription\n  localizedName\n}\n",
          variables: {
            requestID: "LmLqsk9ZGlITX4Qz",
            platform: "mobile_web",
            itemsPerRow: 5,
            url: "https://m.twitch.tv/",
            first: 1,
            after: start,
          },
        }),
      }).catch(console.error);
      const __1data = await _data.json();
      data.content.listVideo =
        __1data?.data?.shelves?.edges[0].node?.content.edges?.map(
          (n) => (
            (n = n.node),
            n && {
              title: n?.broadcaster?.broadcastSettings?.title,
              viewsCount: n?.viewsCount,
              endpoint: "/watch?tw=" + n?.broadcaster?.login,
              thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${
                n?.broadcaster?.login
              }-400x${(400 / 16) * 9}.jpg`,

              actorImage: `${n?.broadcaster?.profileImageURL}`,
              actorName: `${n?.broadcaster?.displayName}`,
              n,
            }
          )
        );
    } else if (type === "home_page") {
      const _T = await fetch(
        "https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-Language": lg,
            "Content-Type": "application/json",
            "Device-Id": "",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
          },
          body: JSON.stringify({
            context: {
              client: {
                hl: lg,
                gl: "BR",
                remoteHost: "143.137.158.18",
                deviceMake: "",
                deviceModel: "",
                visitorData: "Cgtpak8wRWZNZzlLayiThKCqBjIICgJCUhICGgA%3D",
                userAgent:
                  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36,gzip(gfe)",
                clientName: "WEB",
                clientVersion: "2.20231101.05.00",
                osName: "X11",
                osVersion: "",
                originalUrl: "https://www.youtube.com/",
                screenPixelDensity: 1,
                platform: "DESKTOP",
                clientFormFactor: "UNKNOWN_FORM_FACTOR",
                configInfo: {
                  appInstallData:
                    "CJOEoKoGEKiBsAUQvPmvBRDr6P4SEIjjrwUQpcL-EhDUiLAFEIPfrwUQ26-vBRDMrv4SEJrwrwUQvYqwBRD1-a8FEOLUrgUQ49ivBRDV5a8FEKf3rwUQv_evBRCU2f4SEKy3rwUQrdT-EhC36v4SEKHXrwUQvbauBRC8668FEKaBsAUQ1-mvBRDQ4q8FEL2LsAUQsIewBRD3ibAFELWmrwUQ0I2wBRC0ya8FEOrDrwUQ57qvBRDd6P4SENuNsAUQiIewBRD6vq8FEKn3rwUQ7qKvBRDT4a8FENnJrwUQq4KwBRC--a8FEOno_hIQk_r-EhDks_4SEOuTrgUQieiuBRCi-P4SENShrwUQuIuuBRDcgrAFEPyFsAUQt--vBRCU_K8FEMzfrgUQyfevBRDb2K8FEN_YrwUQ0Pv-EhCm9a8F",
                },
                screenDensityFloat: 1.4434934854507446,
                userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
                timeZone: "America/Sao_Paulo",
                browserName: "Chrome",
                browserVersion: "118.0.0.0",
                acceptHeader:
                  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                deviceExperimentId:
                  "ChxOekk1T0RBNE5UUTNOemcwTkRneE1USXlNZz09EJOEoKoGGJOEoKoG",
                screenWidthPoints: 749,
                screenHeightPoints: 931,
                utcOffsetMinutes: -180,
                memoryTotalKbytes: "4000000",
                mainAppWebInfo: {
                  graftUrl: "/",
                  pwaInstallabilityStatus:
                    "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED",
                  webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
                  isWebNativeShareAvailable: true,
                },
              },
              user: { lockedSafetyMode: false },
              request: {
                useSsl: true,
                internalExperimentFlags: [],
                consistencyTokenJars: [],
              },
              clickTracking: {
                clickTrackingParams: "CBYQsV4iEwjb99ji4K2CAxUxupUCHdbGD8A=",
              },
              adSignalsInfo: {
                params: [
                  { key: "dt", value: "1699217942098" },
                  { key: "flash", value: "0" },
                  { key: "frm", value: "0" },
                  { key: "u_tz", value: "-180" },
                  { key: "u_his", value: "44" },
                  { key: "u_h", value: "918" },
                  { key: "u_w", value: "412" },
                  { key: "u_ah", value: "918" },
                  { key: "u_aw", value: "412" },
                  { key: "u_cd", value: "24" },
                  { key: "bc", value: "31" },
                  { key: "bih", value: "931" },
                  { key: "biw", value: "749" },
                  { key: "brdim", value: "0,0,0,0,412,0,412,512,749,931" },
                  { key: "vis", value: "1" },
                  { key: "wgl", value: "true" },
                  { key: "ca_type", value: "image" },
                ],
              },
            },
            browseId: "FEwhat_to_watch",
            inlineSettingStatus: "INLINE_SETTING_STATUS_ON",
          }),
        }
      ).catch(console.error);
      const a = await _T?.json();

      const _data = await fetch("https://gql.twitch.tv/gql", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": lg, //lg,
          "Client-Id": "r8s4dac0uhzifbpu9sjdiwzctle17ff",
          "Content-Type": "application/json",
          //'Authorization': 'OAuth r8s4dac0uhzifbpu9sjdiwzctle17ff',
          "Device-Id": "qQkSyxaRxX4Jbu0abiq2QPZLDwm02vOJ",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
          Referer: "https://m.twitch.tv/",
        },
        body: JSON.stringify({
          query:
            "query Homepage_Query(\n  $requestID: String!\n  $platform: String!\n  $itemsPerRow: Int!\n  $url: String!\n  $first: Int!\n  $after: Cursor\n) {\n  ...RecommendationShelves_shelves\n  ...SeoHead_query\n}\n\nfragment ClipCardCommon_clip on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    displayName\n    profileImageURL(width: 50)\n    id\n    __typename\n  }\n  createdAt\n  durationSeconds\n  game {\n    categorySlug: slug\n    displayName\n    name\n    id\n    __typename\n  }\n  slug\n  thumbnailURL(width: 480, height: 272)\n  title\n  viewCount\n}\n\nfragment RecommendationShelves_shelves on Query {\n  shelves(requestID: $requestID, platform: $platform, itemsPerRow: $itemsPerRow, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        __typename\n        ...Shelf_shelf\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SeoHead_query on Query {\n  urlMetadata(url: $url) {\n    title\n    metatags {\n      name\n      attributes {\n        key\n        value\n      }\n    }\n    jsonld\n    share {\n      title\n      text\n      url\n    }\n  }\n}\n\nfragment ShelfGameCard_game on Game {\n  id\n  __typename\n  name\n  ...useGameCardCommonFragment_game\n}\n\nfragment ShelfStreamCard_stream on Stream {\n  id\n  __typename\n  ...useStreamCardCommonFragment_stream\n  broadcaster {\n    login\n    id\n    __typename\n  }\n}\n\nfragment ShelfTitle_title on ShelfTitle {\n  key\n  fallbackLocalizedTitle\n  localizedTitleTokens {\n    node {\n      __typename\n      ...TokenContent_node\n      ... on BrowsableCollection {\n        id\n        __typename\n      }\n      ... on Game {\n        id\n        __typename\n      }\n      ... on Tag {\n        id\n        __typename\n      }\n      ... on User {\n        id\n        __typename\n      }\n    }\n  }\n}\n\nfragment Shelf_shelf on Shelf {\n  __typename\n  id\n  __typename\n  title {\n    ...ShelfTitle_title\n  }\n  content {\n    __typename\n    edges {\n      __typename\n      trackingID\n      node {\n        __typename\n        ... on Game {\n          id\n          __typename\n          ...ShelfGameCard_game\n        }\n        ... on Stream {\n          id\n          __typename\n          broadcaster {\n            id\n            __typename\n            login\n          }\n          ...ShelfStreamCard_stream\n        }\n        ... on Clip {\n          id\n          __typename\n          ...useShelfClipCardFragment\n        }\n        ... on Tag {\n          id\n          __typename\n        }\n        ... on Video {\n          id\n          __typename\n        }\n      }\n    }\n  }\n  trackingInfo {\n    __typename\n    rowName\n  }\n}\n\nfragment StreamCardDropDownMenu_broadcaster on User {\n  id\n  __typename\n  login\n  displayName\n}\n\nfragment TokenContent_node on TitleTokenNode {\n  __isTitleTokenNode: __typename\n  __typename\n  ... on Game {\n    id\n    __typename\n    name\n    displayName\n    categorySlug: slug\n  }\n  ... on TextToken {\n    text\n    hasEmphasis\n    location\n  }\n  ... on BrowsableCollection {\n    id\n    __typename\n    collectionSlug: slug\n    collectionName: name {\n      fallbackLocalizedTitle\n    }\n  }\n}\n\nfragment useGameCardCommonFragment_game on Game {\n  boxArtURL\n  displayName\n  name\n  categorySlug: slug\n  viewersCount\n  ...useGameTagListFragment_game\n}\n\nfragment useGameTagListFragment_game on Game {\n  gameTags: tags(limit: 10, tagType: CONTENT) {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useShelfClipCardFragment on Clip {\n  id\n  __typename\n  broadcaster {\n    login\n    id\n    __typename\n  }\n  slug\n  ...ClipCardCommon_clip\n}\n\nfragment useStreamCardCommonFragment_stream on Stream {\n  id\n  __typename\n  viewersCount\n  previewImageURL\n  type\n  game {\n    id\n    __typename\n    name\n    slug\n  }\n  broadcaster {\n    id\n    __typename\n    broadcastSettings {\n      title\n      id\n      __typename\n    }\n    login\n    displayName\n    profileImageURL(width: 50)\n    ...StreamCardDropDownMenu_broadcaster\n  }\n  ...useStreamTagListFragment_stream\n}\n\nfragment useStreamTagListFragment_stream on Stream {\n  streamTags: tags {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useTagLinkFragment_tag on Tag {\n  id\n  __typename\n  tagName\n  localizedDescription\n  localizedName\n}\n",
          variables: {
            requestID: "LmLqsk9ZGlITX4Qz",
            platform: "mobile_web",
            itemsPerRow: 9,
            url: "https://m.twitch.tv/",
            first: 1,
            after: null,
          },
        }),
      }).catch(console.error);
      const __1data = await _data.json();
      data._ = a;
      var t = __1data?.data?.shelves?.edges[0].node?.content.edges?.map(
        (n) => (
          (n = n.node),
          n && {
            title: n?.broadcaster?.broadcastSettings?.title,
            viewsCount: n?.viewsCount,
            endpoint: "/watch?tw=" + n?.broadcaster?.login,
            thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${
              n?.broadcaster?.login
            }-400x${(400 / 16) * 9}.jpg`,

            actorImage: `${n?.broadcaster?.profileImageURL}`,
            actorName: `${n?.broadcaster?.displayName}`,
          }
        )
      );
      t.push(
        ...a?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.richGridRenderer?.contents?.map(
          (n) => (
            (n = n.richItemRenderer?.content?.videoRenderer),
            n && {
              title: n?.title?.runs?.[0]?.text,
              viewsCount:
                n?.shortViewCountText[0]?.text + n?.shortViewCountText[1]?.text,
              endpoint: "/watch?v=" + n?.videoId,
              thumbnail: `https://i3.ytimg.com/vi/${n?.videoId}/hq720.jpg?sqp=CIiZ06oG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATAd7np_HlL_nt47fL2pOXo6qkPQ`,

              actorImage: `${n?.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails[0]?.url}`,
              actorName: `${n?.ownerText?.runs?.[0]?.text}`,
            }
          )
        )
      );
      t.forEach(() => {
        (data.content.listVideo = data.content.listVideo || []).push(
          t[Math.floor(Math.random() * t.length)]
        );
      });
      data.content.banner = {
        viewsCount: "---",
        list: [
          {
            title: "Wuant is recommended by the site's cio",
            id: "tw:wuant",
          },
          {
            title: "G0ularte is recommended by the site's cio",
            id: "tw:g0ularte",
          },
          {
            title: "Cellbit is recommended by the site's cio",
            id: "tw:cellbit",
          },
          {
            title: "Mount is recommended by the site's cio",
            id: "tw:mount",
          },
          {
            title: "PaulinhoLOKObr is recommended by the site's cio",
            id: "tw:paulinholokobr",
          },
          {
            title: "Alanzoka and recommended by the site's cio",
            id: "tw:alanzoka",
          },
        ],
      };
    } else if (type === "following") {
      data.content.channels = {
        title: "Canais que você segui",
        list: [],
      };
      data.content.videos = {
        _types: ["youtube", "kick", "twitch"],
        twitch: [],
        youtube: [],
        kick: [],
      };
    } else if (type === "page_results") {
      const a = await fetch("https://gql.twitch.tv/gql", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": "en-US",
          "Client-Id": "r8s4dac0uhzifbpu9sjdiwzctle17ff",
          "Content-Type": "application/json",
          "Device-Id": "qQkSyxaRxX4Jbu0abiq2QPZLDwm02vOJ",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
          Referer: "https://m.twitch.tv/search?term=wuant&type=",
        },
        body: JSON.stringify({
          query:
            "query Search_Query(\n  $noQuery: Boolean!\n  $noQueryFragment: Boolean!\n  $platform: String!\n  $queryFragment: String!\n  $requestID: ID\n  $target: SearchForTarget\n  $userQuery: String!\n) {\n  ...SearchAutocomplete_suggestions_d4heS\n  ...SearchContent_categories\n  ...SearchContent_channels\n  ...SearchContent_overview\n  ...SearchContent_videos\n}\n\nfragment SearchAutocomplete_suggestions_d4heS on Query {\n  searchSuggestions(queryFragment: $queryFragment, requestID: $requestID) @skip(if: $noQueryFragment) {\n    edges {\n      node {\n        id\n        __typename\n        text\n        content {\n          __typename\n          ...SuggestionSearchItem_suggestion\n          ... on SearchSuggestionCategory {\n            id\n            __typename\n          }\n          ... on SearchSuggestionChannel {\n            id\n            __typename\n          }\n        }\n      }\n    }\n    tracking {\n      modelTrackingID\n      responseID\n    }\n  }\n}\n\nfragment SearchCategoryCard_game on Game {\n  name\n  displayName\n  boxArtURL\n  viewersCount\n  slug\n  ...useGameTagListFragment_game\n}\n\nfragment SearchChannelCard_channel on User {\n  id\n  __typename\n  login\n  ...SearchOfflineChannel_channel\n  stream {\n    id\n    __typename\n    ...SearchStreamCard_stream\n  }\n  roles {\n    isPartner\n  }\n}\n\nfragment SearchContent_categories on Query {\n  searchFor(userQuery: $userQuery, platform: $platform, target: $target) @skip(if: $noQuery) {\n    games {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchCategoryCard_game\n      }\n    }\n  }\n}\n\nfragment SearchContent_channels on Query {\n  searchFor(userQuery: $userQuery, platform: $platform, target: $target) @skip(if: $noQuery) {\n    channels {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchChannelCard_channel\n      }\n    }\n  }\n}\n\nfragment SearchContent_overview on Query {\n  ...SearchContent_categories\n  ...SearchContent_channels\n  searchFor(userQuery: $userQuery, platform: $platform, target: $target) @skip(if: $noQuery) {\n    relatedLiveChannels {\n      ...SearchRelatedLiveChannels_channels\n    }\n    channels {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchChannelCard_channel\n      }\n    }\n    games {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchCategoryCard_game\n      }\n    }\n    videos {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchVideoCard_video\n      }\n    }\n  }\n}\n\nfragment SearchContent_videos on Query {\n  searchFor(userQuery: $userQuery, platform: $platform, target: $target) @skip(if: $noQuery) {\n    videos {\n      cursor\n      items {\n        id\n        __typename\n        ...SearchVideoCard_video\n      }\n    }\n  }\n}\n\nfragment SearchOfflineChannel_channel on User {\n  displayName\n  followers {\n    totalCount\n  }\n  lastBroadcast {\n    startedAt\n    id\n    __typename\n  }\n  login\n  profileImageURL(width: 150)\n}\n\nfragment SearchRelatedLiveChannels_channels on SearchForResultRelatedLiveChannels {\n  items {\n    id\n    __typename\n    stream {\n      id\n      __typename\n      viewersCount\n      previewImageURL\n      game {\n        id\n        __typename\n        name\n        displayName\n      }\n      broadcaster {\n        id\n        __typename\n        login\n        displayName\n        roles {\n          isPartner\n        }\n      }\n    }\n  }\n}\n\nfragment SearchStreamCard_stream on Stream {\n  broadcaster {\n    displayName\n    login\n    broadcastSettings {\n      title\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n  game {\n    displayName\n    name\n    id\n    __typename\n  }\n  id\n  __typename\n  previewImageURL\n  viewersCount\n}\n\nfragment SearchVideoCard_video on Video {\n  publishedAt\n  owner {\n    id\n    __typename\n    displayName\n    login\n    roles {\n      isPartner\n    }\n  }\n  id\n  __typename\n  game {\n    id\n    __typename\n    name\n    displayName\n  }\n  lengthSeconds\n  previewThumbnailURL\n  title\n  viewCount\n}\n\nfragment SuggestionSearchItem_suggestion on SearchSuggestionContent {\n  __isSearchSuggestionContent: __typename\n  __typename\n  ... on SearchSuggestionChannel {\n    id\n    __typename\n    isVerified\n    login\n    profileImageURL(width: 50)\n    user {\n      id\n      __typename\n      stream {\n        id\n        __typename\n        game {\n          id\n          __typename\n        }\n      }\n    }\n  }\n  ... on SearchSuggestionCategory {\n    id\n    __typename\n    boxArtURL\n    game {\n      name\n      slug\n      id\n      __typename\n    }\n  }\n}\n\nfragment useGameTagListFragment_game on Game {\n  gameTags: tags(limit: 10, tagType: CONTENT) {\n    ...useTagLinkFragment_tag\n    id\n    __typename\n  }\n}\n\nfragment useTagLinkFragment_tag on Tag {\n  id\n  __typename\n  tagName\n  localizedDescription\n  localizedName\n}\n",
          variables: {
            noQuery: false,
            noQueryFragment: true,
            platform: "mobile_web",
            queryFragment: "",
            requestID: null,
            target: null,
            userQuery: query,
          },
        }),
      });
      const b = await a.json();
      data.content.list = b?.data?.searchFor?.channels?.items;
    }
  } catch (error) {
    console.error("[ [ LOG ERROR ] - REQUEST/BROUSER ]", error);
    return new NextResponse(error, { status: 403 });
  }
  data.time = `${(Date.now() - startTime) / 1000}ms`;
  return Response.json(data);
}
function size(a = "", b, c) {
  return a.replace("{width}", b).replace("{height}", c);
}
//{"query":"query ChannelHomePage_Query(\\n  $login: String\u0021\\n  $url: String\u0021\\n) {\\n  channel: user(login: $login) {\\n    ...ChannelLayout_user\\n    id\\n    __typename\\n    login\\n    displayName\\n    stream {\\n      id\\n      __typename\\n      ...ChannelFeaturedCardStream_stream\\n    }\\n    subscriptionProducts {\\n      ...FeaturedClipsShelfCover_subscriptionProducts\\n      id\\n      __typename\\n    }\\n    archives: videos(first: 1, type: ARCHIVE, sort: TIME) {\\n      edges {\\n        node {\\n          ...ChannelFeaturedCardVideo_video\\n          id\\n          __typename\\n        }\\n      }\\n    }\\n    videoShelves(first: 1) {\\n      edges {\\n        node {\\n          type\\n          title\\n          items {\\n            __typename\\n            ...VideoShelf_items\\n            ... on Clip {\\n              id\\n              __typename\\n            }\\n            ... on Video {\\n              id\\n              __typename\\n            }\\n          }\\n          id\\n          __typename\\n        }\\n      }\\n    }\\n    channel {\\n      home {\\n        shelves {\\n          categoryShelf {\\n            edges {\\n              node {\\n                ...CategoryShelf_items\\n                id\\n                __typename\\n              }\\n            }\\n          }\\n          streamerShelf {\\n            edges {\\n              node {\\n                ...StreamerShelf_items\\n                id\\n                __typename\\n              }\\n            }\\n          }\\n        }\\n      }\\n      id\\n      __typename\\n    }\\n  }\\n  ...SeoHead_query\\n}\\n\\nfragment CategoryShelf_items on Game {\\n  id\\n  __typename\\n  name\\n  ...GameCard_game\\n}\\n\\nfragment ChannelCover_user on User {\\n  login\\n  bannerImageURL\\n  primaryColorHex\\n}\\n\\nfragment ChannelDescription_user on User {\\n  login\\n  displayName\\n  description\\n  lastBroadcast {\\n    game {\\n      displayName\\n      id\\n      __typename\\n    }\\n    id\\n    __typename\\n  }\\n  videos(first: 30) {\\n    edges {\\n      node {\\n        id\\n        __typename\\n        game {\\n          id\\n          __typename\\n          displayName\\n        }\\n      }\\n    }\\n  }\\n}\\n\\nfragment ChannelFeaturedCardStream_stream on Stream {\\n  id\\n  __typename\\n  broadcaster {\\n    broadcastSettings {\\n      title\\n      id\\n      __typename\\n    }\\n    id\\n    __typename\\n    login\\n  }\\n  previewImageURL\\n  game {\\n    displayName\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelFeaturedCardVideo_video on Video {\\n  id\\n  __typename\\n  title\\n  viewCount\\n  previewThumbnailURL\\n  publishedAt\\n  game {\\n    name\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelLayout_user on User {\\n  ...ChannelCover_user\\n  ...ChannelProfileInfo_user\\n  id\\n  __typename\\n  login\\n}\\n\\nfragment ChannelName_user on User {\\n  displayName\\n  login\\n  roles {\\n    isPartner\\n  }\\n}\\n\\nfragment ChannelProfileInfo_user on User {\\n  ...ChannelStatus_user\\n  ...ChannelDescription_user\\n  ...ChannelName_user\\n  ...SocialMediaLinks_user\\n  ...useFollowChannelFragment\\n  profileImageURL(width: 150)\\n  login\\n  displayName\\n  primaryColorHex\\n  followers {\\n    totalCount\\n  }\\n  stream {\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelStatus_user on User {\\n  lastBroadcast {\\n    id\\n    __typename\\n    startedAt\\n    game {\\n      id\\n      __typename\\n      displayName\\n    }\\n  }\\n  stream {\\n    id\\n    __typename\\n    createdAt\\n    game {\\n      id\\n      __typename\\n      displayName\\n    }\\n    type\\n    viewersCount\\n  }\\n}\\n\\nfragment FeaturedClipsShelfCover_subscriptionProducts on SubscriptionProduct {\\n  id\\n  __typename\\n  emotes {\\n    id\\n    __typename\\n    token\\n  }\\n}\\n\\nfragment GameCard_game on Game {\\n  id\\n  __typename\\n  boxArtURL\\n  displayName\\n  name\\n  slug\\n  viewersCount\\n}\\n\\nfragment SeoHead_query on Query {\\n  urlMetadata(url: $url) {\\n    title\\n    metatags {\\n      name\\n      attributes {\\n        key\\n        value\\n      }\\n    }\\n    jsonld\\n    share {\\n      title\\n      text\\n      url\\n    }\\n  }\\n}\\n\\nfragment SocialMediaLinks_user on User {\\n  channel {\\n    id\\n    __typename\\n    socialMedias {\\n      id\\n      __typename\\n      name\\n      title\\n      url\\n    }\\n  }\\n}\\n\\nfragment StreamerShelf_items on User {\\n  id\\n  __typename\\n  ...UserCard_user\\n}\\n\\nfragment UserCard_user on User {\\n  id\\n  __typename\\n  displayName\\n  login\\n  stream {\\n    viewersCount\\n    id\\n    __typename\\n  }\\n  primaryColorHex\\n  profileImageURL(width: 150)\\n}\\n\\nfragment VideoShelfClip_clip on Clip {\\n  id\\n  __typename\\n  broadcaster {\\n    login\\n    id\\n    __typename\\n  }\\n  clipCreatedAt: createdAt\\n  durationSeconds\\n  game {\\n    name\\n    displayName\\n    id\\n    __typename\\n  }\\n  slug\\n  thumbnailURL\\n  clipTitle: title\\n  clipViewCount: viewCount\\n}\\n\\nfragment VideoShelfVideo_video on Video {\\n  id\\n  __typename\\n  createdAt\\n  lengthSeconds\\n  game {\\n    name\\n    displayName\\n    id\\n    __typename\\n  }\\n  previewThumbnailURL\\n  title\\n  viewCount\\n}\\n\\nfragment VideoShelf_items on VideoShelfItem {\\n  __isVideoShelfItem: __typename\\n  __typename\\n  ... on Clip {\\n    id\\n    __typename\\n    game {\\n      name\\n      id\\n      __typename\\n    }\\n    ...VideoShelfClip_clip\\n  }\\n  ... on Video {\\n    id\\n    __typename\\n    game {\\n      name\\n      id\\n      __typename\\n    }\\n    ...VideoShelfVideo_video\\n  }\\n}\\n\\nfragment useFollowChannelFragment on User {\\n  id\\n  __typename\\n  self {\\n    follower {\\n      followedAt\\n    }\\n  }\\n}\\n","variables":{"login":"wuant","url":"https://m.twitch.tv/wuant/home"}}' \
