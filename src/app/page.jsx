
import Image from "../components/image";
import CardVideo from "../components/CardVideo";
import Banner from "../components/home_banner";
import Title from "../components/string";
import Fetch from "./../service/ApiRest";
import CardCategory from "../components/CardCategory";
import P from "./_page";

import { t } from "../libs/transition";

export default async function Home() {
  const data = await Fetch({
    type: "browse",
    context: {
      type: "home_page",
    },
  });
  
  /*  const getdata = function () {
    Fetch({
      type: "browse",
      context: {
        type: "home_page",
      },
    }).then((_data) => {
      if (data) {
        const new_data = _data || { content: {} };
        new_data.content.listVideo = [
          _data?.content?.listVideo,
          ...data?.content?.listVideo,
        ];
        setData(new_data);
      } else {
        setData(_data);
      }
    });
  };*/
  // useState(getdata, [loaded]);

  return (
    <>
      <div className="page-home">
      <P data={data}/>
      </div>
    </>
  );
}
export const revalidate = 100;