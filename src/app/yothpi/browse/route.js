import { NextResponse } from "next/server";
import { getTraslate, req_btn } from "../_service";
export async function POST(req) {
  const startTime = Date.now();
  const data = {};
  data.content = {};
  try {
    const json = await req.json();
    if (!json || !json.context) {
      return new NextResponse(`the '${JSON.stringify(json)}' not is valid`, {
        status: 403,
      });
    }
    const {
      context: { lg, platform, id, type },
    } = json || { context: {} };

    const { context } = json || {};

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
        const auto = "test";
        if (platform === "twitch") {
          data.videoDetails = {
            title: us?.broadcastSettings?.title,
            description: us?.description,
            actorName: us?.displayName,
            actorId: us?.login,
            actorImage: us?.profileImageURL,
            thumbnail:
              size(us?.stream?.previewImageURL, 400,(400/16)*9) ||
              us?.offlineImageURL,
            id: us?.id,
            isLive: !!us?.stream,
            tw_isOffline: !(us?.stream && context?.platform === "twitch"),
          };

          data.content.listVideo = us?.videos?.edges?.map(({ node }) => ({
            title: node.title,
            actorName: us?.displayName,
            viewsCount: `${String(node?.viewCount || 0).replace(
              /(\d{3})/g,
              " $1"
            )} Visualizações`,
            thumbnail: size(node.previewThumbnailURL, 400,(400/16)*9),
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
              )} Subscriber`,
              number: us?.followers?.totalCount || 0,
            },
          };
        }
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
            itemsPerRow: 30,
            url: "https://m.twitch.tv/",
            first: 1,
            after: null,
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
              thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n?.broadcaster?.login}-400x${(400/16)*9}.jpg`,

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
            //'Authorization': 'OAuth r8s4dac0uhzifbpu9sjdiwzctle17ff',
            "Device-Id": "",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
          },
          body: JSON.stringify({
            context: {
              client: {
                hl: "pt",
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
          "Accept-Language": "en", //lg,
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
            itemsPerRow: 30,
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
            thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n?.broadcaster?.login}-400x${(400/16)*9}.jpg`,

            actorImage: `${n?.broadcaster?.profileImageURL}`,
            actorName: `${n?.broadcaster?.displayName}`,
          }
        )
      );
      t.push(
        ...a?.contents?.twoColumnBrowseResultsRenderer.tabs?.[0]?.tabRenderer.content.richGridRenderer?.contents?.map(
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
        title: "wouat live, recommended ",
        id: "tw:wuant",
        viewsCount: "---",
        list: [],
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
    }
  } catch (error) {
    return new NextResponse(error, { status: 403 });
  }
  data.time = Date.now() - startTime;
  return Response.json(data);
}
function size(a = "", b, c) {
  return a.replace("{width}", b).replace("{height}", c);
}
//{"query":"query ChannelHomePage_Query(\\n  $login: String\u0021\\n  $url: String\u0021\\n) {\\n  channel: user(login: $login) {\\n    ...ChannelLayout_user\\n    id\\n    __typename\\n    login\\n    displayName\\n    stream {\\n      id\\n      __typename\\n      ...ChannelFeaturedCardStream_stream\\n    }\\n    subscriptionProducts {\\n      ...FeaturedClipsShelfCover_subscriptionProducts\\n      id\\n      __typename\\n    }\\n    archives: videos(first: 1, type: ARCHIVE, sort: TIME) {\\n      edges {\\n        node {\\n          ...ChannelFeaturedCardVideo_video\\n          id\\n          __typename\\n        }\\n      }\\n    }\\n    videoShelves(first: 1) {\\n      edges {\\n        node {\\n          type\\n          title\\n          items {\\n            __typename\\n            ...VideoShelf_items\\n            ... on Clip {\\n              id\\n              __typename\\n            }\\n            ... on Video {\\n              id\\n              __typename\\n            }\\n          }\\n          id\\n          __typename\\n        }\\n      }\\n    }\\n    channel {\\n      home {\\n        shelves {\\n          categoryShelf {\\n            edges {\\n              node {\\n                ...CategoryShelf_items\\n                id\\n                __typename\\n              }\\n            }\\n          }\\n          streamerShelf {\\n            edges {\\n              node {\\n                ...StreamerShelf_items\\n                id\\n                __typename\\n              }\\n            }\\n          }\\n        }\\n      }\\n      id\\n      __typename\\n    }\\n  }\\n  ...SeoHead_query\\n}\\n\\nfragment CategoryShelf_items on Game {\\n  id\\n  __typename\\n  name\\n  ...GameCard_game\\n}\\n\\nfragment ChannelCover_user on User {\\n  login\\n  bannerImageURL\\n  primaryColorHex\\n}\\n\\nfragment ChannelDescription_user on User {\\n  login\\n  displayName\\n  description\\n  lastBroadcast {\\n    game {\\n      displayName\\n      id\\n      __typename\\n    }\\n    id\\n    __typename\\n  }\\n  videos(first: 30) {\\n    edges {\\n      node {\\n        id\\n        __typename\\n        game {\\n          id\\n          __typename\\n          displayName\\n        }\\n      }\\n    }\\n  }\\n}\\n\\nfragment ChannelFeaturedCardStream_stream on Stream {\\n  id\\n  __typename\\n  broadcaster {\\n    broadcastSettings {\\n      title\\n      id\\n      __typename\\n    }\\n    id\\n    __typename\\n    login\\n  }\\n  previewImageURL\\n  game {\\n    displayName\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelFeaturedCardVideo_video on Video {\\n  id\\n  __typename\\n  title\\n  viewCount\\n  previewThumbnailURL\\n  publishedAt\\n  game {\\n    name\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelLayout_user on User {\\n  ...ChannelCover_user\\n  ...ChannelProfileInfo_user\\n  id\\n  __typename\\n  login\\n}\\n\\nfragment ChannelName_user on User {\\n  displayName\\n  login\\n  roles {\\n    isPartner\\n  }\\n}\\n\\nfragment ChannelProfileInfo_user on User {\\n  ...ChannelStatus_user\\n  ...ChannelDescription_user\\n  ...ChannelName_user\\n  ...SocialMediaLinks_user\\n  ...useFollowChannelFragment\\n  profileImageURL(width: 150)\\n  login\\n  displayName\\n  primaryColorHex\\n  followers {\\n    totalCount\\n  }\\n  stream {\\n    id\\n    __typename\\n  }\\n}\\n\\nfragment ChannelStatus_user on User {\\n  lastBroadcast {\\n    id\\n    __typename\\n    startedAt\\n    game {\\n      id\\n      __typename\\n      displayName\\n    }\\n  }\\n  stream {\\n    id\\n    __typename\\n    createdAt\\n    game {\\n      id\\n      __typename\\n      displayName\\n    }\\n    type\\n    viewersCount\\n  }\\n}\\n\\nfragment FeaturedClipsShelfCover_subscriptionProducts on SubscriptionProduct {\\n  id\\n  __typename\\n  emotes {\\n    id\\n    __typename\\n    token\\n  }\\n}\\n\\nfragment GameCard_game on Game {\\n  id\\n  __typename\\n  boxArtURL\\n  displayName\\n  name\\n  slug\\n  viewersCount\\n}\\n\\nfragment SeoHead_query on Query {\\n  urlMetadata(url: $url) {\\n    title\\n    metatags {\\n      name\\n      attributes {\\n        key\\n        value\\n      }\\n    }\\n    jsonld\\n    share {\\n      title\\n      text\\n      url\\n    }\\n  }\\n}\\n\\nfragment SocialMediaLinks_user on User {\\n  channel {\\n    id\\n    __typename\\n    socialMedias {\\n      id\\n      __typename\\n      name\\n      title\\n      url\\n    }\\n  }\\n}\\n\\nfragment StreamerShelf_items on User {\\n  id\\n  __typename\\n  ...UserCard_user\\n}\\n\\nfragment UserCard_user on User {\\n  id\\n  __typename\\n  displayName\\n  login\\n  stream {\\n    viewersCount\\n    id\\n    __typename\\n  }\\n  primaryColorHex\\n  profileImageURL(width: 150)\\n}\\n\\nfragment VideoShelfClip_clip on Clip {\\n  id\\n  __typename\\n  broadcaster {\\n    login\\n    id\\n    __typename\\n  }\\n  clipCreatedAt: createdAt\\n  durationSeconds\\n  game {\\n    name\\n    displayName\\n    id\\n    __typename\\n  }\\n  slug\\n  thumbnailURL\\n  clipTitle: title\\n  clipViewCount: viewCount\\n}\\n\\nfragment VideoShelfVideo_video on Video {\\n  id\\n  __typename\\n  createdAt\\n  lengthSeconds\\n  game {\\n    name\\n    displayName\\n    id\\n    __typename\\n  }\\n  previewThumbnailURL\\n  title\\n  viewCount\\n}\\n\\nfragment VideoShelf_items on VideoShelfItem {\\n  __isVideoShelfItem: __typename\\n  __typename\\n  ... on Clip {\\n    id\\n    __typename\\n    game {\\n      name\\n      id\\n      __typename\\n    }\\n    ...VideoShelfClip_clip\\n  }\\n  ... on Video {\\n    id\\n    __typename\\n    game {\\n      name\\n      id\\n      __typename\\n    }\\n    ...VideoShelfVideo_video\\n  }\\n}\\n\\nfragment useFollowChannelFragment on User {\\n  id\\n  __typename\\n  self {\\n    follower {\\n      followedAt\\n    }\\n  }\\n}\\n","variables":{"login":"wuant","url":"https://m.twitch.tv/wuant/home"}}' \
