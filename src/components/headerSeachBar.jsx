"use client";
import SearchIcon from "./icons/SearchIcon";
import BackIcon from "./icons/ArrowLeft";
import { t } from "../libs/transition";
import Button from "./button_root";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function ({ qs }) {
  const router = useRouter();
  const [isOpenMb, setOpenMb] = useState(false);
  const onKeywordUp = function () {};
  const onKeywordChange = function () {};
  useEffect(() => {
    var body = document.body;
    if (isOpenMb) {
      body.setAttribute("search", "");
    } else {
      body.removeAttribute("search");
    }
  }, [isOpenMb]);
  return (
    <>
      <div className="search-buttom">
        <Button onClick={() => setOpenMb(!isOpenMb)} aria-label={t("Search")}>
          <div className="icon">
            {isOpenMb?<BackIcon />:<SearchIcon />}
          </div>
        </Button>
      </div>
      <div className={"search-bar"}>
        <div className={"container"}>
          <div className="icon" id="search-icon-hover">
            <SearchIcon />
          </div>
          <form
            action="/results"
            onSubmit={(event) => {
              event.preventDefault();
              if (event.target[0].value) {
                var t =
                  "/results?search_query=" +
                  encodeURIComponent(event?.target[0].value);
                router.push(t);
              }
            }}
            className=" search-bar-form"
          >
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
              aria-label={t("Search")}
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
    </>
  );
}
