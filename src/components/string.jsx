export default function ({ title, dir, ...rest }) {
  return (
    <div {...rest} className={"core-string " + (rest.className||"")}>
      <div className="core-formate-string">
        <span
          dir={dir || "auto"}
          aria-label={title || rest["aria-label"]}
          title={title}
          className="formate-string"
        >
          {title}
        </span>
      </div>
    </div>
  );
}
