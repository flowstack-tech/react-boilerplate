import React from "react";

import { stores } from "@src/features";

import { StoreProvider } from "@contexts/store";

import Store from "./store";
import ThemedApp from "./themed-app";

const App = () => {
  return (
    <StoreProvider value={Store.store}>
      <ThemedApp />
    </StoreProvider>
  );
};

Store.createStore(stores);
export default App;
