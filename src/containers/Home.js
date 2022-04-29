import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
//import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import image from "../assets/background-img.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from "@mui/material/CircularProgress";
import Zoom from "@mui/material/Zoom";
import ResponsiveAppBarT from "../components/AppBarT";


const Home = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const ischecked = localStorage.getItem("ischecked");

  let open = true;
  let zipstring;


  useEffect(() => {
    const user = localStorage.getItem("isuser");

    if(ischecked === "Yes"){
      navigate("/thankyou");
    }

    if (user === "Yes") {
      navigate("/plans");
    } else{
      localStorage.setItem("isuser", "No");
    }    
    if (user === "" || user === null || user === undefined) {
      localStorage.setItem("isuser", "No");
    }
    
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  
  const fetchMyAPI = (data) => {
    zipstring = data["zip"];
    getQuotes();
    setIsloading(true);
    setShow(false);
  };

  const getQuotes = async () => {
    try {
      const response = await fetch(`https://mnw-server.herokuapp.com/weather/${zipstring}`);
      //const response = await fetch(`http://localhost:5000/weather/${zipstring}`);

      

      if (!response.ok) {
        throw new SyntaxError("Oops! Something went wrong. Try again later.");
      }

      let quoteData = await response.json();

      if (response.ok && quoteData.status === "error") {
        throw new Error(
          `Enter a valid US Zip5 code to get quotes in your area.`
        );
      }

      if (response.ok) {
        
        setShow(false);
        
        sessionStorage.setItem("plans", JSON.stringify(quoteData));
        sessionStorage.setItem("zipcode", zipstring);
        sessionStorage.setItem("state", quoteData[0].location_base.state);
        
        // navigate("../plans", {
          //     state: { quoteData, zipstring, replace: true },
          // });
          
          
        }

        setTimeout(() => {
          setIsloading(false);  
          navigate("../plans", {replace: true});
        }, 500);

      } catch (err) {
      setError(err.message);
      console.log(err);
      setIsloading(false);
      setShow(true);
    } finally {
      setIsloading(false);
      
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);
    return () => clearTimeout(timer);

  }, []);



  const styles = {
    paperContainer: {
      background: `url(${image}) rgba(0,0,0,0.7)`,
      backgroundBlendMode: "multiply",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };

  return (
<>
    <ResponsiveAppBarT/>
    <Box
      component="main"
      sx={{
        backgroundColor: "#f5f5f5",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        
      }}
    >
      <Container style={styles.paperContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: -4,
          }}
        >
          {loading ? (
            <Typography
              id="lp-head"
              maxWidth="sm"
              variant="h4"
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: 600,
              }}
              sx={{ mb: 2 }}
            >
              Find the Best Medicare Supplement Insurance plans in your area.
            </Typography>
          ) : (
            <Skeleton
              variant="rectangle"
              height="5em"
              width="50%"
              animation="wave"
              color="black"
              sx={{ mb: 2 }}
            />
          )}

          {loading ? (
            <Typography
            id="lp-para"
              maxWidth="sm"
              variant="subtitle1"
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: 400,
              }}
              sx={{ mb: 3 }}
            >
              Medicare Supplement Insurance (Medigap) is extra insurance you can
              buy from a private company that helps pay your share of costs.
            </Typography>
          ) : (
            <Skeleton
              variant="rectangle"
              animation="wave"
              height="3em"
              width="30%"
              sx={{ mb: 3 }}
            />
          )}
        </Box>
        <Grid container sx={{ justifyContent: "center", mt: 2, mb: 2 }}>
          <Paper
          id="lp-formwrap"
            elevation={4}
            sx={{ p: 3, display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(fetchMyAPI)}
                id="zip-input-form"
                style={{ display: "flex" }}
              >
                <Grid item xs={6} sx={{ mr: 2 }}>
                  {loading ? (
                    <TextField
                      id="home-zip-input"
                      label="Zip Code"
                      placeholder="Enter your Zip Code"
                      variant="outlined"
                      type="tel"
                      size="large"
                      color="secondary"
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><PinDropIcon sx={{color:"#bbb"}} /></InputAdornment>,
                      }}
                      inputProps={{
                        maxLength: 5,
                        inputMode: "numeric",
                      }}
                      {...register("zip", {
                        required: true,
                        pattern: /^[0-9]{5}$/,
                        minLength: 5,
                      })}
                    />
                  ) : (
                    <Skeleton variant="rectangle" animation="wave" width="100%">
                      <TextField />
                    </Skeleton>
                  )}
                </Grid>

                <Grid id="lp-formbtn" item xs={6}>
                  {loading ? (
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      size="large"
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{ height: "100%", width: "100%" }}
                    >
                      Get Plans
                    </Button>
                  ) : (
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      height="100%"
                      width="100%"
                    >
                      <Button />
                    </Skeleton>
                  )}
                </Grid>
              </form>
            </Box>
          </Paper>
        </Grid>

        <Box
          id="act_wrap"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {errors.zip?.type === "pattern" && (
            <Zoom
              in={open}
              sx={{ display: "flex", alignItems: "center", mv: 1 }}
            >
              <Alert severity="warning" color="grey" variant="filled">
                <Typography className="error">Zip Code must contain numbers only.</Typography>
              </Alert>
            </Zoom>
          )}
          {errors.zip?.type === "required" && (
            <Zoom
              in={open}
              sx={{ display: "flex", alignItems: "center", mv: 1 }}
            >
              <Alert severity="warning" color="grey" variant="filled">
                <Typography className="error">
                  Enter your Zip Code to get quotes.
                </Typography>
              </Alert>
            </Zoom>
          )}
          {errors.zip?.type === "minLength" && (
            <Zoom
              in={open}
              sx={{ display: "flex", alignItems: "center", mv: 1 }}
            >
              <Alert severity="warning" color="grey" variant="filled">
                <Typography className="error">Zip Code must be 5 digit long.</Typography>
              </Alert>
            </Zoom>
          )}

          {error && show && (
            <Zoom in={open} sx={{ display: "flex", alignItems: "center" }}>
              <Alert severity="warning" color="grey" variant="filled">
                <Typography variant="subtitle2" sx={{fontSize: "16px"}}  color="#d32f2f">
                  {`${error}`}
                </Typography>
              </Alert>
            </Zoom>
          )}

          {isloading && (
            <Zoom in={open} sx={{ display: "flex", alignItems: "center" }} id="lp-loader">
              <Alert icon={false} color="grey" variant="filled">
                <Box sx={{ display: "flex", alignItems: "center", color: "#000" }}>
                  <CircularProgress color="inherit" />
                  <Typography
                    variant="subtitle1"
                    color="common.black"
                    sx={{ ml: 2, fontWeight: 500 }}
                  >
                    Finding the best quotes in your area...
                  </Typography>
                </Box>
              </Alert>
            </Zoom>
          )}
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default Home;
