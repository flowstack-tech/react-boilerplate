import React from "react";

import { typedInjector } from "@common/store";

export type LoadingViewProps = {
  first?: boolean;
  loadingView: React.ReactChild;
  children: React.ReactChild;
};

const LoadingView = typedInjector<LoadingViewProps>().injectFeatureStores("persistenceStore")(
  ({ persistenceStore: store, first = false, loadingView, children }) => {
    return <>{first || !store.importing.loaded ? loadingView : children}</>;
  },
);

export default LoadingView;
