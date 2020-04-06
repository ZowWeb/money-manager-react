import { createMuiTheme } from "@material-ui/core/styles";

// Custom theme for this app
const theme = (darkMode) =>
  createMuiTheme({
    spacing: 8,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#4a47a3",
      },
      secondary: {
        main: "#c0392b",
      },
    },
  });

export default theme;
