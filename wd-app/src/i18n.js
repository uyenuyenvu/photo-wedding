import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost = "http://localhost:5173";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "jp",
    lng: "jp",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export default i18n;
