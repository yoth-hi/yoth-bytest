import Page from "./_page"
import Player from "../../components/player";
const RendOlayer = ({ id, sp, platform }:any) => (
  <div className="page-watch-container">
    <div
      className="page-watch-primary"
    >
      <div className="page-watch-primary-player">
        <div id="cinematic" />
        <div className="page-watch-primary-player-conteiner">
           <Player {...{id,platform}}/>
        </div>
      </div>
    </div>
  </div>
);
export default function Root(props:any){
  const { searchParams: { tw, v } }: any = props;
  const platform = tw ? "twitch" : null;
  const id = tw || v;
  const newProps = {
    ...props,
    id,
    platform
  }
  return(<Page {...newProps} RendOlayer={<RendOlayer {...{ id, sp: () => void 0, platform }} key={276} />}/>)
}
