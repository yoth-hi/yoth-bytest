"use client";
import Link from "next/link"
export default function ({ icon, text, type, subtitle, ...rest }) {
  const props = {
    ...rest,

    className: (rest.className || "") + " btn-simple",
  };
  const Ch =
    type === "link"
      ? (props) => <Link {...props} />
      : (props) => <button {...props} />;
  return (
    <Ch {...props}>
      <div className="btn-simple-container">
        <div className="btn-simple-icon">{icon}</div>
        <div className="btn-simple-title">
          <div className="title">{text}</div>
          <div>{subtitle}</div>
        </div>
      </div>
    </Ch>
  );
}
