"use client";import Title from "../../components/string";
import Btn from "../../components/button_root";
import { t } from "../../libs/transition";
import "./styles.css"
export default function ({ children }) {
  return (
    <div>
      <div>
        <div>
          <Title title={t("Settings")}/>
        </div>
        <div>
       <Btn arial-label={t("")} root={"div"}><span>{t("")}</span></Btn>
       <Btn arial-label={t("")} root={"div"}><span>{t("")}</span></Btn>
       <Btn arial-label={t("")} root={"div"}><span>{t("")}</span></Btn>
       <Btn arial-label={t("")} root={"div"}><span>{t("")}</span></Btn>
        </div> 
      </div>
      <div>{children}</div>
    </div>
  );
}
