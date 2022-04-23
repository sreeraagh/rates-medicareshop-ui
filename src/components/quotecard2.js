import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Updateinfo from "./updateinfo";
import Checkoutform from "./checkoutform";
import Skeleton from "@mui/material/Skeleton";
//import Box from "@mui/material/Box";
// import CardActions from "@mui/material/CardActions";
// import Dialog from "@mui/material/Dialog";
// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
// import { styled } from "@mui/material/styles";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import IconButton from "@mui/material/IconButton";
// import Divider from "@mui/material/Divider";



export default function Quotecard2({ quote, plan }) {


  const rateinc = quote.rate_increases;
  const st = quote.location_base.state;
  let ageinc = quote.age_increases;  
  
  let premium = (quote.rate.month) / 100;

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
  } else {
    avg_rateinc = "N/A"
  }

  if(ageinc.length > 0){
    sum_ageinc = ageinc.map(item => (item*100)).reduce((a, b) => a + b);
    avg_ageinc = (sum_ageinc / ageinc.length).toString().substr(0,4);
  } else{
    avg_ageinc = "N/A"
  }

  if(quote.discounts.length === 0){
    discfull = "N/A";
  } else{
    discname = disc.map(data => (data.name));    
    discvalue = (disc.map(data => ((data.value * 100).toString().substr(0, 1)))) + "%";
    discfull = discname +  " (" + discvalue + ")";
  }

  // if(quote.discounts.length === 0 &&  quote.discounts.name === "household"){
  //   discname = "HH";
  // }

  

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


  
  const prov = quote.company_base.name_full.toLowerCase();
  let plogo;
  


  useEffect(() => {
  if(localStorage.getItem('isuser') === "Yes") {
    setCheckbtn(true);
    setPricebtn(false);
  } else{
    setCheckbtn(false);
    setPricebtn(true);
  }
  }, []);
  
  
