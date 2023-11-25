import Page from "./_page"
import Player from "../../components/player";
import Fetch from "../../service/ApiRest";
import { redirect } from 'next/navigation'

interface RootProps {
  searchParams: {
    tw?: string;
    v?: string;
  };
}

export default async function Root(props: RootProps){
  const { searchParams: { tw, v } } = props;
  const platform: string | null = tw ? "twitch" : (v ? "youtube" : null );
  const id: string | null = tw || v;
  if(!id){return redirect("/")}
  const data: any = await Fetch({
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
    platform
  }
  return(<Page {...newProps} data={data} key={276} />)
}
export const revalidate: number = 60;