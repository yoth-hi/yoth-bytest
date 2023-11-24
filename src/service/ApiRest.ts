
import { FC } from 'react';

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
  } catch (error) {
    a = `${location.origin}${a}`;
  }
  b = {
    ...b,
    cache: "no-store",
  };
  const req = new Request(a, b);
  return new Promise(function (ok, erro) {
    (_j ? fetch(req) : fetch(a, b))
      .then((e) => e.json())
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
  try {
    lg = navigator.language;
  } catch (a) {
    lg = "en";
  }
  const headers = {
    "Authentication": "auto null",
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

export default ApiRest;
    