import { action, entries, makeObservable, observable, toJS } from "mobx";

import { Store } from "@src/application";
import { StoreState } from "@src/application/store";

import { BaseStore } from "@common/store";
import Loadable from "@misc/loadable";

import { getStoreKey } from "./misc";

export class PersistenceStore implements BaseStore<void> {
  shouldPersist = false;
  importing = new Loadable();
  exporting = new Loadable();

  constructor() {
    makeObservable(this, {
      importing: observable,
      exporting: observable,
      importStores: action.bound,
      exportStores: action.bound,
      clearSession: action.bound,
      import: action.bound,
      export: action.bound,
    });
  }

  importStores(force = false) {
    if (!force && !this.importing.mustLoad) {
      return;
    }
    const stores = Store.store.stores;
    this.importing.setLoading();
    const persistentStores = toJS(
      entries(stores)
        .filter(([_, store]) => store.shouldPersist)
        .map(([name]) => [getStoreKey(name), name]),
    );

    // Generate reverse key-name mapping for easier reference
    const keyToName = new Map<string, keyof StoreState>(persistentStores as [string, keyof StoreState][]);

    persistentStores.map(([key]) => {
      const currentKeyValue = localStorage.getItem(key);
      if (currentKeyValue) {
        const storeRepresentation = [keyToName.get(key), JSON.parse(currentKeyValue)] as [keyof StoreState, any];
        stores[storeRepresentation[0]].import(storeRepresentation[1]);
      }
    });
    this.importing.setLoaded();
  }

  exportStores() {
    if (this.exporting.loading) {
      return;
    }
    this.exporting.setLoading();

    const data = toJS(
      entries(Store.store.stores)
        .filter(([_, store]) => store.shouldPersist)
        .map(([name, store]) => [getStoreKey(name), JSON.stringify(store.export())]),
    );

    data.map((value) => {
      localStorage.setItem(value[0], value[1]);
    });
    this.exporting.setLoaded();
  }

  clearSession() {}

  export() {}

  import(_: void) {}
}

export default () => new PersistenceStore();
