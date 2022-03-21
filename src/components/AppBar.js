import * as React from "react";
import AppBar from "@mui/material/AppBar";
//import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
//import IconButton from "@mui/material/IconButton";
//import Typography from "@mui/material/Typography";
//import Menu from "@mui/material/Menu";
//import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
//import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
//import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/medicare-shop-logo.jpeg";

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", position: "fixed", zIndex: 99 }}
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <img alt="MedicareShop" src={Logo} style={{ maxHeight: 45 }}></img>

          <Button
            startIcon={<HelpOutlineOutlinedIcon />}
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Help
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
