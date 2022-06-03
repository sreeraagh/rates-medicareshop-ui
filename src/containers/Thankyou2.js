
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CallIcon from "@mui/icons-material/Call";
import ResponsiveAppBar from "../components/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Thankyou2( ) {

return (
    <>
<ResponsiveAppBar />
<Box
        component="main"
        sx={{
          backgroundColor: "#fff",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "65px",
        }}
      >
<Container maxWidth="md" id="#info-cont-tq2" sx={{mb:6}}>

<Stack
  direction="row"
  id="tq-head"
  className="tq2-head"
  spacing={2}
>
  <Typography variant="h5" >
    <b>Unfortunately, we were unable to verify your information.</b>
  </Typography>
</Stack>

<Stack
  direction="column"
  id="tq-subhead"
>
  <Typography
    variant="h6"
    color="common.black"
    sx={{ fontWeight: "400"}}
    className="tq2-subhead"
    id="tq-sub1"
  >
    If you feel this was in error, please give us a call at :
  </Typography>

  <Button
    size="large"
    variant="outlined"
    color="secondary"
    sx={{mb:6}}
    href="tel:18884301355"
    startIcon={<CallIcon />}
  >
    1-888-430-1355
  </Button>
  
</Stack>




<Stack
  direction="column"
  sx={{ mt: 3, mb: 3, alignItems: "center" }}
  spacing={2}
  
>
<Typography
    variant="h6"
    color="common.black"
    sx={{ fontWeight: "500"}}
    className="tq2-subhead"
    id="tq-sub1"
  >
    Below, you can find rates to many companies from $0 per month.
  </Typography>
  <Button
    size="large"
    variant="contained"
    color="secondary"
    sx={{mt:0}}
    target="_blank"
    href="http://bit.ly/3nRlDmd"
    endIcon={<ArrowForwardIcon />}
  >
    View Rates
  </Button>
</Stack>


{/* <Stack direction="row" sx={{ justifyContent: "center" }}>
  <Button
    size="large"
    variant="outlined"
    color="warning"
    sx={{ mt: 3 }}
    onClick={onClose}
    startIcon={<CloseIcon />}
  >
    Close
  </Button>
</Stack> */}

</Container>
</Box>
</>
);
}