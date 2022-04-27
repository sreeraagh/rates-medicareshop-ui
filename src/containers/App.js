import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import ResponsiveAppBar from "../components/AppBar";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";
import Home from "./Home";
import Plans from "./Plans";
import Thankyou from "./Thankyou";


const App = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Router>
        <div className="app">
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/plans" element={<Plans />} />
            <Route exact path="/thankyou" element={<Thankyou />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
        </div>

      </Router>
    </ThemeProvider>
  );
};

export default App;

