import "./styles.css";
export default function S({ text, _ref, className = "" }: any) {
  return (
    <div id="spin" ref={_ref} className={"" + className}>
      <div className="spin-wrapper">
        <div className="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="1em"
            height="1em"
          >
            <circle
              r="80"
              cx="100"
              cy="100"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {text && <span className="spin-text">{text}</span>}
      </div>
    </div>
  );
}
