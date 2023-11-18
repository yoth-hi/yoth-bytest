import Button from "./Button";
import Link from "next/link";
import Title from "./string";
import Image from "./image";
import MainNavigations from "./sidebar/mainNavigations";
import { t } from "../libs/transition";

const Avatar = function ({ profile, name }) {
  const isLive = Math.random() < 0.2;
  return (
    <div className="card-avatar">
      <Link href="/" className="card-avatar-endpoint">
        <div className="card-avatar-contener">
          <Image
            width="24"
            height="24"
            classRoot="card-avatar-image"
            src="https://yt3.ggpht.com/PTiLCyqs4-z3-ndytSzw4EcA3fyu5a5IM1dGAxWUah5RlogLLGlDyk_AjgzlkUXnbur-CvML5w=s88-c-k-c0x00ffffff-no-rj"
          />
          <div className="card-avatar-info">
            <span>Aruan</span>
            {isLive && (
              <>
                <div className="dot-red" />
                <div className="text-live">Live</div>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function () {
  return (
    <div className="sidebar">
      <div className="guide-section">
        <MainNavigations />
      </div>
      <div className="guide-section">
        <div className="guide-section-split-line" />
        <Title
          line-shot=""
          title={t("Explore")}
          semibold=""
          className="guide-section-title"
        />
        <div>
          <Items
            title={t("Gaming")}
            icon={
              <svg
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                focusable="false"
              >
                <path d="M189-180q-53.077 0-89.808-36.846Q62.462-253.692 62-307.319q0-7.912.615-15.373.616-7.462 2.616-15.693l84-336q12.263-47.134 49.928-76.374Q236.824-780 285-780h390q48.176 0 85.841 29.241 37.665 29.24 49.928 76.374l84 336q2 8.231 3.116 16.193Q899-314.231 899-306.319q0 53.627-37.346 89.973T771.052-180q-36.667 0-67.283-19.308-30.615-19.307-47.077-51.923L627.923-310q-7.308-15-21.923-22.5-14.615-7.5-31-7.5H385q-16.186 0-30.901 7.308-14.714 7.307-22.022 22.692l-28.769 58.769q-15.693 33.385-46.834 52.308Q225.332-180 189-180Zm3.208-40q24.177 0 44.677-13.077t30.807-34.692l28-57.77q12.629-25.58 37.046-40.021Q357.154-380 385-380h190q28.314 0 52.465 15.308 24.15 15.307 37.843 39.923l28 57q10.307 21.615 30.807 34.692Q744.615-220 769.327-220q36.417 0 62.43-24.654Q857.769-269.308 858-305q0-2.077-2.769-23.615l-84-335q-8.539-33.154-35.308-54.77Q709.154-740 675-740H285q-34.977 0-61.835 21.615-26.857 21.616-34.396 54.77l-84 335Q103.539-324.154 102-306q0 36.485 26.654 61.242Q155.308-220 192.208-220ZM540-529.231q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm0 160q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm-360.036 56.923q7.651 0 12.69-5.012 5.038-5.013 5.038-12.68v-52.308H410q7.667 0 12.68-5.002 5.012-5.003 5.012-12.654t-5.012-12.69q-5.013-5.038-12.68-5.038h-52.308V-630q0-7.667-5.002-12.68-5.003-5.012-12.654-5.012t-12.69 5.012q-5.038 5.013-5.038 12.68v52.308H270q-7.667 0-12.68 5.002-5.012 5.003-5.012 12.654t5.012 12.69q5.013 5.038 12.68 5.038h52.308V-490q0 7.667 5.002 12.68 5.003 5.012 12.654 5.012ZM480-480Z" />
              </svg>
            }
            href="/gaming"
          />
          <Items
            title={t("Lives")}
            icon={
              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
                <g>
                  <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
                </g>
              </svg>
            }
            href="/lives"
          />
        </div>
      </div>
      <div className="guide-section">
        <div className="guide-section-split-line" />
        <Title
          line-shot=""
          title={t("Channels")}
          semibold=""
          className="guide-section-title"
        />
        <div className="guide-section-list">
          <Avatar /><Avatar /><Avatar /><Avatar /><Avatar /><Avatar />
          <Avatar /><Avatar /><Avatar /><Avatar /><Avatar /><Avatar />
          <Avatar /><Avatar /><Avatar /><Avatar /><Avatar /><Avatar />
          <Avatar /><Avatar /><Avatar /><Avatar /><Avatar /><Avatar />
          <Avatar /><Avatar /><Avatar /><Avatar /><Avatar /><Avatar />
          </div>
      </div>
      <div className="hover-item"></div>
    </div>
  );
}
//link = path
const Items = function ({ href = "", newness, icon, title, imageUrl }) {
  return (
    <div>
      <Link href={href} aria-label={title}>
        <div className="guide-section-item-content">
          <div className="guide-section-item-icon">{icon}</div>
          <Image src={imageUrl} />
          <Title title={title} className="guide-section-item-title" />
          {newness && (
            <div
              className={"dot-newness dot-newness-" + newness}
              type={newness}
            />
          )}
        </div>
      </Link>
    </div>
  );
};
