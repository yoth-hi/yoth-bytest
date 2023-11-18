const linguagems = {
  en: {
    See_more: "See more",
    Last: "Last",
    Channels_you_followed: "Channels you followed",
    Home: "Home",
    Reels: "Reels",
    Following: "Following",
    Explore: "Explore",
    Lives: "Lives",
    Menu: "Menu",
    Go_to_homepage: "Go to homepage",
    Notifications: "Notifications",
    Recommended: "Recommended",
    Gaming: "Gaming",
    Close: "Close",
    Channel: "Channel",
    Channels: "Channels",
    Search: "Search",
    Your_channel: "Your channel",
    Theme: "Theme",
    Logout: "Logout",
    Language: "Language",
    Settings: "Settings",
    Seed_feedback: "Seed feedback",
    Light: "Light",
    Dark: "Dark",
    Login: "Login",
    System_default: "System default",
  },
};
export const t = function (label, values = {}) {
  const linguagem = getLing(); // en, pt, pt-bt, ja, ...
  const labelValue = capitalize(label);
  return linguagems[linguagem]?.[labelValue] || "%?";
};

export default linguagems;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getLing() {
  var tom = { en: "en", "en-US": "en" };
  var language = "en";
  try {
    language =
      getCookies("language") ||
      navigator.language?.replace(/^(\S+)-\S+$/, "$1");
  } catch (erro) {
    language = "en";
  }
  return tom[language] || "en";
}
var getCookies = function (key) {
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
  }
  return key ? cookies[key] : cookies;
};