//   if (quote.company_base.parent_company_base.name === "AETNA GRP") {
//     prov = "Aetna";
//   } else if (
//     quote.company_base.parent_company_base.name === "Blue Shield of CA Grp"
//   ) {
//     prov = "Blue Shield";
//   } else if (
//     quote.company_base.parent_company_base.name === "UNITEDHEALTH GRP"
//   ) {
//     prov = "United Healthcare";
//   } else if (quote.company_base.parent_company_base.name === "Anthem Inc Grp") {
//     prov = "Anthem";
//   } else if (quote.company_base.parent_company_base.name === "CIGNA GRP") {
//     prov = "Cigna";
//   } else {
//     prov = quote.company_base.parent_company_base.name;
//   }

  if (quote.company_base.parent_company_base.name === "AETNA GRP") {
    plogo = (
      <img
        id="plogo"
        class="aetna-logo"
        src={require("../assets/aetna-text-logo.png")}
        style={{ marginRight: "16px" }}
        alt="Aetna"
      />
    );
  } else if (
    quote.company_base.parent_company_base.name === "Blue Shield of CA Grp"
  ) {
    plogo = (
      <img
        id="plogo"
        class="bs-logo"
        src={require("../assets/Blue_Shield_of_California_logo.png")}
        style={{ marginRight: "16px", width: "50%", maxWidth: "50%" }}
        alt="Blue Shield"
      />
    );
  } else if (quote.company_base.parent_company_base.name === "Anthem Inc Grp") {
    plogo = (
      <img
        id="plogo"
        class="anthem-logo"
        src={require("../assets/anthem-logo.png")}
        style={{ marginRight: "16px" }}
        alt="Anthem"
      />
    );
  } else if (
    quote.company_base.parent_company_base.name === "UNITEDHEALTH GRP"
  ) {
    plogo = (
      <img
        id="plogo"
        class="uh-logo"
        src={require("../assets/unitedhealthcare-logo.png")}
        style={{ marginRight: "16px" }}
        alt="United Healthcare"
      />
    );
  } else if (quote.company_base.parent_company_base.name === "CIGNA GRP" || quote.company_base.parent_company_base.name === "CIGNA HLTH GRP") {
    plogo = (
      <img
        id="plogo"
        class="cigna-logo"
        src={require("../assets/cigna-text-logo.png")}
        style={{ marginRight: "16px" }}
        alt="Cigna"
      />
    );
  } else if (quote.company_base.parent_company_base.name === "MUTUAL OF OMAHA GRP" ) {
    plogo = (
      <img
        id="plogo"
        class="moo-logo"
        src={require("../assets/mutualofomaha-text-logo.png")}
        style={{ marginRight: "16px", width: "90%", maxWidth: "90%" }}
        alt="Mutual of Omaha"
      />
    );
  }else {
    plogo = " ";
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);
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
  

      <CardContent id="quote-wrap">

      <Grid container spacing={3} id="quote-cards">

      <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center" }} >
        
        {loading ? (
          <Stack direction="column" spacing={4} >
            <Stack direction="column" sx={{ alignItems: "start" }} >
              {plogo}
              </Stack>
              
              <Stack direction="column" sx={{ alignItems: "start" }} spacing={1} id="prov">
              <Typography color="text.secondary" variant="subtitle2" >
                Provider :
              </Typography>
              <Typography
                id="prov-text"
                color="common.black"
                variant="subtitle1"
                sx={{ fontSize: "1em", fontWeight: "600", lineHeight: "normal" }}
              >
                {prov}
              </Typography>
            </Stack>

            
          </Stack>
        ) : (
          <Skeleton
            variant="rectangle"
            animation="wave"
            height="100%"
            width="100%"
          />
        )}
        
      </Grid>
      
      <Grid item xs={3} >
      {loading ? (
              <Stack direction="column" spacing={3} >
                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Ambest / SP Rating :
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {quote.company_base.ambest_rating} / {quote.company_base.sp_rating}
                  </Typography>
                </Stack>

        

                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
                  
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Years in the market :
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {2022 - quote.company_base.established_year}
                  </Typography>
                </Stack>


                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
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
                  
                </Stack>

              </Stack>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="100%"
                width="100%"
              />
            )}
      </Grid>

        
          <Grid item xs={3} >
 

        {loading ? (
              <Stack direction="column" spacing={3} >
                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Rate Type :
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                    {quote.rate_type}
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    Discounts :{" "}
                  </Typography>
                  <Typography color="text.primary" variant="body1">
                  {discfull}
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  sx={{ alignItems: "start" }}
                  spacing={0}
                  id="quote-info"
                >
				  <Typography color="text.secondary" variant="subtitle2">
				  Rate Increase history : 
                  </Typography>
                  <Typography color="text.primary" variant="body1">
				   {avg_rateinc}
                  </Typography>
                </Stack>

             
              </Stack>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="100%"
                width="100%"
              />
            )}
          </Grid>

         

        

        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center" }} >

        {loading ? (
        <Stack spacing={4} id="quote-cta">

        <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }} spacing={0} id="quote-pre">
              <Typography color="text.secondary" variant="subtitle2">
                Premium :
              </Typography>

              <Typography
                color="common.black"
                variant="subtitle1"
                sx={{ fontSize: "1.1em" }}
              >
                <b>${premium} /month</b>
              </Typography>
            </Stack>

         <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }} spacing={0} id="viewprice">

        {pricebtn && (
            <Button
              size="large"
              color="secondary"
              variant="contained"
              // onClick={handleClickOpen}
              onClick={() => handleClickOpen({ quote })}
              disableElevation
            >
              View Price
            </Button>
            
    )}


        {checkbtn && (
          
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCheckClickOpen}
              disableElevation 
            >
              Checkout
            </Button>
)}
         </Stack>

         </Stack>
          ) : (
            <Skeleton
              variant="rectangle"
              animation="wave"
              height="10em"
              width="100%"
            />
          )}
        </Grid>
        
        </Grid>

      </CardContent>



      <Updateinfo
        open={openDialoginfo === "updateinfo"}
        onClose={handleCloseinfo}
        prov={prov}
        premium={premium}
        plan={plan}
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