import React, { useCallback, useEffect } from "react";

import { typedInjector } from "@common/store";

import LoadingView, { LoadingViewProps } from "./loading-view";

export type PersistStoreProps = LoadingViewProps;

const PersistStore = typedInjector<PersistStoreProps>().injectFeatureStores("persistenceStore")(
  ({ persistenceStore: store, loadingView, children }) => {
    const handleUnload = useCallback(() => {
      store.exportStores();
    }, [store]);

    useEffect(() => {
      store.importStores();
      window.addEventListener("beforeunload", handleUnload);
      return () => {
        window.removeEventListener("beforeunload", handleUnload);
      };
    }, [handleUnload, store]);

    return <LoadingView loadingView={loadingView}>{children}</LoadingView>;
  },
);

export default PersistStore;
