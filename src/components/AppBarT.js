import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Skeleton from "@mui/material/Skeleton";
import CallIcon from '@mui/icons-material/Call';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
import Logo from "../assets/medicareshop-tlogo.png";
import { Stack } from "@mui/material";

const ResponsiveAppBarT = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={{ background: "transparent", position: "absolute", top: 0, zIndex: 99 }}
    >
      <Container maxWidth="xl" id="appbar-tr">
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
            <Stack direction="row" spacing={1} sx={{alignItems: "center", color: "#fff"}}>
               <Typography color="common.white" variant="subtitle1">
                Need Help?
                </Typography>
            <Button size="large" variant="outlined" color="inherit" href="tel:18884301355" startIcon={<CallIcon />}>1-888-430-1355</Button>
            </Stack>
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
export default ResponsiveAppBarT;
