import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#0E2948",
    },
    secondary: {
      main: "#00695c",
    },
    background: {
      default: "#E5E5E5",
    },
  },

  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: 14,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
