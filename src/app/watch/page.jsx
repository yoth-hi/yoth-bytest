import Page from "./_page"
import Player from "../../components/player";
import Fetch from "../../service/ApiRest";
import { redirect } from 'next/navigation'
export default async function Root(props){
  const { searchParams: { tw, v } } = props;
  const platform = tw ? "twitch" : (v ? "youtube" : null );
  const id = tw || v;
  if(!id){return redirect("/")}
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
    platform
  }
  return(<Page {...newProps} data={data} key={276} />)
}
export const revalidate = 60;