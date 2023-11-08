import Link from "next/link";
import ProfileMenu from "./headerProfileMenu";
import Search from "./headerSeachBar";
import Button from "./Button";
import Notification from "./icons/Notification";
import MenuBtn from "./MenuBtn";

const Btns = function () {
  return (
    <>
      <Button icon={<Notification />} aria-label={"nodt"} />
      <Button icon={<Notification />} aria-label={" nad "} />
    </>
  );
};

export default function ({ bg }) {
  return (
    <div className={`desktop-header ${bg}`}>
      <div className="desktop-layout-start">
        <MenuBtn />
        <Link className="logo" href="/" aria-label="go to homepage">
          <img
            className="brand dark:invert"
            src={"./next.svg"}
            alt="site logo"
          />
        </Link>
      </div>
      <div class="header-center">
        <nav>
          <ul>
            <li class="current">
              <Link aria-label="goto homepage" href="/">
                {/*label_header_home*/}
                Home
              </Link>
            </li>
            <li class="">
              <Link aria-label="goto browse page" href="/browse">
                {/*label_header_browse*/}
                Browse
              </Link>
            </li>
            <li class="">
              <Link aria-label="goto following page" href="/following">
                {/*common_following*/}
                following
              </Link>
            </li>
            <li class="">
              <Link aria-label="goto games page" href="/games">
                {/*common_games*/}
                Games
              </Link>
            </li>
            <li class="">
              <Link aria-label="goto clip campaigns page" href="/clips">
                {/*common_clips*/}
                Clips
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
      </div>
      <div className="desktop-layout-end">
        <Btns />
        <ProfileMenu />
      </div>
    </div>
  );
}
