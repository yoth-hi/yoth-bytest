
import { FC } from 'react';
import FAR from './Fetch';

interface FetchProps {
  a?: string;
  b?: Record<string, any>;
}

const Fetch = (a: string = "", b: Record<string, any> = {}): Promise<any> => {
  let _j: boolean = true;
  try {
    const { headers } = require("next/headers");
    const headersList = headers();
    _j = false;


     a = `https://yoth-hi.vercel.app${a}`;
    //   a= `http://localhost:3000${a}`;
  } catch (error) {
    a = `${location.origin}${a}`;
  }
  b = {
    ...b,
    cache: "no-store",
  };
  const apiFetch = new FAR();
  const req = new Request(a, b);
  return new Promise(function (ok, erro) {
    apiFetch.fetch(a, b,_j)
      .then(ok)
      .catch((a) => {
        ok({ "erro": a });
      });
  });
};

interface ApiRestProps {
  type: string;
  context: Record<string, any>;
}

const ApiRest: FC<ApiRestProps> = async (props) => {
  let lg: string;
  let auto: string = "auto :)";
  try {
    lg = navigator.language;
  } catch (a) {
    const { headers } = require("next/headers");
    const headersList = headers();
    lg = (headersList.get("accept-language")?.[0]+headersList.get("accept-language")?.[1])||"en"
  }
  const headers = {
    "Authentication": auto,
    "Accept-Encoding": "gzip",
  };
  const body = {
    ...props,
    context: {
      ...props.context,
      lg: lg,
    },
  };
  switch (props.type) {
    case "player":
      return Fetch("/yothpi/player", { method: "POST", body: JSON.stringify(body), headers });
    case "browse":
      return Fetch("/yothpi/browse", { method: "POST", body: JSON.stringify(body), headers });
    default:
      break;
  }
};

//FAR=fetch api rest

export default ApiRest;
