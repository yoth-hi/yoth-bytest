"use client";
import Emoji from "./icons/emojis";
import CardPreview from "./cardPreview";
import Ws from "../service/WebSocket";
import ParceJsonTwich from "../libs/parceMsgTw";
import Title from "./string";
import Image from "./image";
import { t } from "../libs/transition";
import { useEffect, useRef, useState } from "react";
const Action_b = {
  moderator:
    "https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/2",
  VIP: "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2",
};
export default function ({ id }) {
  
  const points = 0; //state
  const value = 0; //state

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-header-left">
          <Title semibold="" large="" title={t("Chat")} />
          <div>{""}</div>
        </div>
        <div>.</div>
      </div>
      <Msgs channel={id} />
      {false && <CardPreview />}
      <div>
        <div className="chat-edit-input">
          <input
            placeholder={t("send") + "..."}
            className="chat-edit-input-text"
          />
          <button className="chat-edit-input-emots">
            <Emoji />
          </button>
        </div>
        <div className="chat-edit-buttons">
          <div>{points} </div>
          <div>
            <button className="chat-btn-send">{t("send")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const Msg = function (props) {
  if (!props) return;
  const { data } = props;
  if (!data) return;
  const { timestamp } = data;
  const isTimeShown = true;
  console.log(data);
  /* <div className="chat-message">
      <div className="message-content">
        <span
          className="message-content-user"
          style={{
            color: data?.color || "#333",
          }}
        >
          <span className="">{data?.badges?.map(a=>(
              Action_b[a[0]]&&<img style={{width:"16px"}} src={Action_b[a[0]]} alt={a[0]}/>||"☆"
            )
          )
            
          }</span>
          <span className="username">{data?.["display-name"]}</span>
          <span className="colon">:</span>
        </span>
        <span className="message-text">{data?.text}</span>
        {isTimeShown && <div className="message-time">{data.createdTime}</div>}
      </div>
    </div>*/
  return (
    <div
      className="live-chat-item-list-renderer"
      modern=""
      id="ChwKGkNLTzd4Ym16NElJREZlREN3Z1Fka1hjQlFR"
      author-type="moderator"
    >
      <Image
        classRoot="live-chat-text-message-avatar"
        loadingSkeleton="skeleton-image-square"
        rounded=""
        draggable="false"
        alt=""
        height="24"
        width="24"
        src="" //"https://yt4.ggpht.com/6oalzKfwk46AH_EUK-ZA7mdd1W56mkZF6K_NCV_sR0A6rn9MlXcsBvtFlvkyFFK2l4F_J6DKXQ=s32-c-k-c0x00ffffff-no-rj"
      />
      <div className="live-chat-text-message-content">
        {timestamp && (
          <span className="live-chat-text-message-content-timestamp">
            xx:xx PM
          </span>
        )}
        <div className="live-chat-text-message-author">
          <span dir="auto" className="moderator">
            {data?.["display-name"]}
            <span className="live-chat-author-badges"></span>
          </span>
          <span className="live-chat-text-message-badges">
            {/*  <span
              className="live-chat-text-message-badges-icon"
              aria-label="Moderador"
              type="moderator"
              shared-tooltip-text="Moderador"
            >
              <div
                id="image"
                className="style-scope yt-live-chat-author-badge-renderer"
              >
                <yt-icon className="style-scope yt-live-chat-author-badge-renderer">
                  <yt-icon-shape className="style-scope yt-icon">
                    <icon-shape className="yt-spec-icon-shape">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          focusable="false"
                        >
                          <path d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z"></path>
                        </svg>
                      </div>
                    </icon-shape>
                  </yt-icon-shape>
                </yt-icon>
              </div>
            </span>
            <span
              className="live-chat-text-message-badges-icon"
              aria-label="Membro (6 meses)"
              type="member"
              shared-tooltip-text="Membro (6 meses)"
            >
              <div
                id="image"
                className="style-scope yt-live-chat-author-badge-renderer"
              >
                <img
                  src="https://yt3.ggpht.com/7rldgAR7XmpP_o8r8wxtBSRnvx-n84wrpZ7BHRyaokWGRKamQskdoTilml-ZOe0mqKCwIB_vaA=s32-c-k"
                  className="style-scope yt-live-chat-author-badge-renderer"
                  alt="Membro (6 meses)"
                />
              </div>
            </span>*/}
          </span>
        </div>
        <span dir="auto">{data?.text}</span>
      </div>
      <div>
        <button
          className="live-chat-text-message-menu-button"
          aria-label="Ações no chat"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

const Actions = {
  connect: "Bem vindo ao chat",
  1: "Conectando ao chat...",
};
var ws;
const Msgs = function (props) {
  if (!props) return;
  const chatRef = useRef();
  const [msgs, setMsgs] = useState([]);
  const [status, setStatus] = useState(Actions["1"]);
  const { channel } = props;
  const addMsg = function (a) {
    setMsgs((beforeMsg) => {
      const newMsg = [...beforeMsg, a].slice(-100);
      return newMsg;
    });
    chatRef.current.scrollTop = chatRef.current.scrollHeight*1e3
  };
  useEffect(() => {
    ws =
      ws ||
      Ws({
        channel,
        MSG: function (data) {
          const { parameters, command, tags } = ParceJsonTwich(data);
          if (command?.command === "PRIVMSG") {
            addMsg({
              ...tags,
              badges: Object.entries(tags?.badges),
              text: parameters,
            });
          }
        },
        Status: function (data) {
          const a = Actions[data];
          if (a) setStatus(a);
          //data  console.log("Msg", ParceJsonTwich(data))
          // setMsgs(0)
        },
      });
  }, []);
  return (
    <>
      <div ref={chatRef} className="chat-mgs">
        <span className="chat-mgs-status">{status}</span>
        {msgs?.map((data) => Action.MSG({ data }))}
      </div>
    </>
  );
};

const Action = {
  MSG: function (props) {
    return <Msg {...props} />;
  },
}; /*
          <img
            className="live-chat-text-message-emoji"
            src="https://www.youtube.com/s/gaming/emoji/0f0cae22/emoji_u1f97a.svg"
            alt="🥺"
            shared-tooltip-text=":pleading_face:"
            id="emoji-75"
          />*/
