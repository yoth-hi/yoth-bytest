"use client";
function A({ width, height }) {
  const canvas = document.createElement("canvas");
  canvas.classList.add("cinematic-canvas");
  const context = canvas.getContext("2d");
  canvas.height = height;
  canvas.width = width;
  return { context, canvas };
}
export default function ({ video }) {
  const jst = document.querySelectorAll("#cinematic canvas");
  const config = {
    width: 110,
    height: 75,
    res: 50,
  };
  const _ = {
    canvas: [A(config), A(config), A(config)],
  };
  const a = document.querySelector("#cinematic");
  const interval = setInterval(() => {
    _.canvas[1]?.context?.clearRect(0, 0, 1000, 1000);
    _.canvas[1]?.context?.drawImage(
      video,
      config.width / 2 - config.res / 2,
      config.height / 2 - config.res / 2,
      config.res,
      config.res * 1.0
    );
    _.canvas[1].canvas.style.opacity = "";
    _.canvas[1].context.filter = "blur(6px)";
    //    _.canvas[0]?.context?.clearRect(0, 0, 1000, 1000);
    _.canvas[0]?.context?.drawImage(
      _.canvas[1]?.canvas,
      config.width,
      config.height
    );
    if (a && a.style) {
      if (config.inative) {
        a.style.opacity = 0;
      } else {
        a.style.opacity = 1;
      }
    }
  }, 16);
  a?.appendChild?.(_.canvas[0]?.canvas);
  a?.appendChild?.(_.canvas[1]?.canvas);
  return {
    clear() {
      try {
        a?.removeChild?.(_.canvas[0]?.canvas);
        a?.removeChild?.(_.canvas[1]?.canvas);
        /* code */
      } catch (e) {}
      clearInterval(interval);
    },
  };
}
