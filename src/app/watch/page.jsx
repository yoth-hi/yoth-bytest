import Page from "./_page";
import Player from "../../components/player";
import Fetch from "../../service/ApiRest";
import { redirect } from "next/navigation";
import Head from "next/head";
var _data = {};
export async function generateMetadata(props) {
  const {
    searchParams: { tw, v },
  } = props;
  const platform = tw ? "twitch" : v ? "youtube" : null;
  const id = tw || v;
  const data = await Fetch({
    type: "browse",
    context: {
      type: "player_page",
      platform,
      id,
    },
  });

  return {
    title: _data?.videoDetails?.title + " - " + platform + "- Yoth",
    description: _data?.videoDetails?.description,
    openGraph: {
      title: _data?.videoDetails?.title + " - " + platform + "- Yoth",
      description: _data?.videoDetails?.description,
      images: [_data?.videoDetails?.thumbnail],
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
  const data = await Fetch({
    type: "browse",
    context: {
      type: "player_page",
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
      <Page {...newProps} data={data} key={276} />
    </>
  );
}
export const revalidate = 60;
