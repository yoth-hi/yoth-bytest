import Image from "next/image";
import Player from "../../../components/player";
import Chatroom from "../../../components/chat";
import StreamPreview from "../../../components/StreamPreview";

export default function (props: any) {
  return (
    <div>
      <div className="settings-dashboard-stream">
        <div className="settings-dashboard-stream-first">
          <div className="cell video-preview">
            <StreamPreview
              isOnline={"isOnline"}
              channel={"channel"}
              user={"user"}
              streamId={"streamId"}
              stream={"stream"}
              hostee={"hostee"}
              chatroomId={"chatroomId"}
            />
          </div>
        </div>
        <div className="settings-dashboard-stream-last">
          <div className="cell video-preview">
            <Chatroom
              scene="Channel"
              theme={true ? "dark" : "light"}
              className="chat-box"
              roomId={"chatroomId"}
              channelId={"loggedUID"}
              isFollower={true}
              enableMsgTabs={true}
              page="Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//page-watch-primary => scroll
