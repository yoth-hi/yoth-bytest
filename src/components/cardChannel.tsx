
import Image from "./image"
export default function CardChannelRow({data}:any) {
  return (
    <div  className="card-channel" key={`${data?.id||"-"}`}>
      <div className="card-channel-image">
        <Image rounded="true" width={64} height={64} src={data?.profileImage}/>
      </div>
      <div className="card-channel-info">
        <div className="card-channel-info-name">{data?.name||<div className="skeleton-text"/>}</div>
        <div className="card-channel-info-follows">{data?.subscribers?.label||<div className="skeleton-text" />}</div>
      </div>
    </div>
  );
}
