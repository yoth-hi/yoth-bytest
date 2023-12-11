import Title from "../../../components/string";
import Image from "../../../components/image";
import Button from "../../../components/button_root";
import { t } from "../../../libs/transition";
const data = {
  content:{
    channelContentRender:{
      content:{
        title:"api/channel/name",
        follows:"api/channel/follows",
      }
    }
  }
}
export default function ({ children }) {
  const { title, banner, fw }  = data?.content?.channelContentRender?.content||{};
  return (
    <div
      style={{
        "--banner-img":
          'url("https://yt3.googleusercontent.com/FLIsHcZIy0PbVOc6dBpwgEGPZ5hLkHO7ZOat8uWKhNnAGnRqalyzi4TtGJ3HvGSaqwE1t0OZ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj")',
      }}
    >
      <div className="channel-banner"></div>
      <div className="channel-content">
        <div className="channel-content-infomations">
          <div>
            <Image
              rounded=""
              width="100"
              height="100"
              classRoot="channel-image-profile"
              src="https://yt3.googleusercontent.com/ytc/APkrFKbHM_7-bM4Z6anXpUhIppiSySJ__Flog8D1RRln=s176-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="channel-content-metadata">
            <div>
              <Title large="" semibold="" title={title} />
            </div>
            <div className="channel-content-metadata-count">{fw} follow</div>
          </div>
          <div>
            <Button className="channel-content-btn">Follow/Subscriber</Button>
          </div>
        </div>
      </div>
      <div className="channel-content">{children}</div>
    </div>
  );
}
