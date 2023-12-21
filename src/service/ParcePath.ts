type values = {
  id?: string;
  plataform?: "twitch" | "youtube";
  
}
const vart: object = {
  "youtube":"v",
  "twitch":"tw"
}
export default function(type:string,values:values={}):string {
  let path: string;
  switch (type) {
    case "watch":path="watch?"+vart[values.plataform]+"="+values.id;break;
    default:
      break;
  }
  return path;
}