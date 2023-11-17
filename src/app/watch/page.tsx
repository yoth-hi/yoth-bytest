import Page from "./_page"
import Player from "../../components/player";

export default function Root(props:any){
  const { searchParams: { tw, v } }: any = props;
  const platform = tw ? "twitch" : null;
  const id = tw || v;
  const newProps = {
    ...props,
    id,
    platform
  }
  return(<Page {...newProps} key={276} />)
}
