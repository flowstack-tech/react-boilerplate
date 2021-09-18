import { PreferredTheme } from "@features/preferences";
import { lightTheme } from "@styles/global-theme";

const useGlobalTheme = (theme: PreferredTheme) => {
  return theme === "dark" ? lightTheme : lightTheme;
};

export default useGlobalTheme;
