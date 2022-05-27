import React from "react";
import AppBar from "@mui/material/AppBar";
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
import Logo from "../assets/ms-logo.jpeg";
import { Stack } from "@mui/material";

const ResponsiveAppBarT = () => {

  return (
    <AppBar
      elevation={0}
      sx={{ background: "transparent", position: "absolute", top: 0, zIndex: 99 }}
    >
      <Container maxWidth="xl" id="appbar-tr">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>

            <Box
              component="img"
              alt="MedicareShop"
              src={Logo}
              style={{ maxHeight: 45 }}
            />
         

         
            <Stack direction="row" spacing={1} sx={{alignItems: "center", color: "#000"}}>
               <Typography  color="text.secondary" variant="subtitle1">
                Need Help?
                </Typography>
            <Button size="large" variant="outlined" color="inherit" href="tel:18884301355" startIcon={<CallIcon />}>1-888-430-1355</Button>
            </Stack>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBarT;
