"use client";
import Image from "./image";
import Link from "next/link";
import Btn from "./button_root";
import { memo } from "react";
import { t, formate } from "../libs/transition";
export default function (props) {
  if (!props) return;
  return (
    <Btn root={"div"} className="card-video-row">
      <T {...props} />
    </Btn>
  );
}
const T = memo(function (props) {
  const { data } = props;
  if (!data || !data.thumbnail) return;
  const { title, endpoint, actorName, viewsCount, thumbnail } = data;
  return (
    <>
      <Link href={endpoint}>
        <div className="card-video-row-thumbnail">
          <Image classRoot="card-thumbnail" src={thumbnail} />
        </div>
      </Link>
      <div>
        <Link href={endpoint}>
          <h3 className="card-video-row-title">{title}</h3>
        </Link>
        <div>
          <div className="card-video-row-channel-name">{actorName}</div>
          <div className="card-video-row-matadata">
            {formate(viewsCount, "Views")}
          </div>
        </div>
      </div>
    </>
  );
});
