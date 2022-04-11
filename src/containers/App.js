import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";
import Home from "./Home";
import Plans from "./Plans";

const App = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Router>
        <div className="app">
          <ResponsiveAppBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/plans" element={<Plans />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
