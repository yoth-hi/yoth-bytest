"use client";
import Emoji from "./icons/emojis";
import CardPreview from "./cardPreview";
import Ws from "../service/WebSocket";
import ParceJsonTwich from "../libs/parceMsgTw";
import Title from "./string";
import { useEffect, useState } from "react";
const Action_b = {
  ADMIN:
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
          <Title semibold="" large="" title="Stream chat" />

          <div></div>
        </div>
        <div>.</div>
      </div>
      <Msgs channel={id} />
      {false&&<CardPreview/>}
      <div>
        <div className="chat-edit-input">
          <input placeholder="enviar..." className="chat-edit-input-text" />
          <button className="chat-edit-input-emots">
            <Emoji />
          </button>
        </div>
        <div className="chat-edit-buttons">
          <div>{points} </div>
          <div>
            <button className="chat-btn-send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const Msg = function (props) {
  if (!props) return;
  const { data } = props;
  const isTimeShown = true;
  return (
    <div className="chat-message">
      <div className="message-content">
        <span
          className=""
          style={{
            color: data?.color||"#333",
          }}
        >
          <span className="">[begs]</span>
          <span className="username">{data?.["display-name"]}</span>
          <span className="colon">:</span>
        </span>
        <span className="message-text">{data?.text}</span>
        {isTimeShown && <div className="message-time">{data.createdTime}</div>}
      </div>
    </div>
  );
};
var ws;
const Actions = {
  "connect":"Bem vindo ao chat",
  "1":"Conectando ao chat..."
}
const Msgs = function (props) {
  if (!props) return;
  const [msgs, setMsgs] = useState([]);
  const [status, setStatus] = useState(Actions["1"]);
  const { channel } = props;
  const addMsg = function (a) {
    setMsgs((beforeMsg) => {
      const newMsg = [...beforeMsg, a].slice(-100);
      return newMsg;
    });
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
              text: parameters,
            });
          }
        },
        Status: function (data) {
          const a= Actions[data];
          if(a)setStatus(a)
          //data  console.log("Msg", ParceJsonTwich(data))
          // setMsgs(0)
        },
      });
  }, []);
  return (<>
    <div className="chat-mgs">
    <span className="chat-mgs-status">{status}</span>
    {msgs?.map((data) => Action.MSG({ data }))}</div>
  </>);
};

const Action = {
  MSG: function (props) {
    return <Msg {...props} />;
  },
};
