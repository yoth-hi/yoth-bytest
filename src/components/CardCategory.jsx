
import Image from "./image"
import Title from "./string"
export default function () {
  return (
    <div class="card-category">
      <div class="card-category-gamer">
        <ytd-game-details-renderer class="style-scope div" rounded="">
          <a
            class="yt-simple-endpoint focus-on-expand style-scope ytd-game-details-renderer"
            href="/channel/UCmeKFsXZRKgTotHhWDKfUpA/live"
          >
            <Image
              draggable="false"
              height="290"
              width="210"
              className="card-category-image"
              src="//yt3.googleusercontent.com/P0R15-c7gBEU2ZlzHpQyvv2pZbAAuiRCBSfWNczmsQUGOQ3SxqVuC9P44VJvruZJK8jfhGr97w"
            />
            <Title className="card-category-name" title="PUBG Mobile" />
            <Title className="card-category-metadata" title="$1 espectadores assistindo em todo o mundo" small="" formats={["views","138000"]}/>
          </a>
        </ytd-game-details-renderer>
      </div>
      <div id="subscribe-button" class="style-scope div"></div>
    </div>
  );
}
