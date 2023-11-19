import Title from "../../components/string";
import { t } from "../../libs/transition";
export default function ({ children }) {
  return (
    <div>
      <div>
        <div>
          <Title title={t("Settings")}/>
        </div>
        <div>
        ..
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
