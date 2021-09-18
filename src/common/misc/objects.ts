import { entries, isObservable, observable } from "mobx";

type DefinedProps<T extends {}> = {
  [K in keyof T]: T[K] extends undefined ? never : T[K];
};

const _eliminateUndefinedObservableProps = <T extends {}>(obj: T): DefinedProps<T> =>
  observable(
    Object.assign(
      {},
      ...entries(obj)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => ({ [k]: v })),
    ),
  );

const _eliminateUndefinedProps = <T extends {}>(obj: T): DefinedProps<T> => {
  return Object.assign(
    {},
    ...Object.entries(obj)
      .filter(([_, v]) => v !== undefined)
      .map(([k, v]) => ({ [k]: v })),
  );
};

export const eliminateUndefinedProps = <T extends {}>(obj: T) => {
  return isObservable(obj) ? _eliminateUndefinedObservableProps(obj) : _eliminateUndefinedProps(obj);
};
