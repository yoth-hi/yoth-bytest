const linguagems= {
  "en":{
    "See_more":"See more",
    "Last":"Last",
    "Channels_you_followed":"Channels you followed",
    "Home":"Home",
    "Reels":"Reels",
    "Following":"Following",
    "Explore":"Explore",
    "Lives":"Lives",
    "Menu":"Menu",
    "Go_to_homepage":"Go to homepage",
    "Notifications":"Notifications",
    "Recommended":"Recommended",
    "Gaming":"Gaming",
    "Close":"Close",
    "Channel":"Channel",
    "Channels":"Channels",
    "Search":"Search",
    "Your_channel":"Your channel",
    "Theme":"Theme",
    "Logout":"Logout",
    "Language":"Language",
    "Settings":"Settings",
    "Seed_feedback":"Seed feedback",
    "Light":"Light",
    "Dark":"Dark",
    "System_default":"System default",
  }
}
export const t = function (label,values={}) {
  const linguagem = "en"
  const labelValue = capitalize(label);
  return linguagems[linguagem]?.[labelValue]||"%?"
}

export default linguagems;

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}