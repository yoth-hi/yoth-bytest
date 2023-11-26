import Image from "../../components/image";
import CardVideo from "../../components/CardVideo";
import Banner from "../../components/banner";
import Title from "../../components/string";
import Fetch from "../../service/ApiRest";
import CardCategory from "../../components/CardCategory";
export const metadata = {
  title: "Gaming"
}

export default async function Home() {
  const data = await Fetch({
    type: "browse",
    context: {
      type: "home_gaming",
    },
  });

  return (
    <>
      <div className="page-home">
        <Banner />
        <Title semibold="" large="" title="Gamers" />
        <div className="row-list">
          {/*   <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
  */}
        </div>{JSON.stringify(data)}
        <div className="page-content-video">
          <Title semibold="" large="" title="Recommended for you" />
          <div className="page-content-video-list-grid">
            {data?.content?.listVideo?.map((a) => (
              <CardVideo data={a} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
