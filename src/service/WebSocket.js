const ws_tw = "wss://irc-ws.chat.twitch.tv/v1";
const auto = "SCHMOOPIIE";
const account = "justinfan31456";

var ws;
export default function (props) {
  ws = new WebSocket(ws_tw);
  const { channel } = props;
  ws.addEventListener("message", function ({ data }) {
    props.MSG?.(data);
  });
  ws.addEventListener("open", function () {
    props.Status?.("connect");
    ws.send("CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands");
    ws.send(`PASS ${auto}`);
    ws.send(`NICK ${account}`);
    ws.send(`USER justinfan31456 8 * :justinfan31456`);

    ws.send("JOIN #" + channel);
  });
  ws.addEventListener("close", function () {
    props.Status?.("close");
  });
  return {ws,clear(){ws.close()}};
}
/*
   setTimeout(() => {
     
 //  ws.send(`:${account}!${account}@${account}.tmi.twitch.tv PRIVMSG #justguh :${btoa(data)}`);},  4000);
  })*/
