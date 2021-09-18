import en from "./locales/en";
import hi from "./locales/hi";
import { LanguageOptions, Translations } from "./types";

export const languageOptions: LanguageOptions = [
  {
    key: "en",
    text: "English",
  },
  {
    key: "hi",
    text: "हिंदी",
  },
];

export const translations: Translations = { en, hi };
