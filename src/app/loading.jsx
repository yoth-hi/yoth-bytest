import CardVideo from "../components/CardVideo";
const s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const SkeletonCardVideo = function(){
  return( <CardVideo data={{}} skeleton />)
}

export default function () {
  return <><div className="skeleton-home-page-banner" /><div className="skeleton-home-page">{s.map(()=><SkeletonCardVideo/>)}</div></>;
}
