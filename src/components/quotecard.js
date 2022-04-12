import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Updateinfo from "./updateinfo";
import Checkoutform from "./checkoutform";
import Skeleton from "@mui/material/Skeleton";
import Dialog from "@mui/material/Dialog";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";



export default function Quotecard({ quote }) {
  const rateinc = quote.rate_increases;
  const st = quote.location_base.state;
  let ageinc = quote.age_increases;  
  
  let disc = quote.discounts;

  let sum_rateinc;
  let avg_rateinc;
  let sum_ageinc;
  let avg_ageinc;
  
  let discname;
  let discvalue;
  let discfull;

  if(rateinc.length > 0){
    sum_rateinc = rateinc.map(item => (item.rate_increase*100)).reduce((a, b) => a + b);
    avg_rateinc = (sum_rateinc / rateinc.length).toString().substr(0,4);
  }

  if(ageinc.length > 0){
    sum_ageinc = ageinc.map(item => (item*100)).reduce((a, b) => a + b);
    avg_ageinc = (sum_ageinc / ageinc.length).toString().substr(0,4);
  }

  if(quote.discounts.length === 0){
    discfull = "N/A";
  } else{
    discname = disc.map(data => (data.name));
    discvalue = (disc.map(data => ((data.value * 100).toString().substr(0, 4)))) + "%";
    discfull = discname + "(" + discvalue +")";
  }

  // disc.map(data => ( {data.name}, {(data.value * 100).toString().substr(0, 4)}  ));

 
 const [checkbtn, setCheckbtn] = useState(false);
 const [pricebtn, setPricebtn] = useState(false);
 const [openDialoginfo, setOpenDialoginfo] = useState(null);
 const [openDialogcheck, setOpenDialogcheck] = useState(null);

 const handleClickOpen = () => {
  setOpenDialoginfo("updateinfo");
};

const handleCheckClickOpen = () => {
  setOpenDialogcheck("checkoutform");
};


const handleCloseinfo = () => {
  setOpenDialoginfo(null);
};

const handleClosecheck = () => {
  setOpenDialogcheck(null);
};


  
  const prov = quote.company_base.name_full;
  const plogo = "";
  


  useEffect(() => {
  if(localStorage.getItem('isuser') === "Yes") {
    setCheckbtn(true);
    setPricebtn(false);
  } else{
    setCheckbtn(false);
    setPricebtn(true);
  }
  }, []);
  
  
  // if (quote.company_base.parent_company_base.name === "AETNA GRP") {
  //   prov = "Aetna";
  // } else if (
  //   quote.company_base.parent_company_base.name === "Blue Shield of CA Grp"
  // ) {
  //   prov = "Blue Shield";
  // } else if (
  //   quote.company_base.parent_company_base.name === "UNITEDHEALTH GRP"
  // ) {
  //   prov = "United Healthcare";
  // } else if (quote.company_base.parent_company_base.name === "Anthem Inc Grp") {
  //   prov = "Anthem";
  // } else if (quote.company_base.parent_company_base.name === "CIGNA GRP") {
  //   prov = "Cigna";
  // } else {
  //   prov = quote.company_base.parent_company_base.name;
  // }

  // if (quote.company_base.parent_company_base.name === "AETNA GRP") {
  //   plogo = (
  //     <img
  //       id="plogo"
  //       src={require("../assets/aetna-text-logo.png")}
  //       style={{ marginRight: "16px" }}
  //       alt="Aetna"
  //     />
  //   );
  // } else if (
  //   quote.company_base.parent_company_base.name === "Blue Shield of CA Grp"
  // ) {
  //   plogo = (
  //     <img
  //       id="plogo"
  //       src={require("../assets/Blue_Shield_of_California_logo.png")}
  //       style={{ marginRight: "16px" }}
  //       alt="Cigna"
  //     />
  //   );
  // } else if (quote.company_base.parent_company_base.name === "Anthem Inc Grp") {
  //   plogo = (
  //     <img
  //       id="plogo"
  //       src={require("../assets/anthem-logo.png")}
  //       style={{ marginRight: "16px" }}
  //       alt="Cigna"
  //     />
  //   );
  // } else if (
  //   quote.company_base.parent_company_base.name === "UNITEDHEALTH GRP"
  // ) {
  //   plogo = (
  //     <img
  //       id="plogo"
  //       src={require("../assets/unitedhealthcare-logo.png")}
  //       style={{ marginRight: "16px" }}
  //       alt="Cigna"
  //     />
  //   );
  // } else if (quote.company_base.parent_company_base.name === "CIGNA GRP") {
  //   plogo = (
  //     <img
  //       id="plogo"
  //       src={require("../assets/cigna-text-logo.jpg")}
  //       style={{ marginRight: "16px" }}
  //       alt="Cigna"
  //     />
  //   );
  // } else {
  //   plogo = " ";
  // }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // const [open, setOpen] = useState(false);
  
  // const [opencheck, setOpencheck] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
    
  // };
  

  // const handleCheckClickOpen = () => {
  //   setOpencheck(true);
  // };

  // const handleCheckClose = () => {
  //   setOpencheck(false);
  // };

  

  // const HtmlTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} classes={{ popper: className }} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: "#111",

  //     boxShadow: theme.shadows[1],
  //   },
  //   [`& .${tooltipClasses.arrow}`]: {
  //     color: "#111",
  //   },
  // }));

  return (
    <Card sx={{ minWidth: 275, mb: 3 }} elevation={3}>
      <Grid item xs={12} sx={{ p: 2 }}>
        {loading ? (
          <Stack
            direction="row"
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="column" sx={{ alignItems: "start" }} spacing={0}>
              {plogo}
              <Typography color="text.secondary" variant="subtitle2">
                Provider:
              </Typography>
              <Typography
                color="common.black"
                variant="subtitle1"
                sx={{ fontSize: "1em" }}
              >
                <b>{prov}</b>
              </Typography>
            </Stack>

            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <Typography color="text.secondary" variant="subtitle2">
                Premium:
              </Typography>

              <Typography
                color="common.black"
                variant="subtitle1"
                sx={{ fontSize: "1.1em" }}
              >
                <b>${quote.rate.month / 100} /month</b>
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <Skeleton
            variant="rectangle"
            animation="wave"
            height="3em"
            width="100%"
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <CardContent>
        <Grid container spacing={3} id="quote-cards">
          <Grid item xs={4}>
            {loading ? (
              <Stack direction="column" spacing={2}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Ambest Rating:
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {quote.company_base.ambest_rating}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    SP Rating:
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {quote.company_base.sp_rating}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Years in the market:
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {2022 - quote.company_base.established_year}
                  </Typography>
                </Stack>
              </Stack>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="5em"
                width="100%"
              />
            )}
          </Grid>

          <Grid item xs={4}>
            {loading ? (
              <Stack direction="column" spacing={2}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Rate Type :
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {quote.rate_type}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Discounts :{" "}
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                  {discfull}
                  </Typography>

                  {/* {disc.map((data, i) => (
                    <Typography key={i} color="text.primary" variant="body1">
                      {" "}
                      {data.name} ({(data.value * 100).toString().substr(0, 4)}
                      %)
                    </Typography>
                  ))} */}
                </Stack>

                {/* <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
									<Typography color="text.secondary" variant="subtitle2">
										Effective Date:
									</Typography>
									<Typography color="text.primary" variant="body1">
										{quote.effective_date.substring(0, 10)}
									</Typography>

									<HtmlTooltip
										arrow
										title={
											<React.Fragment>
												<Typography color="common.white" variant="body1">
													ergreg ergerglerg e rgergerg
												</Typography>
											</React.Fragment>
										}
									>
										<IconButton size="small" sx={{ p: 0, color: "#999" }} aria-label="Rate increase history" component="span">
											<InfoOutlinedIcon />
										</IconButton>
										 <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> 
									</HtmlTooltip>


								</Stack> */}
              </Stack>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="5em"
                width="100%"
              />
            )}
          </Grid>

          <Grid item xs={4}>
            {loading ? (
              <Stack direction="column" spacing={2}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
				  <Typography color="text.secondary" variant="subtitle2">
				  Rate Increase history : 
                  </Typography>
                  <Typography color="text.primary" variant="body1">
				   {avg_rateinc}
                  </Typography>

                  {/* <HtmlTooltip
                    arrow
                    title={
                      <React.Fragment>
                        {rateinc.map((data, i) => (
                          <Typography
                            color="common.white"
                            variant="body1"
                            key={i}
                            sx={{ mb: 1 }}
                          >
                            $
                            {(data.rate_increase * 100).toString().substr(0, 5)}{" "}
                            <small style={{ color: "#999", fontWeight: 100 }}>
                              on {data.date.substring(0, 10)}
                            </small>
                          </Typography>
                        ))}
                      </React.Fragment>
                    }
                  >
                    <IconButton
                      size="small"
                      sx={{ p: 0, color: "#999" }}
                      aria-label="Rate increase history"
                      component="span"
                    >
                      <InfoOutlinedIcon />
                    </IconButton>
                     <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> 
                  </HtmlTooltip> */}
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  {/* <Typography color="text.primary">
                    Age Increase history
                  </Typography> */}
				  <Typography color="text.secondary" variant="subtitle2">
				  Age Increase history : 
                  </Typography>
                  <Typography color="text.primary" variant="body1">
				   {avg_ageinc}
                  </Typography>
                  {/* <HtmlTooltip
                    arrow
                    title={
                      <React.Fragment>
                        {ageinc.map((data, i) => (
                          <Typography
                            color="common.white"
                            variant="body1"
                            key={i}
                            sx={{ mb: 1 }}
                          >
                            {(data * 100).toString().substr(0, 5)}
                          </Typography>
                        ))}
                      </React.Fragment>
                    }
                  >
                    <IconButton
                      size="small"
                      sx={{ p: 0, color: "#999" }}
                      aria-label="Rate increase history"
                      component="span"
                    >
                      <InfoOutlinedIcon />
                    </IconButton>
                     <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> 
                  </HtmlTooltip> */}
                </Stack>
              </Stack>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="5em"
                width="100%"
              />
            )}
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-start", p: 2 }}>
        <Stack direction="row" spacing={2}>

        {pricebtn && (
          <>
          {loading ? (
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={handleClickOpen}
              disableElevation
            >
              View Price
            </Button>
          ) : (
            <Skeleton
              variant="rectangle"
              animation="wave"
              height="3em"
              width="10em"
            />
          )}
          </>
    )}


        {checkbtn && (
          <>
          {loading ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCheckClickOpen}
              disableElevation 
            >
              Checkout
            </Button>
            
          ) : (
            <Skeleton
              variant="rectangle"
              animation="wave"
              height="3em"
              width="10em"
            />
          
          )}
      </>
)}
        </Stack>

            
      </CardActions>

      <Updateinfo
        open={openDialoginfo === "updateinfo"}
        onClose={handleCloseinfo}
      />

      <Checkoutform
        open={openDialogcheck === "checkoutform"}
        onClose={handleClosecheck}
      />

      {/* <Dialog open={open} onClose={handleClose}>
        <Updateinfo/>
      </Dialog>

      <Dialog open={opencheck} onClose={handleCheckClose}>
        <Checkoutform/>
      </Dialog> */}

    </Card>
  );
}
