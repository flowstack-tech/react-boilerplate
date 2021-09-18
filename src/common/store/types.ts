export interface BaseStore<T> {
  clearSession: () => void;
  shouldPersist: boolean;
  export: () => T;
  import: (value: Partial<T>) => void;
}
