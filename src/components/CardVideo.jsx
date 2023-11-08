import Image from "./image";
import Link from "next/link";
export default function ({ data }) {
  if (!data) return;
  const { title, endpoint, actorImage, actorName, viewsCount, thumbnail } = data;
  return (
    <div className="card-video">
      <Link href={endpoint || "/"}>
        <div className={thumbnail?"card-video-thumbnail":"skeleton-image-video"}>
          <Image classRoot="card-thumbnail" src={thumbnail} />
        </div>
      </Link>
      <div className="card-video-details">
        <div className={actorImage?"card-video-profile":"skeleton-image-square"}>
          {actorImage&&<Image classRoot="card-video-profile" width={64} src={actorImage} />}
        </div>
        <div className="card-matadata">
          <Link href={endpoint || "/"}>
            <h3 className="card-video-title">{title||<div className="skeleton-text title"/>}</h3>
          </Link>
          <div className="card-video-details">
            <div className="card-video-channel-name">{actorName||<div className="skeleton-text"/>}</div>
            <div className="card-video-matadata">{viewsCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
