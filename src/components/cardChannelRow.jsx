import Image from "./image";
import Link from "next/link";
export default function ({ q }) {
  if(!q)return;
  //(JSON.stringify(jstr))
  return (
    <div className="card-channel-row">
      <Link
     className="card-channel-row"
        href={
          "/c/" +
          (q?.profileImageURL ? "tw" : "yt") +
          "@" +
          (q?.actorId || q?.login)
        }
      >
        <div className="card-channel-row-image">
          <Image
            src={q?.profileImageURL || q?.actorImage}
            classRoot="card-channel-row-image-content"
          />
        </div>
        <div className="card-channel-row-datalis">
          <div>{q?.displayName || q?.actorName}</div>
          <div>{q?.followers?.totalCount || q?.actorName}</div>
        </div>
      </Link>
    </div>
  );
}
