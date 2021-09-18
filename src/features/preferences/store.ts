import { action, makeObservable, observable } from "mobx";

import { BaseStore } from "@common/store";

import { Language, LanguagePersistence } from "./features/language";
import { PreferredTheme } from "./types";

type PreferencesStorePersistence = {
  theme: PreferredTheme;
  language: LanguagePersistence;
};

export class PreferencesStore implements BaseStore<PreferencesStorePersistence> {
  theme: PreferredTheme = "light";
  language: Language = new Language();
  shouldPersist = true;

  constructor() {
    makeObservable(this, {
      theme: observable,
      language: observable,
      clearSession: action.bound,
      setTheme: action.bound,
      export: action.bound,
      import: action.bound,
    });
  }

  clearSession() {}

  setTheme(theme: PreferredTheme) {
    this.theme = theme;
  }

  export(): PreferencesStorePersistence {
    return {
      theme: this.theme,
      language: this.language.export(),
    };
  }

  import({ theme, language }: Partial<PreferencesStorePersistence>) {
    this.theme = theme ?? this.theme;
    if (language) {
      this.language.import(language);
    }
  }
}

export default () => new PreferencesStore();
