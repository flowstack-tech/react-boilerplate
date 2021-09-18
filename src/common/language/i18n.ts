import i18n from "i18n-js";

import { translations } from "./constants";

i18n.defaultLocale = "en";

i18n.fallbacks = true;

i18n.translations = translations;

export default i18n;
