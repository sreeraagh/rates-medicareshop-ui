
import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CallIcon from "@mui/icons-material/Call";
import ResponsiveAppBar from "../components/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Thankyou( ) {

    const navigate = useNavigate();
    const isuser = localStorage.getItem('isuser');
    const ischecked = localStorage.getItem('ischecked');

    useEffect (() => {
    if(ischecked !== "Yes" && isuser === "Yes"){
        navigate("/plans");
    }

    if(ischecked !== "Yes" && isuser !== "Yes" ){
        navigate("/");
    }

    }, []);

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
<Container maxWidth="md" id="info-cont-tq" sx={{mb:6}}>

<Stack
  direction="row"
  id="tq-head"
  spacing={2}
>
  
  <Typography variant="h5" >
  <b id="tq-icon">🙌</b>&nbsp;<b> Thank you for your inquiry to MedicareShop.</b>
  </Typography>
</Stack>

<Stack
  direction="column"
  id="tq-subhead"
>
  <Typography
    variant="h6"
    color="common.black"
    sx={{ fontWeight: "500"}}
    gutterBottom
    id="tq-sub1"
  >
    We have recieved your carrier and plan selection and are
    working to finalize your application.
  </Typography>
  <Typography variant="subtitle1" id="tq-sub2">
  To lock in your rate, an agent licensed in your state will call you at the number provided to verify your information. Our office hours are 9am-6pm eastern.
  </Typography>
</Stack>

<Divider />
<Stack
  direction="row"
  sx={{ mt: 3, mb: 3, alignItems: "center" }}
  spacing={2}
  id="chform-help"
>
  <Typography
    variant="subtitle1"
    sx={{ fontWeight: "500" }}
    color="common.black"
  >
    Prefer to call in? We can be reached at :
  </Typography>
  <Button
    size="large"
    variant="contained"
    color="secondary"
    href="tel:18884301355"
    startIcon={<CallIcon />}
  >
    1-888-430-1355
  </Button>
</Stack>
<Divider />

<Stack
  direction="column"
  sx={{ mt: 3, mb: 6, alignItems: "center" }}
  spacing={2}
  id="vid-wrap"
>
  <Typography variant="subtitle1" id="tq-sub3">
    If you have a moment, we encourage you to take a couple
    minutes and watch the video below to learn how to make the
    best decision on purchasing a medigap plan.
  </Typography>

  <div className="videoWrapper">
    <iframe
      title="med-video"
      className="ms-iframe"
      src="https://player.vimeo.com/video/675905157?h=2e17b32375"
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
    ></iframe>
  </div>
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