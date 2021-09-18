import React from "react";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { inject } from "@common/store/inject";
import useGlobalTheme from "@hooks/global-theme";
import { PersistStore } from "@features/store-persistence";

const ThemedApp = inject((root) => ({
  theme: root.preferencesStore.theme,
}))(({ theme }) => {
  const globalTheme = useGlobalTheme(theme);

  return (
    <ThemeProvider theme={globalTheme}>
      <PersistStore loadingView={<></>}>
      <CssBaseline />
      </PersistStore>
    </ThemeProvider>
  );
});

export default ThemedApp;
