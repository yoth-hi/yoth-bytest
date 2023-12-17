//"use client";
import Title from "../../components/string";
import Btn from "../../components/button_root";
import { t } from "../../libs/transition";
import "./styles.css";

export default function ({ children }) {
  return (
    <div className="page-setting">
      <div className="page-setting-menu">
        <div className="page-setting-menu-title-page">
          <Title title={t("Settings")} semibold="" large=""/>
        </div>
        <div>
          <Btn arial-label={t("")} root={"div"} className="btn-setting-menu">
            <span className="btn-setting-menu-string">{t("")}</span>
          </Btn>
          <Btn arial-label={t("")} root={"div"} className="btn-setting-menu">
            <span className="btn-setting-menu-string">{t("")}</span>
          </Btn>
          <Btn arial-label={t("")} root={"div"} className="btn-setting-menu">
            <span className="btn-setting-menu-string">{t("")}</span>
          </Btn>
          <Btn arial-label={t("")} root={"div"} className="btn-setting-menu">
            <span className="btn-setting-menu-string">{t("")}</span>
          </Btn>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
