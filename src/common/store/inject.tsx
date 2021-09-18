import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreState } from "@src/application/store";

import StoreContext from "@contexts/store";
import { copyStaticProperties } from "@misc/hoc";
import { eliminateUndefinedProps } from "@misc/objects";

type Injector<P extends {} = {}, E extends {} = {}> = (component: React.FC<P & E>) => React.FC<P & Partial<E>>;

type StoreStateInject = { store: StoreState };

// Inject props from store using a function to extract the required fields.
// Use typedInject if only P can be provided and E must be inferred
// (TS does not support partial inference yet).
export const inject =
  <P extends {}, E extends {}>(extractor: (root: StoreState) => E): Injector<P, E> =>
  (component) => {
    const Component = observer(component);
    const InjectedComponent: React.FC<P & Partial<E>> = (props) => {
      const store = useContext(StoreContext)!;
      const newProps = eliminateUndefinedProps(props);
      const extractedProps = extractor(store.stores);

      return <Component {...extractedProps} {...newProps} />;
    };

    InjectedComponent.displayName = Component.displayName;
    copyStaticProperties(Component, InjectedComponent);
    return observer(InjectedComponent);
  };

// Use this to inject all the features stores. Never modify the features stores.
// If you want to access the actions in root store instead, use Store.store.
export const injectStore = <P extends {}>(component: React.FC<P & StoreStateInject>) =>
  inject<P, StoreStateInject>((root) => ({ store: root }))(component);

// Use this to inject features stores. Is just a shorter method to avoid having
// to define a function to extract the features stores.
export const injectFeatureStores = <
  P extends {},
  T extends keyof StoreState = keyof StoreState,
  E extends { [K in T]: StoreState[K] } = { [K in T]: StoreState[K] },
>(
  ...featureNames: T[]
): Injector<P, E> =>
  inject<P, E>((root) =>
    featureNames.reduce((obj, feature) => {
      obj[feature] = root[feature] as any;
      return obj;
    }, {} as E),
  );

// Use this when you want to specify what props to expect (and accept) from the
// parent, but don't want to specify what are injected. Is just a wrapper over
// inject to support inferring the injected props using the method provided.
export const typedInjector = <P extends {}>() => ({
  inject: <E extends {}>(extractor: (root: StoreState) => E) => inject<P, E>(extractor),
  injectFeatureStores: <T extends keyof StoreState = keyof StoreState>(...featureNames: T[]) =>
    injectFeatureStores<P, T>(...featureNames),
});
