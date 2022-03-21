//import React from "react";
import React, { useState, useRef } from "react";

//import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import customtheme from "../assets/theme";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import QuoteCard from "../components/quotecard";
import image from "../assets/background-img.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import axios from "axios";

const BasicTextFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let zipParse;
  let zipString;
  let st;
  let state;

  const [zipinfo, setZipinfo] = useState("");
  const [zipstate, setZipstate] = useState("");

  const [quotes, setQuotes] = useState([]);

  const myRef = useRef();

  async function position() {
    const api_url = `https://mnw-server.herokuapp.com/weather/${zipString}`;
    const response = await fetch(api_url);
    const quotedata = await response.json();
    console.log(response);
    console.log(quotedata);
    setQuotes(quotedata);

    const elem = document.querySelector("#quote_cards");
    elem.style.display = "block";
    window.scrollTo({
      behaviour: "smooth",
      top: myRef.current.offsetTop - 30,
    });
  }

  const onSubmit = (data) => {
    console.log(data);

    zipParse = JSON.stringify(data["zip"]);
    zipString = JSON.parse(zipParse);

    setZipinfo(zipString);

    console.log(JSON.parse(zipString));

    // let ziped = data[].toString();
    // console.log(ziped);
    getState(zipString);
    position();
  };

  function getState(zipString) {
    /* Ensure param is a string to prevent unpredictable parsing results */
    if (typeof zipString !== "string") {
      console.log("Must pass the zipcode as a string.");
      return;
    }

    /* Ensure we have exactly 5 characters to parse */
    if (zipString.length !== 5) {
      console.log("Must pass a 5-digit zipcode.");
      return;
    }

    /* Ensure we don't parse strings starting with 0 as octal values */
    const zipcode = parseInt(zipString, 10);

    /* Code cases alphabetized by state */
    if (zipcode >= 35000 && zipcode <= 36999) {
      st = "AL";
      state = "Alabama";
    } else if (zipcode >= 99500 && zipcode <= 99999) {
      st = "AK";
      state = "Alaska";
    } else if (zipcode >= 85000 && zipcode <= 86999) {
      st = "AZ";
      state = "Arizona";
    } else if (zipcode >= 71600 && zipcode <= 72999) {
      st = "AR";
      state = "Arkansas";
    } else if (zipcode >= 90000 && zipcode <= 96699) {
      st = "CA";
      state = "California";
    } else if (zipcode >= 80000 && zipcode <= 81999) {
      st = "CO";
      state = "Colorado";
    } else if (
      (zipcode >= 6000 && zipcode <= 6389) ||
      (zipcode >= 6391 && zipcode <= 6999)
    ) {
      st = "CT";
      state = "Connecticut";
    } else if (zipcode >= 19700 && zipcode <= 19999) {
      st = "DE";
      state = "Delaware";
    } else if (zipcode >= 32000 && zipcode <= 34999) {
      st = "FL";
      state = "Florida";
    } else if (
      (zipcode >= 30000 && zipcode <= 31999) ||
      (zipcode >= 39800 && zipcode <= 39999)
    ) {
      st = "GA";
      state = "Georgia";
    } else if (zipcode >= 96700 && zipcode <= 96999) {
      st = "HI";
      state = "Hawaii";
    } else if (zipcode >= 83200 && zipcode <= 83999) {
      st = "ID";
      state = "Idaho";
    } else if (zipcode >= 60000 && zipcode <= 62999) {
      st = "IL";
      state = "Illinois";
    } else if (zipcode >= 46000 && zipcode <= 47999) {
      st = "IN";
      state = "Indiana";
    } else if (zipcode >= 50000 && zipcode <= 52999) {
      st = "IA";
      state = "Iowa";
    } else if (zipcode >= 66000 && zipcode <= 67999) {
      st = "KS";
      state = "Kansas";
    } else if (zipcode >= 40000 && zipcode <= 42999) {
      st = "KY";
      state = "Kentucky";
    } else if (zipcode >= 70000 && zipcode <= 71599) {
      st = "LA";
      state = "Louisiana";
    } else if (zipcode >= 3900 && zipcode <= 4999) {
      st = "ME";
      state = "Maine";
    } else if (zipcode >= 20600 && zipcode <= 21999) {
      st = "MD";
      state = "Maryland";
    } else if (
      (zipcode >= 1000 && zipcode <= 2799) ||
      zipcode === 5501 ||
      zipcode === 5544
    ) {
      st = "MA";
      state = "Massachusetts";
    } else if (zipcode >= 48000 && zipcode <= 49999) {
      st = "MI";
      state = "Michigan";
    } else if (zipcode >= 55000 && zipcode <= 56899) {
      st = "MN";
      state = "Minnesota";
    } else if (zipcode >= 38600 && zipcode <= 39999) {
      st = "MS";
      state = "Mississippi";
    } else if (zipcode >= 63000 && zipcode <= 65999) {
      st = "MO";
      state = "Missouri";
    } else if (zipcode >= 59000 && zipcode <= 59999) {
      st = "MT";
      state = "Montana";
    } else if (zipcode >= 27000 && zipcode <= 28999) {
      st = "NC";
      state = "North Carolina";
    } else if (zipcode >= 58000 && zipcode <= 58999) {
      st = "ND";
      state = "North Dakota";
    } else if (zipcode >= 68000 && zipcode <= 69999) {
      st = "NE";
      state = "Nebraska";
    } else if (zipcode >= 88900 && zipcode <= 89999) {
      st = "NV";
      state = "Nevada";
    } else if (zipcode >= 3000 && zipcode <= 3899) {
      st = "NH";
      state = "New Hampshire";
    } else if (zipcode >= 7000 && zipcode <= 8999) {
      st = "NJ";
      state = "New Jersey";
    } else if (zipcode >= 87000 && zipcode <= 88499) {
      st = "NM";
      state = "New Mexico";
    } else if (
      (zipcode >= 10000 && zipcode <= 14999) ||
      zipcode === 6390 ||
      zipcode === 501 ||
      zipcode === 544
    ) {
      st = "NY";
      state = "New York";
    } else if (zipcode >= 43000 && zipcode <= 45999) {
      st = "OH";
      state = "Ohio";
    } else if (
      (zipcode >= 73000 && zipcode <= 73199) ||
      (zipcode >= 73400 && zipcode <= 74999)
    ) {
      st = "OK";
      state = "Oklahoma";
    } else if (zipcode >= 97000 && zipcode <= 97999) {
      st = "OR";
      state = "Oregon";
    } else if (zipcode >= 15000 && zipcode <= 19699) {
      st = "PA";
      state = "Pennsylvania";
    } else if (zipcode >= 300 && zipcode <= 999) {
      st = "PR";
      state = "Puerto Rico";
    } else if (zipcode >= 2800 && zipcode <= 2999) {
      st = "RI";
      state = "Rhode Island";
    } else if (zipcode >= 29000 && zipcode <= 29999) {
      st = "SC";
      state = "South Carolina";
    } else if (zipcode >= 57000 && zipcode <= 57999) {
      st = "SD";
      state = "South Dakota";
    } else if (zipcode >= 37000 && zipcode <= 38599) {
      st = "TN";
      state = "Tennessee";
    } else if (
      (zipcode >= 75000 && zipcode <= 79999) ||
      (zipcode >= 73301 && zipcode <= 73399) ||
      (zipcode >= 88500 && zipcode <= 88599)
    ) {
      st = "TX";
      state = "Texas";
    } else if (zipcode >= 84000 && zipcode <= 84999) {
      st = "UT";
      state = "Utah";
    } else if (zipcode >= 5000 && zipcode <= 5999) {
      st = "VT";
      state = "Vermont";
    } else if (
      (zipcode >= 20100 && zipcode <= 20199) ||
      (zipcode >= 22000 && zipcode <= 24699) ||
      zipcode === 20598
    ) {
      st = "VA";
      state = "Virginia";
    } else if (
      (zipcode >= 20000 && zipcode <= 20099) ||
      (zipcode >= 20200 && zipcode <= 20599) ||
      (zipcode >= 56900 && zipcode <= 56999)
    ) {
      st = "DC";
      state = "Washington DC";
    } else if (zipcode >= 98000 && zipcode <= 99499) {
      st = "WA";
      state = "Washington";
    } else if (zipcode >= 24700 && zipcode <= 26999) {
      st = "WV";
      state = "West Virginia";
    } else if (zipcode >= 53000 && zipcode <= 54999) {
      st = "WI";
      state = "Wisconsin";
    } else if (zipcode >= 82000 && zipcode <= 83199) {
      st = "WY";
      state = "Wyoming";
    } else {
      st = "none";
      state = "none";
      console.log("No state found matching", zipcode);
      console.log(state);
    }

    console.log(st);
    setZipstate(st);
    //return st;
    return st;
  }

  const styles = {
    paperContainer: {
      background: `url(${image}) rgba(0,0,0,0.7)`,
      backgroundBlendMode: "multiply",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      maxWidth: "100%",
      marginTop: "64px",
      paddingTop: "48px",
      paddingBottom: "96px",
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
        </Container>

        <Grid
          container
          sx={{ justifyContent: "center", marginTop: "-58px", mb: 2 }}
        >
          <Paper
            elevation={4}
            sx={{ p: 3, display: "flex", flexDirection: "column" }}
          >
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                sx={{ mr: 2 }}
                id="outlined-basic"
                label="Enter your Zipcode"
                variant="outlined"
                type="number"
                size="large"
                color="secondary"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 5);
                }}
                // InputLabelProps={{ shrink: true }}
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
              <p className="error">Zipcode must contain only</p>
            )}
            {errors.zip?.type === "required" && (
              <p className="error">Enter your Zipcode to view plans.</p>
            )}
            {errors.zip?.type === "minLength" && (
              <p className="error">Enter a valid US Zipcode.</p>
            )}
          </Paper>
        </Grid>

        <Container
          ref={myRef}
          id="quote_cards"
          maxWidth="md"
          sx={{ mt: 4, pb: 4, display: "none" }}
        >
          <Typography
            variant="subtitle1"
            style={{ textAlign: "left" }}
            sx={{ mb: 2 }}
          >
            Showing results for{" "}
            <b style={{ textDecoration: "underline" }}>
              {zipinfo}, {zipstate}, Age: 65, Gender: Female, Plan: G,
              Non-Tobacco
            </b>
          </Typography>

          {quotes.map((quote, i) => (
            <Stack key={i}>
              <QuoteCard quote={quote} />
            </Stack>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BasicTextFields;
