"use client";import Btn from "./button_root";
const R = function ({ type, ...rest }) {
  return type == "link" ? <a {...rest} /> : <button {...rest} />;
};
const Button = function ({ title, href, target, type, className = "", icon }) {
  return (
    <Btn
      root={R}
      href={href}
      target={target}
      className={"button-text " + className}
      type={type}
    >
      <div className="button-text-container">
        {icon && <div className="button-text-icon">{icon}</div>}
        <div style={icon ? null : { marginLeft: "14px" }}>{title}</div>
      </div>
    </Btn>
  );
};
export default Button;
