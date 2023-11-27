"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { t } from "../libs/transition";
import B from "./button_root";
import MenuLogin from "./MenuLogin";
export default function () {
  const [IsMenuLogin, setMenuLogin] = useState(false);
  return (
    <>
      <B
        onClick={() => setMenuLogin(true)}
        className="btn-login"
        aria-label={t("Login")}
      >
        {t("Login")}
      </B>
      {IsMenuLogin
        ? createPortal(
            <MenuLogin close={() => setMenuLogin(false)} />,
            document.body
          )
        : null}
    </>
  );
}
