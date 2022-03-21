import { createTheme } from "@mui/material";
// fonts
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

const customtheme = createTheme({
  typography: {
    fontFamily: "inter, sans-serif",
  },
  button: {
    fontFamily: "inter, sans-serif",
  },
});

export default customtheme;
