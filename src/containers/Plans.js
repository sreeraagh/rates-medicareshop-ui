import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";
import { useLocation } from "react-router-dom";
//import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
// import image from "../assets/background-img.jpg";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Quotecard from "../components/quotecard";
//import Quoteslist from "../components/quoteslist";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CheckoutForm from "../components/checkoutform";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Skeleton from "@mui/material/Skeleton";

const Plans = () => {
  const { state } = useLocation();
  
  const [quotes, setQuotes] = useState([]);
  const [zipcode, setZipcode] = useState(null);
  const [county, setCounty] = useState(null);
  const navigate = useNavigate();



  
  useEffect(() => {
    setQuotes(state.plans);
    
    if (!state.zipstring) {
      navigate("../#");
    } else{
      setZipcode(state.zipstring);
    }
    setCounty(state.plans[0].location_base.state);
  }, [ state ]);

 let openfade = true; 

const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
  

  // const [plans, setPlans] = useState([]);
  // const [show, setShow] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getPlans = async () => {
  //     try {
  //       const response = await fetch(`weather/plans/${zipcode}/${county}`);
  //       if (!response.ok) {
  //         throw new Error(`(${response.status})`);
  //       }
  //       let actualplans = await response.json();
  //       setPlans(actualplans);
  //       console.log(actualplans);
  //       console.log(zipcode);
  //       console.log(county);
  //     } catch (err) {
  //       setError(err.message);
  //       setPlans(null);
  //     } finally {
  //       setShow(true);
  //     }
  //   };
  //   getPlans();
  // }, [zipcode, county]);

  //console.log(plans);

  const [plan, setPlan] = useState([]);

  const handleChange = (event) => {
    setPlan(event.target.value);
  };


	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);


  return (
    <ThemeProvider theme={customtheme}>
      <Box
        component="main"
        sx={{
          backgroundColor: "#f4f5f7",
          flexGrow: 1,
          // height: "100vh",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >

      <Container maxWidth="md">
        <Fade in={openfade} >

        {loading ? (
          
                  <Alert severity="info" id="update-info"  color="secondary" variant="filled" sx={{display: "flex", alignItems: "center", mb: 4, background: "#000"}}
                  action={
                    <Button
                      startIcon={<BorderColorOutlinedIcon />}
                      color="inherit"
                      sx={{color: "#000", background: "#fff"}}
                      size="large"
                      variant="contained"
                      onClick={handleClickOpen}    
                    >
                  
                     Update my Info
                    </Button>
                  }
                  >
                
                            
                <Stack direction="column" >
                <Typography
                variant="subtitle2"
            style={{ textAlign: "left" }}
            >
            Showing results for{" "}
          </Typography>
          <Typography  variant="body1" sx={{fontWeight: "600", fontSize: "1.2em"}}>
              {zipcode}, {county} Age: 65, Gender: Female,
              Non-Tobacco.
            </Typography>
            </Stack>

          
                  </Alert>

                  ) : (
						<Skeleton
							variant="rectangle"
							animation="wave"
							height="4em"
							width="100%"
              sx={{mb:4}}
						/>
					)}

          </Fade>
          </Container>


        <Container maxWidth="md">
            <Grid item xs={3} sx={{mb:2}}>
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
                  color="secondary"
                  onChange={handleChange}
                  defaultValue={10}
                >
                  {/* {plans.map((plan, i) => (
                    <MenuItem key={i} value={plan}>
                      {plan}
                    </MenuItem>
                  ))} */}
                  <MenuItem value={10}>Plan A</MenuItem>
                  <MenuItem value={20}>Plan B</MenuItem>
                  <MenuItem value={30}>Plan C</MenuItem>
                  <MenuItem value={40}>Plan D</MenuItem>
                  <MenuItem value={50}>Plan E</MenuItem>
                </Select>
              </FormControl>
              
            ) : (
              <Skeleton
                variant="rectangle"
                animation="wave"
                height="4em"
                width="100%"
                sx={{mb:2}}
              />
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
      

        <Container maxWidth="md">

        

          

          {quotes.map((quote, i) => (
            <Stack key={i}>
              <Quotecard quote={quote} />
            </Stack>
          ))}
        </Container>


			<Dialog open={open} onClose={handleClose}>
				<CheckoutForm />
			</Dialog>

      </Box>
    </ThemeProvider>
  );
};

export default Plans;
