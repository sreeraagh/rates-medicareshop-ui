import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ResponsiveAppBar from "../components/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import Zoom from "@mui/material/Zoom";
import CircularProgress from "@mui/material/CircularProgress";

import Updateinfo from "../components/updateinfo";
//import Quotecard from "../components/quotecard";
import Quotecard2 from "../components/quotecard2";

//import { useLocation } from "react-router-dom";
//import InputLabel from "@mui/material/InputLabel";
//import { userinfo } from "../constants/global";

const Plans = () => {

  const navigate = useNavigate();
  //const { state } = useLocation();

  

  const isuser = localStorage.getItem('isuser');
  const ischecked = localStorage.getItem('ischecked');
  const userdata =  JSON.parse(localStorage.getItem('user'));
  const userage =  localStorage.getItem('age');
  

  const [quotes, setQuotes] = useState([]);
  const [show, setShow] = useState(false);
  const [isvisible, setIsvisible] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState(null);
  //const [plans, setPlans] = useState([]);
  //const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [skeloading, setSkeloading] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [openDialogName, setOpenDialog] = useState(null);

  const [zipcode, setZipcode] = useState(null);
  const [st, setSt] = useState(null);

const plansA = [
"A",
"B",
"C",
"D",
"F",
"G",
"HDF",
"HDG",
"K",
"L",
"N"
  ];

  let plan;

  let openfade = true;
  let openzoom = true;
  

  useEffect (() => {

  if(ischecked === "Yes"){
    navigate("/thankyou");
  }

    if(isuser === null || isuser === undefined || isuser === "" ){
      navigate("/");
    }

    if(isuser === "Yes"){
      userQuotes();
      setIsvisible(false);
      setZipcode(localStorage.getItem('zipcode'));
      setSt(localStorage.getItem('state'));
      
    } else{
      setQuotes(JSON.parse(sessionStorage.getItem('plans')));
      setZipcode(sessionStorage.getItem('zipcode'));
      setSt(sessionStorage.getItem('state'));
      //getPlans();
      
      setTimeout(() => {
        setSkeloading(true);
      }, 300);
      
    }

    // setPlan("G");     

    const timer = setTimeout(() => {
      setLoading(true);
    }, 200);
    return () => clearTimeout(timer);

  }, []);


  const handleChange = (event) => {
    plan = event.target.value;
    //setPlan(event.target.value);
    console.log(event.target.value);
    console.log(plan);
    setShow(false);
    setIsloading(true);

    if(isuser === "Yes"){
      userplanUpdate();
    }else{
      planUpdate();      
    }

  };

 
  // const getPlans = async () => {
    
  //   let zipcode = sessionStorage.getItem('zipcode');
  //   let st = sessionStorage.getItem('state');

  //   try {
  //     //const response = await fetch(`https://mnw-server.herokuapp.com/weather/plans/${zipcode}/${st}`);
  //     const response = await fetch(`http://localhost:5000/weather/plans/${zipcode}/${st}`);
      
  //     if (!response.ok) {
  //       throw new Error(`(${response.status})`);
  //     }
  //     let actualplans = await response.json();
  //     setPlans(actualplans);
      
  //   } catch (err) {
  //     setError(err.message);
  //     setPlans(null);
  //   } finally {
  //     setShow(true);
  //   }
  // };


  // const getuserPlans = async () => {
  
  //   let zipcode = localStorage.getItem('zipcode');
  //   let st = localStorage.getItem('state');

  //   try {
  //     //const response = await fetch(`https://mnw-server.herokuapp.com/weather/plans/${zipcode}/${st}`);
  //     const response = await fetch(`http://localhost:5000/weather/plans/${zipcode}/${st}`);
      
  //     if (!response.ok) {
  //       throw new Error(`(${response.status})`);
  //     }
  //     let actualplans = await response.json();
  //     setPlans(actualplans);
  //   } catch (err) {
  //     setError(err.message);
  //     setPlans(null);
  //   } finally {
  //     setShow(true);
  //   }
  // };

  const planUpdate = async () => {
    console.log(plan);
    setSkeloading(false);
    
    try {
     const response = await fetch(`https://medicareshop-server.herokuapp.com/weather/${zipcode}/${plan}`);
      //const response = await fetch(`http://localhost:5000/weather/${zipcode}/${plan}`);

      if (!response.ok) {
        throw new SyntaxError("Oops, something went wrong. Try again later.");
      }

      let actualData = await response.json();

      if (response.ok && actualData.status === "error") {
        throw new Error(`Unable to fetch quotes. Try again later.`);
      }

      if (actualData.length === 0) {
        throw new Error(`No quotes found for selected plan.`);
      }

      if (response.ok && actualData.length) {
        setQuotes(actualData);
        setIsloading(false);
        setShow(false);
      }

    } catch (err) {
      setError(err.message);
      console.log(err);
      setQuotes(null);
      setIsloading(false);
      setShow(true);
    } finally {
      setIsloading(false);
      setLoading(true);
      setSkeloading(true);
    }
  };


  const userQuotes = async () => {  
    
    const zipstring = userdata.zipcode;
    const age = userage;
    
    let gender;
    let tobacco;

    if(userdata.gender === "Female"){
     gender = "F";
    } else{
      gender = "M";
    }

    if(userdata.tobacco === "Yes"){
      tobacco = "1";
     } else{
      tobacco = "0";
     }

     
    
    try {
      const response = await fetch(`https://medicareshop-server.herokuapp.com/weather/${zipstring}/${age}/${gender}/${tobacco}`);
      //const response = await fetch(`http://localhost:5000/weather/${zipstring}/${age}/${gender}/${tobacco}`);

      if (!response.ok) {
        throw new SyntaxError("Oops, something went wrong. Try again later.");
      }

      let quoteData = await response.json();

      if (response.ok && quoteData.status === "error") {
        throw new Error(
          `Enter a valid US zip5 code to get quotes in your area.`
        );
      }

      if (response.ok) {
        setIsloading(false);
        setShow(false);
        setQuotes(quoteData);                  
        setSt(quoteData[0].location_base.state);
        localStorage.setItem('state', quoteData[0].location_base.state);
        //getuserPlans();
        
      }

    } catch (err) {
      setErrors(err.message);
      console.log(err);
      setIsloading(false);
      setShow(true);
      setSt('N/A');
      localStorage.setItem('state', 'N/A');
    } finally {
      setIsloading(false);
      setSkeloading(true);
    }
  };


  const userplanUpdate = async () => {

    setSkeloading(false);
    console.log(plan);
    const zipcode = userdata.zipcode;
    try {
      //const response = await fetch(`https://medicareshop-server.herokuapp.com/weather/${zipcode}/${plan}`);
      const response = await fetch(`http://localhost:5000/weather/${zipcode}/${plan}`);

      if (!response.ok) {
        throw new SyntaxError("Oops, something went wrong. Try again later.");
      }

      let actualData = await response.json();

      if (response.ok && actualData.status === "error") {
        throw new Error(`Unable to fetch quotes. Try again later.`);
      }

      if (actualData.length === 0) {
        throw new Error(`No quotes found for selected plan.`);
      }

      if (response.ok && actualData.length) {
        setQuotes(actualData);
        setIsloading(false);
        setShow(false);
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
      setQuotes(null);
      setIsloading(false);
      setShow(true);
    } finally {
      setIsloading(false);
      setLoading(true);
      setSkeloading(true);
    }
  };

  const handleClickOpen = () => {
    setOpenDialog("updateinfo");
  };

  const handleClose = () => {
    setOpenDialog(null);
  };

  



  return (
    <>
    <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          backgroundColor: "#f0f0f0",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          // paddingTop: "65px",
        }}
      >
        <Container maxWidth="md" id="info-cont">
          
          <Paper elevation={3} sx={{background: "#fff", mt:4,  mb:6, p:2}} id="info-wrap">
          <Fade in={openfade}>
            {loading ? (
              <Alert
                severity="info"
                id="update-info"
                color="secondary"
                icon={false}
                variant="outlined"
                sx={{
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  // background: "#fff",
                }}
                
              >
                {isvisible && (
            <Stack direction="column" id="info-stack" spacing={0} sx={{p:1}}>
            
            <AlertTitle color="text.primary" variant="body1">Showing quotes for...{" "}</AlertTitle>
                
            <Stack direction="row" sx={{ alignItems: "start" }} spacing={4} id="info-substack">

                <Stack
                id="info-details"
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle1">
                    Age:
                  </Typography>
                  <Typography color="text.primary" variant="h6">
                    <b>65</b>
                  </Typography>
                </Stack>

                <Stack
                id="info-details"
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle1">
                    Gender:
                  </Typography>
                  <Typography color="text.primary" variant="h6" >
                  <b>Female</b>
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                  id="info-details"
                >
                  <Typography color="text.secondary" variant="subtitle1">
                    Zip Code:
                  </Typography>
                  <Typography color="text.primary" variant="h6">
                  <b>{zipcode}</b>
                  </Typography>
                </Stack>

                <Stack
                id="info-details"
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle1">
                    State:
                  </Typography>
                  <Typography color="text.primary" variant="h6">
                  <b>{st}</b>
                  </Typography>
                </Stack>

                <Stack
                id="info-details"
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Typography color="text.secondary" variant="subtitle1">
                    Tobacco:
                  </Typography>
                  <Typography color="text.primary" variant="h6">
                  <b>No</b>
                  </Typography>
                </Stack>

</Stack>

            </Stack>

                )}



                {!isvisible && (

      <Stack direction="column" spacing={1} sx={{p:1}} id="info-stack">
            
  <AlertTitle color="text.primary" variant="body1">👋 Hi {userdata.firstName}, Showing quotes for...{" "}</AlertTitle>
    
<Stack direction="row" sx={{ alignItems: "start" }} spacing={4} id="info-substack">

<Stack
      direction="row"
      sx={{ alignItems: "center" }}
      spacing={1}
      id="info-details"
    >
      <Typography color="text.secondary" variant="subtitle1">
        Age:
      </Typography>
      <Typography color="text.primary" variant="h6">
        <b>{userage}</b>
      </Typography>
    </Stack>

    <Stack
      direction="row"
      sx={{ alignItems: "center" }}
      spacing={1}
      id="info-details"
    >
      <Typography color="text.secondary" variant="subtitle1">
        Gender:
      </Typography>
      <Typography color="text.primary" variant="h6" sx={{ textTransform: "capitalize"}}>
      <b>{userdata.gender}</b>
      </Typography>
    </Stack>



    <Stack
      direction="row"
      sx={{ alignItems: "center" }}
      spacing={1}
      id="info-details"
    >
      <Typography color="text.secondary" variant="subtitle1">
        Zip Code:
      </Typography>
      <Typography color="text.primary" variant="h6">
      <b>{userdata.zipcode}</b>
      </Typography>
    </Stack>

    <Stack
      direction="row"
      sx={{ alignItems: "center" }}
      spacing={1}
      id="info-details"
    >
      <Typography color="text.secondary" variant="subtitle1">
        State:
      </Typography>
      <Typography color="text.primary" variant="h6">
      <b>{st}</b>
      </Typography>
    </Stack>

   
    <Stack
      direction="row"
      sx={{ alignItems: "center" }}
      spacing={1}
      id="info-details"
    >
      <Typography color="text.secondary" variant="subtitle1">
        Tobacco:
      </Typography>
      <Typography color="text.primary" variant="h6">
      <b>{userdata.tobacco}</b>
      </Typography>
    </Stack>

</Stack>

</Stack>


                // <Stack direction="column">
                  
                //   {/* <Typography
                //     variant="subtitle2 "
                //     style={{ textAlign: "left" }}
                //   >
                   
                //   </Typography> */}

                //   <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.2em" }}>
                  
                //   Showing results for{" "}
                //     {userdata.zipcode}, {st}, Age: {userdata.age}, Gender: {userdata.gender}, Tobacco: {userdata.tobacco}.
                //   </Typography>

                // </Stack>
                )}
              </Alert>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="7em"
                width="100%"
                sx={{ mb: 4 }}
              />
            )}

          </Fade>

            
          {loading ? (
            <>
              {isvisible && (
                  <Stack direction="column" sx={{mt: 4, mb:1, alignItems: "center", justifyContent: "center"}} spacing={2} id="notyou">
                  <Typography
                    variant="body1" sx={{ fontWeight: "500", fontSize: "20px", color:"#000" }}>
                    <b>Not you?</b> See personalized quotes by updating your info...{" "}
                  </Typography>
                  <Button
                    startIcon={<BorderColorOutlinedIcon />}
                    color="secondary"
                    // sx={{ color: "#000", background: "#fff" }}
                    size="large"
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    Update my Info
                  </Button>
                  </Stack>
                  )}
              </>
              ) : (
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  height="3em"
                  width="60%"
                  sx={{ mb: 4, margin: "0 auto" }}
                />
              )}

            
            </Paper>

        </Container>



        {errors && show && (
          <Container
          maxWidth="md"
          id="info-cont"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb:2
          }}
        >
              <Zoom
                in={openzoom}
                id="no_plans"
                sx={{ display: "flex", alignItems: "center",  mv: 1 }}
              >
                
                <Alert severity="warning" color="grey" variant="filled" elevation={3}>
                  <p className="error">
                    No Quotes/ Plans available for your Zip code.
                  </p>
                </Alert>
              </Zoom>
              </Container>
            )}

