"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import Image from "./image";
import { t } from "../libs/transition";
export default function () {
  const [User, onLogin] = useState({
    uuId: 0,
    image: "/",
  });
  const [IsOpen, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!IsOpen);
        }}
        className="header-profile-panel"
      >
        <div className="header-profile-panel-image">
          <Image alt={"image profile"} width="40" height="40px" src="https://yt3.ggpht.com/ytc/APkrFKaZ9ywbCkWpJvI0lDbEL396FOaX3S4pW7KEe98Ui3YRZX6D1FRyqh3qg1Oorrzh=s88-c-k-c0x00ffffff-no-rj" />
        </div>
      </div>
      {IsOpen ? createPortal(<Menu />, document.body) : null}
    </>
  );
    //  <Menu />
}
const Menu = function ({ User }) {
  const Array_Items_Menu_user = [
    {
      name: t("Your_channel"),
      endpoint: "/",
      type: "route",
      icon: null,
    },
    {
      name: t("Logout"),
      type: "route",
      endpoint: "/logout",
      icon: null,
    },
    {
      name: t("Theme"),
      type: "modal",
      toMadal: "theme",
      icon: null,
    },
    {
      name: t("Language"),
      type: "modal",
      toMadal: "Language",
      icon: null,
    },
    {
      name: t("Settings"),
      type: "route",
      endpoint: "/settings",
      icon: null,
    },
    {
      name: t("Seed_feedback"),
      type: "modal",
      madal: "FeedBack",
      icon: null,
    },
  ];
  const [T, setQ] = useState({ name: null, items: [] });
  useEffect(() => {
    setQ({ name: null, items: Array_Items_Menu_user });
  }, []);
  const sub_menu = {
    theme__Select:0,
    theme: [
      {
        name: t("System_default"),
        type: "route_reload",
        endpoint: "?theme=0",
        icon: null,
      },
      {
        name: t("Light"),
        type: "route_reload",
        endpoint: "?theme=1",
        icon: null,
      },
      {
        name: t("Dark"),
        type: "route_reload",
        endpoint: "?theme=2",
        icon: null,
      },
    ],
  };
  return (
    <div className="modal-menu-user">
      <div className="modal-menu-user-top"> </div>
      <div className="modal-menu-user-list-item">
        {T.name && (
          <button
            className="profile-menu-item back"
            onClick={() => {
              setQ({ name: null, items: Array_Items_Menu_user });
            }}
            aria-label={"menu"}
          >
            <div className="profile-menu-item-icon">{"<"}</div>
            <div className="profile-menu-item-text">{t("Theme")}</div>
            <div className="profile-menu-item-icon"></div>
          </button>
        )}
        {T.items.map((_) => (
          <BTR
            aria-label={_.name}
            href={_.endpoint}
            type={_.type || ""}
            onClick={() => {
              if (_.type === "modal" && _.toMadal) {
                setQ(
                  sub_menu[_.toMadal]
                    ? { name: _.name, items: sub_menu[_.toMadal] }
                    : {
                        name: null,
                        items: Array_Items_Menu_user,
                      }
                );
              }
            }}
            className="profile-menu-item"
          >
            <div className="profile-menu-item-icon">{_.icon}</div>
            <div className="profile-menu-item-text">{_.name}</div>
            {_.toMadal && (
              <div className="profile-menu-item-icon iconMore">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
                </svg>
              </div>
            )}
          </BTR>
        ))}
      </div>
    </div>
  );
};
function BTR({ type, ...rest }) {
  return type === "route" ? (
    <Link {...rest} />
  ) : type === "route_reload" ? (
    <a {...rest} />
  ) : (
    <button {...rest} />
  );
}
