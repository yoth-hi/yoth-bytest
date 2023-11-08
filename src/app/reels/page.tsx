import Image from "next/image";
import Player from "../../components/player";
import Chat from "../../components/chat";
import Reels from "../../components/ReelsPlayer";

export default function (props: any) {
  return (
    <div className="page-reels">
      <div className="page-reels-items">
        <Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/>
        <Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/><Reels/>
      </div>
    </div>
  );
}

//page-watch-primary => scroll
