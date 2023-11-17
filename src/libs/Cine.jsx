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
  const interval = setInterval(() => {
    _.canvas[1]?.context?.clearRect(0, 0, 1000, 1000);
    _.canvas[1]?.context?.drawImage(
      video,
      config.width / 2 - config.res / 2,
      config.height / 2 - config.res / 2,
      config.res,
      config.res * 1.07
    );
    _.canvas[1].canvas.style.opacity = "";
    _.canvas[1].context.filter = "blur(6px)";
    //    _.canvas[0]?.context?.clearRect(0, 0, 1000, 1000);
    _.canvas[0]?.context?.drawImage(
      _.canvas[1]?.canvas,
      config.width,
      config.height
    );
  }, 60);
  const a = document.querySelector("#cinematic");
  a?.appendChild?.(_.canvas[0]?.canvas);
  a?.appendChild?.(_.canvas[1]?.canvas);
  return {
    clear() {
      a?.removeChild?.(_.canvas[0]?.canvas);
      a?.removeChild?.(_.canvas[1]?.canvas);
      clearInterval(interval);
    },
  };
}
