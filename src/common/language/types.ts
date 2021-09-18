export type LanguageOption = {
  key: string;
  text: string;
};

export type LanguageOptions = LanguageOption[];

export type Locale = {
  [key: string]: { [key: string]: { [key: string]: string } };
};

export type Translations = {
  [key: string]: Locale;
};
