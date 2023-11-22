
import Image from "../../components/image";
import Title from "../../components/string";
import Button from "../../components/button_brr";
import CardVideo from "../../components/CardVideo";
import Fetch from "../../service/ApiRest";
import CardChannel from "../../components/cardChannelBox";
import { t } from "../../libs/transition";
export const metadata = {
  title: "Yoth - following"
}
export default async function (props) {
  const data = await Fetch({
    type: "browse",
    context: {
      type: "following",
    },
  });

  return (
    <div className="page-sub">
      <div>
        <div className="page-sub-content">
          <div className="page-content-title">
            <Title title={t("Channels_you_followed")} semibold="" large="" />
            <Button title={t("See_more")} />
          </div>
          <div>
            <div className="channels page-content-video-list-grid">
              {data?.content?.channels?.list?.map?.((t) => (
                <CardChannel
                  data={t}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="page-sub-content">
          <div className="page-content-title">
            <Title title={t("Last")} semibold="" large="" />
            <Button title={t("See_more")} />
          </div>
          <div>
            <div className="page-content-video-list-grid">
              {[]?.map?.((t) => <CardVideo data={t} />) || (
                <>
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                  <CardVideo data={{}} skeleton />
                </>
              )}
            </div>
          </div>
          {(data?.content?.videos?._types || ["", "", ""])?.map((a) => (
            <div className="page-subscriptions-list">
              <div className="page-content-title">
                <Title title={capitalizeFirstLetter(a)} semibold="" large="" />
                <Button title={t("See_more")} />
              </div>
              <div className="page-content-video-list-grid">
                {data?.content?.videos?.[a]?.map((t) => (
                  <CardVideo data={t} />
                )) || (
                  <>
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                    <CardVideo data={{}} skeleton />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//page-watch-primary => scroll
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
