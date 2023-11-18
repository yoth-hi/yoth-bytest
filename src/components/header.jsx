import Link from "next/link";
import ProfileMenu from "./headerProfileMenu";
import Search from "./headerSeachBar";
import Button from "./Button";
import Notification from "./icons/Notification";
import MenuBtn from "./MenuBtn";
import { t } from "../libs/transition";

const Btns = function () {
  return (
    <>
      <Button icon={<Notification />} aria-label={t("Notifications")} />
    </>
  );
};

export default function () {
  return (
    <div className={`desktop-header`}>
      <div className="desktop-layout-start">
        <MenuBtn />
        <Link className="logo" href="/" aria-label={t("Go_to_homepage")+" - "+"yoth"}>
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
