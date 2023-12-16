"use client";
import React, { useState, useEffect, memo, useRef } from "react";

export default memo(function ({ popout, root, children, ...rest }) {
  const fill = useRef(null);
  const stroke = useRef(null);
  const Button = (a) => {
    var T;
    root == "div" ? (root = (a) => <div {...a} />) : null;
    if ((T = root)) {
      return <T {...a} />;
    }
    return <button {...a} />;
  };
  const hHover = function () {
    fill.current.style.opacity = 0.1;
    stroke.current.style.opacity = 0;
  };
  const unhHover = function () {
    stroke.current.style.opacity = 0.1;
    fill.current.style.opacity = 0;
    setTimeout(function () {
      stroke.current.style.opacity = 0;
    }, 200);
  };
  return (
    <Button
      {...rest}
      onTouchStart={hHover}
      onMouseStart={hHover}
      onTouchMove={hHover}
      onMouseMove={hHover}
      onTouchLeave={unhHover}
      onMouseLeave={unhHover}
      onMouseOut={unhHover}
      onMouseCancel={unhHover}
      onTouchEnd={unhHover}
      onMouseUp={unhHover}
      className={`button-with-interaction ${rest.className} popout-active`}
    >
      <>{children}</>
      <>
        {popout && (
          <div className="btn-popout">
            <span className="text-string">{popout}</span>
          </div>
        )}
        <div className="btn-interaction">
          <div className="btn-interaction-stroke" ref={stroke }></div>
          <div className="btn-interaction-fill" ref={fill}></div>
        </div>
      </>
    </Button>
  );
});
