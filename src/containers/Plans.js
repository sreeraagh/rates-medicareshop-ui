import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import Zoom from "@mui/material/Zoom";
import CircularProgress from "@mui/material/CircularProgress";

import Updateinfo from "../components/updateinfo";
import Quotecard from "../components/quotecard";
import { userinfo } from "../constants/global";

const Plans = () => {

  const navigate = useNavigate();
  //const { state } = useLocation();

  

  const isuser = localStorage.getItem('isuser');
  const userdata =  JSON.parse(localStorage.getItem('user'));

  const [quotes, setQuotes] = useState([]);
  const [show, setShow] = useState(false);
  const [isvisible, setIsvisible] = useState(true);
  const [error, setError] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [openDialogName, setOpenDialog] = useState(null);

  const [zipcode, setZipcode] = useState(null);
  const [st, setSt] = useState(null);
  
  let plan;
  let openfade = true;
  let openzoom = true;

  useEffect (() => {

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
      getPlans();
    }

    const timer = setTimeout(() => {
      setLoading(true);
    }, 500);
  
    return () => clearTimeout(timer);  

  }, []);


 
  const getPlans = async () => {
    
    let zipcode = sessionStorage.getItem('zipcode');
    let st = sessionStorage.getItem('state');

    try {
      //const response = await fetch(`https://mnw-server.herokuapp.com/weather/plans/${zipcode}/${st}`);
      const response = await fetch(`http://localhost:5000/weather/plans/${zipcode}/${st}`);
      if (!response.ok) {
        throw new Error(`(${response.status})`);
      }
      let actualplans = await response.json();
      setPlans(actualplans);
      console.log(plans);
    } catch (err) {
      setError(err.message);
      setPlans(null);
    } finally {
      setShow(true);
    }
  };


  const getuserPlans = async () => {
  
    let zipcode = localStorage.getItem('zipcode');
    let st = localStorage.getItem('state');

    try {
      //const response = await fetch(`https://mnw-server.herokuapp.com/weather/plans/${zipcode}/${st}`);
      const response = await fetch(`http://localhost:5000/weather/plans/${zipcode}/${st}`);
      if (!response.ok) {
        throw new Error(`(${response.status})`);
      }
      let actualplans = await response.json();
      setPlans(actualplans);
    } catch (err) {
      setError(err.message);
      setPlans(null);
    } finally {
      setShow(true);
    }
  };

  const planUpdate = async () => {

    

    try {
     // const response = await fetch(`https://mnw-server.herokuapp.com/weather/${zipcode}/${plan}`);
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
    }
  };


  const userQuotes = async () => {  
    const zipstring = userdata.zipcode;
    const age = userdata.age;
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

     console.log(zipstring, age, gender, tobacco);
    
    try {
      //const response = await fetch(`https://mnw-server.herokuapp.com/weather/${zipstring}/${age}/${gender}/${tobacco}`);
      const response = await fetch(`http://localhost:5000/weather/${zipstring}/${age}/${gender}/${tobacco}`);

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
        console.log(quoteData);
        setQuotes(quoteData);        
        localStorage.setItem('state', quoteData[0].location_base.state);
        getuserPlans();
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
      setIsloading(false);
      setShow(true);
    } finally {
      setIsloading(false);
    }
  };


  const userplanUpdate = async () => {

    try {
      //const response = await fetch(`https://mnw-server.herokuapp.com/weather/${zipcode}/${plan}`);
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
    }
  };

  const handleClickOpen = () => {
    setOpenDialog("updateinfo");
  };

  const handleClose = () => {
    setOpenDialog(null);
    userQuotes();
    
    
    getuserPlans();
    window.location.reload(true);
  };

  const handleChange = (event) => {
    plan = event.target.value;
    setShow(false);
    setIsloading(true);
    

    if(isuser === "Yes"){
      userplanUpdate();
    }else{
      planUpdate();
    }
  };



  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "#f4f5f7",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Container maxWidth="md" >
          
          <Paper elevation={3} sx={{background: "#fff", mt:4,  mb:6, p:2}}>
          <Fade in={openfade}>
            {loading ? (
              <Alert
                severity="info"
                id="update-info"
                color="secondary"
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // background: "#fff",
                }}
                action={
                  <>
                  
                  </>
                }
              >
                {isvisible && (
                <Stack direction="row" spacing={1}>
                  {/* <Typography variant="subtitle2" style={{ textAlign: "left" }}>
                    Showing results for{" "}
                  </Typography> */}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", fontSize: "1.2em" }}
                  >
                    Showing results for {" "} {zipcode}, {st} Age: 65, Gender: Female, Non-Tobacco.
                  </Typography>
                </Stack>
                )}



                {!isvisible && (
                <Stack direction="column">
                  
                  <Typography
                    variant="subtitle2 "
                    style={{ textAlign: "left" }}
                  >
                    Hi {userdata.firstName},
                  </Typography>

                  <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.2em" }}>
                  Showing results for{" "}
                    {userdata.zipcode}, {st}, Age: {userdata.age}, Gender: {userdata.gender}, Tobacco: {userdata.tobacco}.
                  </Typography>

                </Stack>
                )}
              </Alert>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="4em"
                width="100%"
                sx={{ mb: 4 }}
              />
            )}

          </Fade>

            
            {isvisible && (
                  <Stack direction="column" sx={{mt: 3, alignItems: "center", justifyContent: "center"}} spacing={1}>
                  <Typography variant="body1"
                    sx={{ fontWeight: "400", fontSize: "1em" }}>
                    Not you? See your quotes by updating you info.. {" "}
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

            
            </Paper>

        </Container>

        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Grid item xs={3}>
            {loading ? (
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  size="large"
                  color="secondary"
                >
                  Select a Plan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select a Plan"
                  size="large"
                  value={plan}
                  color="secondary"
                  onChange={handleChange}
                  defaultValue="G"
                >
                  {plans.map((plan, i) => (
                    <MenuItem key={i} value={plan}>
                      Plan <b style={{ marginLeft: "5px" }}>{plan}</b>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="4em"
                width="100%"
                sx={{ mb: 2 }}
              />
            )}
          </Grid>

          <Grid item sx={{ ml: 2 }} id="plans_loading">
            {isloading && (
              <Zoom
                in={openzoom}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Alert icon={false} color="grey" variant="filled">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress color="secondary" />
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      sx={{ ml: 2, fontWeight: 500 }}
                    >
                      Finding quotes for you...
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
                <Alert severity="warning" color="grey" variant="filled">
                  <p className="error">
                    No quotes found for selected the plan.
                  </p>
                  
                </Alert>
              </Zoom>
            )}
          </Grid>
        </Container>

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

        {quotes && (
          <Container maxWidth="md" sx={{ mb: 8, mt: 3 }}>
            {quotes.map((quote, i) => (
              <Stack key={i}>
                <Quotecard quote={quote} />
              </Stack>
            ))}
          </Container>
        )}
      </Box>

      <Updateinfo
        open={openDialogName === "updateinfo"}
        onClose={handleClose}
      />
      
    </>
  );
};

export default Plans;
