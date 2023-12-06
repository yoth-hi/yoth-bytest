import getCodeLanguage from "./getCodeLanguage";
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
    Send: "Send",
    Search: "Search",
    Your_channel: "Your channel",
    Theme: "Theme",
    Logout: "Logout",
    Language: "Language",
    Settings: "Settings",
    Send_feedback: "Send feedback",
    Light: "Light",
    Dark: "Dark",
    Login: "Login",
    Chat: "Chat",
    System_default: "System default",
    Pause_K: "Pause (K)",
    Play_K: "Play (K)",
    Others: "Others", 
    "*_Views": "* Views",
    "*_K_Views": "*K Views",
    "*_M_Views": "*M Views",
    "*_B_Views": "*B Views",
    "*_T_Views": "*T Views",
    "Search_for_*":"Search for \"*\"",
    "This_video_could_not_be_loaded":"This video could not be loaded"
  },
};
export const t = function (label, values = []) {
  var values_index = 0;
  const linguagem = getLing(); // en, pt, pt-bt, ja, ...
  const labelValue = capitalize(label);
  const text_string = linguagems[linguagem]?.[labelValue] || "%?";
  return text_string.replace(/(\*)/g, function () {
    const _string = values[values_index];
    values_index++;
    return _string;
  });
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
    language = getCodeLanguage();
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
export const formate = (value, type) => {
  var _return;
  switch (type) {
    case "Views":
      var _str_tras = "";
      if (value < 1e3) _str_tras = "*_Views", value=parseInt((value)*100)/100;
      else if (value < 1e6) _str_tras = "*_K_Views", value=parseInt((value/1e3)*100)/100;
      else if (value < 1e9) _str_tras = "*_M_Views", value=parseInt((value/1e6)*100)/100;
      else if (value < 1e12) _str_tras = "*_B_Views", value=parseInt((value/1e9)*100)/100;
      else _str_tras = "*_T_Views", value=parseInt((value/1e12)*100)/100;
      _return = t(_str_tras,[value])
      break;
    default:
      break;
  }
  return _return;
};