{!errors && (
        <Container
          maxWidth="md"
          id="info-cont"
          className="info-splan"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >


      
          <Grid item xs={2} id="select-plan" >
            {loading ? (
              <Paper elevation={2}>
              <FormControl fullWidth >
                {/* <InputLabel
                  id="demo-simple-select-label"
                  size="small"
                  color="secondary"
                  
                >
                  Select a Plan
                </InputLabel> */}
                <Select
                  id="demo-simple-select"
                  //label="Select a Plan"
                  defaultValue="G"
                  value={plan}
                  color="secondary"
                  onChange={handleChange}
                >
                  {plansA.map((plan, i) => (
                    <MenuItem key={i} value={plan}>
                      Plan <b style={{ marginLeft: "5px" }}>{plan}</b>
                    </MenuItem>
                  ))}
                  {/* <option value="A">Plan A</option>
                  <option value="B">Plan B</option>
                  <option value="C">Plan C</option>
                  <option value="D">Plan D</option>
                  <option value="F">Plan F</option>
                  <option value="G">Plan G</option>
                  <option value="HDG">Plan HDG</option>
                  <option value="HDF">Plan HDF</option>
                  <option value="K">Plan K</option>
                  <option value="L">Plan L</option>
                  <option value="N">Plan N</option> */}
                </Select>
              </FormControl>
              </Paper>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="3em"
                width="10em"
                sx={{ mb: 2 }}
              />
            )}
          </Grid>
        

           
        <Grid item sx={{ ml: 2 }} id="plan_loader-wrap">
            {isloading && (
              <Zoom
                in={openzoom}
                sx={{ display: "flex", alignItems: "center", }}
              >
                <Alert icon={false} color="grey" variant="filled" elevation={3} id="plans_loading">
                  <Box sx={{ display: "flex", alignItems: "center" , color: "#000"}}>
                    <CircularProgress color="inherit" />
                    <Typography
                      variant="subtitle1"
                      color="common.black"
                      sx={{ ml: 2, fontWeight: 500 }}
                    >
                      Finding quotes for the selected plan...
                    </Typography>
                  </Box>
                </Alert>
              </Zoom>
        
            )}

            {error && show && (
              <Zoom
                in={openzoom}
                sx={{ display: "flex", alignItems: "center", mv: 1 }}
              >
                <Alert severity="warning" color="grey" variant="filled" elevation={3} id="plans_error">
                  <p className="error">
                    No quotes found for selected the plan.
                  </p>                  
                </Alert>
              </Zoom>
            )}
            </Grid>
        </Container>
        )}
        {/* {!show && (
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            A moment please...
          </Typography>
        )}

        {error && (
          <Typography variant="subtitle1">
            {`OOPS! Something went wrong. Try again later. ${error}`}
          </Typography>
        )} */}

        
{!errors &&  !show && (
          <Container maxWidth="md" sx={{ mb: 8, mt: 3 }} id="info-cont-last">
            {skeloading ? (
            <>
            {quotes && quotes.map((quote, i) => (
              <Stack key={i}>
                {/* <Quotecard quote={quote} /> */}
                <Quotecard2  quote={quote} plan={plan} />
              </Stack>
            ))}
            </>
            ):(
              <>
              <Card sx={{mb:2, p:2}}>
                <Grid container spacing={3} id="quote-cards">
                  <Grid item xs={3}>
                <Skeleton
                variant="rectangle"
                animation="wave"
                height="100%"
                width="100%"
                  />
                  </Grid>
                  <Grid item xs={3}>
                <Skeleton
                variant="rectangle"
                animation="wave"
                height="100%"
                width="100%"
                  />
                  </Grid>
                  <Grid item xs={3}>
                <Skeleton
                variant="rectangle"
                animation="wave"
                height="100%"
                width="100%"
                  />
                  </Grid>
                  <Grid item xs={3}>
                <Skeleton
                variant="rectangle"
                animation="wave"
                height="10em"
                width="100%"
                  />
                  </Grid>
                </Grid>
              </Card>
              <Card sx={{mb:2, p:2}}>
              <Grid container spacing={3} id="quote-cards">
                <Grid item xs={3}>
              <Skeleton
              variant="rectangle"
              animation="wave"
              height="100%"
              width="100%"
                />
                </Grid>
                <Grid item xs={3}>
              <Skeleton
              variant="rectangle"
              animation="wave"
              height="100%"
              width="100%"
                />
                </Grid>
                <Grid item xs={3}>
              <Skeleton
              variant="rectangle"
              animation="wave"
              height="100%"
              width="100%"
                />
                </Grid>
                <Grid item xs={3}>
              <Skeleton
              variant="rectangle"
              animation="wave"
              height="10em"
              width="100%"
                />
                </Grid>
              </Grid>
            </Card>
            <Card sx={{mb:2, p:2}}>
            <Grid container spacing={3} id="quote-cards">
              <Grid item xs={3}>
            <Skeleton
            variant="rectangle"
            animation="wave"
            height="100%"
            width="100%"
              />
              </Grid>
              <Grid item xs={3}>
            <Skeleton
            variant="rectangle"
            animation="wave"
            height="100%"
            width="100%"
              />
              </Grid>
              <Grid item xs={3}>
            <Skeleton
            variant="rectangle"
            animation="wave"
            height="100%"
            width="100%"
              />
              </Grid>
              <Grid item xs={3}>
            <Skeleton
            variant="rectangle"
            animation="wave"
            height="10em"
            width="100%"
              />
              </Grid>
            </Grid>
          </Card>
          <Card sx={{mb:2, p:2}}>
          <Grid container spacing={3} id="quote-cards">
            <Grid item xs={3}>
          <Skeleton
          variant="rectangle"
          animation="wave"
          height="100%"
          width="100%"
            />
            </Grid>
            <Grid item xs={3}>
          <Skeleton
          variant="rectangle"
          animation="wave"
          height="100%"
          width="100%"
            />
            </Grid>
            <Grid item xs={3}>
          <Skeleton
          variant="rectangle"
          animation="wave"
          height="100%"
          width="100%"
            />
            </Grid>
            <Grid item xs={3}>
          <Skeleton
          variant="rectangle"
          animation="wave"
          height="10em"
          width="100%"
            />
            </Grid>
          </Grid>
        </Card>
        </>
            )}

<Typography color="text.primary" variant="caption">
Disclaimer: JERA Marketing Solutions, LLC does not 
guarantee or warrant the accuracy of the above premium
rates or underwriting information. Carriers may have 
made rate or underwriting adjustments that have not yet 
been reflected in our database. All data obtained from 
public sources.
Monthly rates may reflect EFT discounts, if applicable.
A few companies in the database offer premium rates 
based upon special underwriting or administrative rules. 
In those cases multiple rates are shown for the same 
company.
Minnesota and Wisconsin: Age increase data is 
determined using the base policy, not including any 
riders. Historical increase data is determined using a 
composite increase on the base policy and the 
riders. 2021 Market Data Source: 2021 NAIC Medicare 
Supplement Experience Exhibits, and data filed with the 
National Association of Insurance Commissioners in 
annual financial statements.
Data Source: National Association of Insurance 
Commissioners, by permission. The NAIC does not 
endorse any analysis or conclusions based upon the use 
of its data.
JERA Marketing Solutions, LLC does not guarantee or 
warrant the accuracy of the above market data.
</Typography>

          </Container>
)}
      
      </Box>

      <Updateinfo
        open={openDialogName === "updateinfo"}
        onClose={handleClose}
        plan={plan}
      />
      
    </>
  );
};

export default Plans;
