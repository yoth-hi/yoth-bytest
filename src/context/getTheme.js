"use client";
export default function (isThemeSet) {
  function prefersDarkMode(){var e=window.CSS&&window.CSS.supports.bind(window.CSS)||window.supportsCSS;return!!(!!e&&(e("--f:0")||e("--f",0)))&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}
  return ""
}
