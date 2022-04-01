//import React from "react";
import Skeleton from "@mui/material/Skeleton";
//import ReactDOM from "react-dom";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";

import image from "../assets/background-img.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import QuoteCard from "../components/quotecard";
import Quoteslist from "../components/quoteslist";
//import axios from "axios";

const BasicTextFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [quotes, setQuotes] = useState([]);
  // const [county, setCounty] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  let zipstring;
  let zipparse;

  const fetchMyAPI = (data) => {
    console.log(data);
    zipparse = JSON.parse(data["zip"]);
    zipstring = JSON.stringify(zipparse);
    getData();
    setError(null);
    setLoading(true);
    // setShow(false);
  };

  const getData = async () => {
    try {
      const response = await fetch(`weather/${zipstring}`);
      if (!response.ok) {
        throw new Error(`(${response.status})`);
      }
      let actualData = await response.json();
      setQuotes(actualData);
      setError(null);
      setLoading(false);
      setShow(true);
    } catch (err) {
      setError(err.message);
      setQuotes(null);
    } finally {
      setLoading(false);
    }
  };

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
      // marginTop: "64px",
      // paddingTop: "48px",
      // paddingBottom: "96px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };

  return (
    <ThemeProvider theme={customtheme}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
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
            <Typography
              maxWidth="sm"
              variant="h4"
              style={{ textAlign: "center", color: "#fff", fontWeight: 600 }}
              sx={{ mb: 2 }}
            >
              Find the Best Medicare Supplement Insurance plans in your area.
            </Typography>
            <Typography
              maxWidth="sm"
              variant="subtitle1"
              style={{ textAlign: "center", color: "#fff", fontWeight: 400 }}
              sx={{ mb: 3 }}
            >
              Medicare Supplement Insurance (Medigap) is extra insurance you can
              buy from a private company that helps pay your share of costs.
            </Typography>
          </Box>
          <Grid container sx={{ justifyContent: "center", mt: 2, mb: 2 }}>
            <Paper
              elevation={4}
              sx={{ p: 3, display: "flex", flexDirection: "column" }}
            >
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(fetchMyAPI)}
                id="zip-input-form"
              >
                <TextField
                  sx={{ mr: 2 }}
                  id="outlined-basic"
                  label="Enter your Zipcode"
                  variant="outlined"
                  type="tel"
                  size="large"
                  color="secondary"
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

                <Button
                  endIcon={<ArrowForwardIcon />}
                  size="large"
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ height: "100%" }}
                >
                  Get Plans
                </Button>
              </form>

              {errors.zip?.type === "pattern" && (
                <p className="error">Zipcode must contain numbers only.</p>
              )}
              {errors.zip?.type === "required" && (
                <p className="error">Enter your Zipcode to view plans.</p>
              )}
              {errors.zip?.type === "minLength" && (
                <p className="error">Enter a valid US Zipcode.</p>
              )}
            </Paper>
          </Grid>
        </Container>

        {loading && (
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            A moment please...
          </Typography>
        )}
        {error && (
          <Typography variant="subtitle1">
            {`OOPS! Something went wrong. Try again later. ${error}`}
          </Typography>
        )}

        {quotes && show && (
          <Container id="quote_cards" maxWidth="md" sx={{ mt: 4, pb: 4 }}>
            {!loading ? (
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center" }}
                sx={{ mb: 3 }}
              >
                Showing results for {""}
                <b>
                  {zipstring}, {quotes.key} Age: 65, Gender: Female, Plan: G,
                  Non-Tobacco
                </b>
              </Typography>
            ) : (
              <Skeleton variant="rectangle" animation="wave" sx={{ mb: 3 }} />
            )}

            <Quoteslist quotes={quotes} />
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default BasicTextFields;
