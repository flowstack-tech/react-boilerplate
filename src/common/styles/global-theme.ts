import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00A699",
    },
    secondary: {
      main: "#FF5A5F",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F3F3",
    },
    text: {
      primary: "#000000",
    },
    error: {
      main: "#B00020",
    },
  },
});
