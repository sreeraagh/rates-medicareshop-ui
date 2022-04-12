import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Skeleton from "@mui/material/Skeleton";

import Toolbar from "@mui/material/Toolbar";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
//import IconButton from "@mui/material/IconButton";
//import Typography from "@mui/material/Typography";
//import Menu from "@mui/material/Menu";
//import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
//import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
//import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/medicare-shop-logo.jpeg";

const ResponsiveAppBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", position: "sticky", top: 0, zIndex: 99 }}
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {loading ? (
            <Box
              component="img"
              alt="MedicareShop"
              src={Logo}
              style={{ maxHeight: 45 }}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={45}
              width={150}
            />
          )}

          {loading ? (
            <Button
              startIcon={<HelpOutlineOutlinedIcon />}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Help
            </Button>
          ) : (
            <Skeleton variant="rectangle" animation="wave">
              <Button />
            </Skeleton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
