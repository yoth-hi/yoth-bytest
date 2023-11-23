export default function ({ text }) {
  if(!text) return;
  text=text
    .replace(/\<|\>/g,"")
    .replace(/\n/g,"<br/>")
  return (
    <div className="description-text">
      <div
        className="string-text"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
}
