import { createContext } from "react";

import Store from "@src/application/store";

const StoreContext = createContext<Store | undefined>(undefined);

export default StoreContext;
export const { Consumer: StoreConsumer, Provider: StoreProvider } = StoreContext;
