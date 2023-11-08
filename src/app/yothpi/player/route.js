import { getTraslate } from "../_service";

const getUrlStreamTwichM3u8 = function (p, channel) {
  if (!p) return;
  const { signature, value } = p;
  return `http://localhost:3000/yothpi/stream?q=${encodeURIComponent(
    `http://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?player=twitchweb&&token=${encodeURIComponent(
      value
    )}&sig=${signature}&allow_audio_only=true&allow_source=true&type=any&p=${Math.floor(
      Math.random() * 10000
    )}`
  )}`;
};
const twitch = async function (channel, ling = "en") {
  const a = await fetch("https://gql.twitch.tv/gql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Encoding":"*;q=0.3",
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

export async function POST(req) {
  const { context } = await req.json();
  var data, streamM3u8Url;
  const ling = context?.lg;
  const ts = getTraslate(ling||"en")
  if (context?.platform === "twitch") {
    const channel = context.id;
    data = await twitch(channel, ling);
    streamM3u8Url = getUrlStreamTwichM3u8(
      data?.data?.user?.stream?.playbackAccessToken,
      channel
    );
  }
  const us = data?.data?.channel;
  return Response.json({
    data,
    labels:{
      "STREAM_IS_OFFLINE":ts.Stream_is_offiline
    },
    stream: {
      streamM3u8Url,
    },
    nextVideosOnEnd: [
      /* ...us?.videos?.map?.(({ title, previewThumbnailURL, id }: any) => ({
        title, thumbnail: previewThumbnailURL, id, type: "twitch", actorName: us?.login,
        actorId: us?.login, description: us?.description,
        actorImage: us?.profileImageURL
      }))*/
    ],
    videoDetails: {
      title: us?.broadcastSettings?.title,
      description: us?.description,
      actorName: us?.login,
      actorId: us?.login,
      actorImage: us?.profileImageURL,
      thumbnail:us?.stream?.previewImageURL.replace("{width}", 1280).replace("{height}", 720) || us?.offlineImageURL || us?.bannerImageURL,
      id: us?.id,
      isLive: !!us?.stream,
      tw_isOffline: !us?.stream && context?.platform === "twitch",
    },
  },{
    headers:{
      "Accept-Encoding":"*;q=0.1",
    }
    });
}
