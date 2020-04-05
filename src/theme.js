import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Custom theme for this app
const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
