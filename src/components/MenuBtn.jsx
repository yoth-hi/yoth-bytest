"use client";
import Button from "./Button";
import { useState, useEffect } from "react";
import { t } from "../libs/transition";
export default function () {
  const [isOpen, setOpen] = useState(false);
  const Clock = function () {
    setOpen(!isOpen);
  };
  useEffect(() => {
    const body = document?.body;
    if (isOpen) {
      body.setAttribute("exped", "true");
    } else {
      body.removeAttribute("exped");
    }
  }, [isOpen]);
  return (
    <Button
      aria-label={t("Menu")}
      icon={
        <svg height="24" viewBox="0 -960 960 960" width="24">
          <path d="M160-269.231v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.769v-40h640v40H160Z" />
        </svg>
      }
      onClick={Clock}
      className="button-menu"
    />
  );
}
