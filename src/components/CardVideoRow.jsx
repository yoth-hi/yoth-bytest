import Image from "./image";
import Link from "next/link";
import { t, formate } from "../libs/transition";
export default function ({data:{title,endpoint,actorName,viewsCount,thumbnail}}) {
  return (
    <div className="card-video-row">
        <Link href={endpoint}>
      <div className="card-video-row-thumbnail"  >
        <Image
          classRoot="card-thumbnail"
          src={thumbnail}
        />
      </div>
        </Link>
      <div>
        <Link href={endpoint}>
          <h3 className="card-video-row-title">{title}</h3>
        </Link>
        <div>
          <div className="card-video-row-channel-name">{actorName}</div>
          <div className="card-video-row-matadata">{formate(viewsCount,"Views")} - há -- </div>
        </div>
      </div>
    </div>
  );
}
