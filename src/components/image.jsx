"use client";
import { useEffect, memo, useState } from "react";
import Image from "next/image";

export default memo(function ({ classRoot, loadingSkeleton, alt, src, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const [Stated, setStated] = useState(true);
  //  const _rest = loaded ? { ...rest, loaded: "" } : rest;
  useEffect(() => {
  //  setStated(true);
  }, []);
  return (
    <div rounded={rest.rounded} className={["core-image", classRoot].join(" ")+(loaded?"":" "+loadingSkeleton)}>
     {Stated
        ? src && (
            <img
              {...rest}
              src={src}
              style={{ opacity: loaded ? "1" : "1" }}
              onLoad={(e) => setStated(true)}
              onError={(e) => setStated(false)}
              alt={alt || rest["aria-label"] ||"YOTH"}
            />
          )
      : ""}
    </div>
  );
})