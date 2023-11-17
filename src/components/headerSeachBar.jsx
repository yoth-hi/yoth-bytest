import SearchIcon from "./icons/SearchIcon";
import { t } from "../libs/transition";
export default function () {
  const onKeywordUp = function () {};
  const onKeywordChange = function () {};
  return (
    <div className={"search-bar"}>
      <div className={"container"}>
        <div className="icon" id="search-icon-hover">
          <SearchIcon />
        </div>
        <form action="/results" className=" search-bar-form">
          <input
            placeholder={t("Search")}
            //  onChange={onKeywordChange}
            //  onKeyUp={onKeywordUp}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            name="search_query"
            tabIndex="0"
            type="text"
            spellCheck="false"
          />
          <div className="submit">
            <button className="submit-btn" aria-label={t("Search")}>
              <div className="icon">
                <SearchIcon />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
