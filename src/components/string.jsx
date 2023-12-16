export default function (props) {
  const { title = "", className = "" , dir = "auto" } = props;
  return (
    <div {...props} className={"core-string " + (className)}>
      <div className="core-formate-string">
        <span
          dir={dir}
          aria-label={title || props["aria-label"]}
          title={title}
          className="formate-string"
        >
          {title}
        </span>
      </div>
    </div>
  );
}
