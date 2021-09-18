import { action, makeObservable, observable } from "mobx";

import { AppLanguage } from "@common/language";

export type LanguagePersistence = Pick<Language, "language">;

export class Language {
  language: string = "en";

  constructor() {
    makeObservable(this, {
      language: observable,
      setLanguage: action.bound,
      export: action.bound,
      import: action.bound,
      clearSession: action.bound,
    });
  }

  setLanguage(language: string) {
    AppLanguage.locale = language;
    this.language = language;
  }

  clearSession() {}

  export(): LanguagePersistence {
    return {
      language: this.language,
    };
  }

  import({ language }: LanguagePersistence) {
    this.language = language;
  }
}
