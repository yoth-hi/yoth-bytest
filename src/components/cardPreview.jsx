import Img from "./image";
export default function () {
  "card preview channel";
  return (
    <div className="card-preview-channel">
      <div className="">
        <div className="card-preview-channel-header">
          <div className="">
            <Img src="https://static-cdn.jtvnw.net/jtv_user_pictures/cc2eca81-9d08-4945-bf84-abf8f2f8c65c-profile_image-50x50.png" />
          </div>
          <div>
            <div>[name]</div>
            <div>@[hash]</div>
          </div>
        </div>
        <div>
          <div>[list^row^vídeos]</div>
        </div>
      </div>
    </div>
  );
}
