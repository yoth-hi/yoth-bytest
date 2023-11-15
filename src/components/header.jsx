import Link from "next/link";
import ProfileMenu from "./headerProfileMenu";
import Search from "./headerSeachBar";
import Button from "./Button";
import Notification from "./icons/Notification";
import MenuBtn from "./MenuBtn";

const Btns = function () {
  return (
    <>
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
          Yoth
        </Link>
      </div>
      <Search />
      <div className="desktop-layout-end">
        <Btns />
        <ProfileMenu />
      </div>
    </div>
  );
}
