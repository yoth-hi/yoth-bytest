"use client";
import { useEffect, useState } from "react";
export default function ({ classRoot, alt, src, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const [Stated, setStated] = useState(false);
  //  const _rest = loaded ? { ...rest, loaded: "" } : rest;
  useEffect(() => {
    setStated(true);
  }, []);
  return (
    <div rounded={rest.rounded} className={["core-image", classRoot].join(" ")}>
      {Stated
        ? src && (
            <img
              {...rest}
              src={src}
              style={{ opacity: loaded ? "1" : "0" }}
              onLoad={(e) => setLoaded(true)}
              onError={(e) => setLoaded(false)}
              alt={alt || "image no asesibility"}
            />
          )
        : ""}
    </div>
  );
}
