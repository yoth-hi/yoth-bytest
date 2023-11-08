"use client";
export default function ({ popout, children, ...rest }) {
  return (
    <button {...rest} className={`${rest.className} popout-active`}>
      {children}
      {popout&&<div className="btn-popout">
        <span className="text-string">{popout}</span>
      </div>}
    </button>
  );
}
