"use client";
import React, { useState, useEffect, memo,useRef } from "react";

export default memo(function ({ popout, root, children, ...rest }) {
  const [isMovein, hover] = useState(false);
  const [_isMovein, _hover] = useState(false);
  const Button = (a) => {
    var T;
    root == "div" ? (root = (a) => <div {...a} />) : null;
    if ((T = root)) {
      return <T {...a} />;
    }
    return <button {...a} />;
  };
  const hHover = function () {
    hover(true);
  };
  const unhHover = function () {
    _hover(true);
    setTimeout(function () {
      hover(false);
      _hover(false);
    }, 210);
  };
  return (
    <Button
      {...rest}
      onTouchMove={hHover}
      onMouseMove={hHover}
      onTouchLeave={unhHover}
      onMouseLeave={unhHover}
      onMouseOut={unhHover}
      onMouseCancel={unhHover}
      onTouchEnd={unhHover}
      onMouseUp={unhHover}
      className={`${rest.className} popout-active`}
    >
      {popout && (
        <div className="btn-popout">
          <span className="text-string">{popout}</span>
        </div>
      )}
      <div className="btn-interaction">
        <div
          className="btn-interaction-stroke"
          style={{ opacity: _isMovein ? 0.2 : 0 }}
        ></div>
        <div
          className="btn-interaction-fill"
          style={{ opacity: isMovein ? 0.1 : 0 }}
        ></div>
      </div>
      <>{children}</>
    </Button>
  );
})
