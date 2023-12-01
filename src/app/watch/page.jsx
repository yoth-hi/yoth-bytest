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
    type: "browse",
    context: {
      type: "player_page",
      platform,
      id,
    },
  });

  return {
    title: data?.videoDetails?.title,
    description: data?.videoDetails?.description,
    openGraph: {
      title: data?.videoDetails?.title,
      description: data?.videoDetails?.description,
      images: [data?.videoDetails?.thumbnail],
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
