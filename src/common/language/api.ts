import { languageOptions } from "@language/constants";

import { LanguageOptions } from "./types";

export type LanguageOptionsResponse = LanguageOptions;

export const listLanguages = async (): Promise<LanguageOptionsResponse> => {
  return languageOptions;
  // await get<languageOptionsResponse, {}>("/lang").then(checkUnauthorized);
};
