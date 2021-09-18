import { action, makeObservable, observable, values } from "mobx";

import { StoreConfig } from "@src/features";

export type StoreState = {
  -readonly [K in keyof StoreConfig]: ReturnType<StoreConfig[K]>;
};

export default class Store {
  private static _store?: Store = undefined;
  stores: StoreState;

  constructor(config: StoreConfig) {
    this.stores = Object.keys(config).reduce((stores, key) => {
      const feature = key as keyof StoreState;
      stores[feature] = config[feature]() as any;
      return stores;
    }, {} as StoreState);

    makeObservable(this, {
      stores: observable,
      clearSession: action.bound,
    });
  }

  static get store() {
    if (!this._store) {
      throw new Error("Store is not initialized yet");
    }
    return this._store;
  }

  static createStore(config: StoreConfig) {
    if (this._store) {
      console.warn("Store is already initialized");
    }
    this._store = new Store(config);
  }

  clearSession() {
    values(this.stores).forEach((store) => store.clearSession());
  }
}
