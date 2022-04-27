import { createTheme } from "@mui/material";
// fonts
// import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/700.css";

const customtheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  button: {
    fontFamily: "Inter, sans-serif",
  },
});

export default customtheme;
