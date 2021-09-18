import { action, computed, makeObservable, observable } from "mobx";

export default class Loadable {
  loading: boolean;
  loaded: boolean;

  constructor(loading = false, loaded = false) {
    this.loading = loading;
    this.loaded = loaded;
    makeObservable(this, {
      loading: observable,
      loaded: observable,
      setLoading: action.bound,
      setLoaded: action.bound,
      setMustLoad: action.bound,
      mustLoad: computed,
    });
  }

  setLoading() {
    this.loading = true;
    this.loaded = false;
  }

  setLoaded() {
    this.loaded = true;
    this.loading = false;
  }

  get mustLoad() {
    return !(this.loading || this.loaded);
  }

  setMustLoad() {
    this.loading = false;
    this.loaded = false;
  }
}
