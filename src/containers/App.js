import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./HomeScreen";
import Zipinput from "./ZipcodeScreen";
import "./App.css";
import ResponsiveAppBar from "../components/AppBar";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Router>
        <div className="app">
          <ResponsiveAppBar />
          <Routes>
            {/* <Route exact path="/" element={<PrivateScreen/>} /> */}
            {/* <Route exact path="/login" element={<LoginScreen/>} /> */}
            {/* <Route exact path="/register" element={<RegisterScreen/>} /> */}
            <Route exact path="/" element={<Zipinput />} />
            <Route exact path="/plans" element={<Dashboard />} />
            {/* <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            element={<ResetPasswordScreen />}
          /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
