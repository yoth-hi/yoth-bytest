const VideoPreview = function (props) {
  return (
    <div>
      <RenderOfflineBox enableShareBtn />
    </div>
  );
};
const RenderOfflineBox = function (props) {
  const { enableShareBtn } = props || {};
  return (
    <div
      className={`placeholder-container ${
        enableShareBtn ? "" : "sharp-border-bottom"
      }`}
    >
      <div className="offline-banner">
        <div className="offline-banner-title">{"label_no_preview"}</div>
      </div>
    </div>
  );
};
export default function (props) {
  return (
    <>
      <VideoPreview {...props} />
    </>
  );
}
