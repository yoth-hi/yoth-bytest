import SearchIcon from "./icons/SearchIcon";
export default function () {
  const Trass = {
    search: "Pesquisar",
  };
  
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
            placeholder={Trass.search}
            //  onChange={onKeywordChange}
            //  onKeyUp={onKeywordUp}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            name="search_query"
            tabIndex="0"
            type="text"
            spellCheck="false"
            aria-label={Trass.search}
          />
          <div className="submit">
            <button className="submit-btn">
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
