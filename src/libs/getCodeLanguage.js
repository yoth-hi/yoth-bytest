export default function () {
  const { cookies, headers } = require("next/headers");
  const headersList = headers();
  const storeCookies = cookies();
  return storeCookies.get("language") || parseLanguagePreferences(headersList.get("Accept-Language"))[0]?.code;
}
function parseLanguagePreferences(preferences) {
  const languageArray = preferences.split(",").map((item) => {
    const [code, priority] = item.trim().split(";q=");
    return { code, priority: parseFloat(priority) || 1 };
  });

  return languageArray;
}

 