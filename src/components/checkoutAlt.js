import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import InputMask from "react-input-mask";
import Stepper from "@mui/material/Stepper";

import Step from "@mui/material/Step";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import CardMedia from '@mui/material/CardMedia';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useForm, Controller } from "react-hook-form";
import Timer from "./timer";


export default function CheckoutAlt({ open, onClose, prov, plan, premium }) {
 
  const isuser = localStorage.getItem("isuser");
  const userplan = localStorage.getItem("plan");
  const usstate = localStorage.getItem("state");
  const userdata = JSON.parse(localStorage.getItem("user"));

  const [opensub, setOpensub] = useState(false);
  const navigate = useNavigate();
  // if( isuser=== "Yes") {
  //   setUserdata(JSON.parse(localStorage.getItem("user")));
  // }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [uemail, setUemail] = React.useState("");
  const [uphone, setUphone] = React.useState("");
  const [ugender, setUgender] = React.useState("");
  const [uzip, setUzip] = React.useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (userdata && isuser === "Yes") {
      setFname(userdata.firstName);
      setLname(userdata.lastName);
      setUemail(userdata.email);
      setUphone(userdata.phone);
      setUgender(userdata.gender);
      setUzip(userdata.zipcode);
      setMonth(userdata.month);
      setDay(userdata.day);
      setYear(userdata.year);
    }
  }, []);



  const onCheckout = (formData, e) => {
    e.preventDefault();
    setOpensub(!opensub);
    let checkinfo = formData;

    if (Object.keys(checkinfo).length > 0) {
      console.log(formData);
      localStorage.setItem("ischecked", "Yes");
      localStorage.setItem("checkinfo", JSON.stringify(checkinfo));

      let finalcheck = JSON.parse(localStorage.getItem("checkinfo"));

      console.log(checkinfo);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "checkoutClick",
        value: checkinfo,
         firstName: fname,
         lastName: lname,
         email: uemail,
         phone: uphone,
         gender: ugender,
         zipcode: uzip,
         month: month,
         day: day,
         year: year,
        carrier: prov,
        plan: userplan,
        monthly_premium: premium,
      });

      fetch(`https://hooks.zapier.com/hooks/catch/3556959/bzqc6l0/`, {
        method: "POST",
        body: JSON.stringify({
          formdata: finalcheck,
firstName: fname,
lastName: lname,
email: uemail,
phone: uphone,
gender: ugender,
zipcode: uzip,
month: month,
day: day,
year: year,
          carrier: prov,
          plan: userplan,
          monthly_premium: premium,
        }),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      setTimeout(() => {
        navigate("../thankyou", { replace: true });
      }, 1000);



    }
  };


  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"} id="ui-dial">
      <Box id="ui-chform">
        <Container component="main">
          <Box variant="outlined" sx={{ my: 3 }} id="ch-box" component="form" noValidate onSubmit={handleSubmit(onCheckout)}>

          
              <Grid container >
                <Stack direction="column" sx={{mb:2, alignItems: "center"}}>
                  <Stack direction="row" id="ui-head-stack" sx={{ mb: 6, width: "100%"}}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", lineHeight: "1.4" }}
                        id="ui-head"
                      >
                        You are one click away from locking in your rate
                      </Typography>
                      <CloseIcon
                        onClick={onClose}
                        color="error"
                        id="ui-close"
                      />
                      
                    </Stack>

                    <Grid item xs={12} sm={8} sx={{width: "100%"}}>
                      <Timer/>
                    </Grid>

                  <Grid item xs={12} sm={6} sx={{width: "100%"}}>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue={uphone}
                    render={({ field: { onChange, value } }) => (
                      <InputMask
                        mask="(999) 999-9999"
                        maskChar=""
                        color="secondary"
                        value={value}
                        onChange={onChange}
                        {...register("phone", {
                          required: "Phone is required.",
                          minLength: {
                            value: 14,
                            message: "Phone number must be 10 digits long.",
                          },
                        })}
                      >
                        {(inputProps) => (
                          <TextField
                            label="Phone"
                            variant="outlined"
                            type="tel"
                            fullWidth
                            required
                            {...inputProps}
                            error={Boolean(errors.phone)}
                            helperText={errors.phone?.message}
                          />
                        )}
                      </InputMask>
                    )}
                  />
                </Grid>
               
                <Grid xs={12} sm={6} sx={{textAlign: "center"}}>
                <Button
                    id="uiform-submit"
                    type="submit"
                    fullWidth
                    size="large"
                    color="secondary"
                    sx={{mt:2, mb:2}}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Lock-In Rate
                  </Button>
                  <Typography variant="caption" sx={{textAlign: "center"}}>                        
                  Lock-in rate subject to eligibility.
                  </Typography>
                  
                </Grid>
                </Stack>
                </Grid>
          </Box>
          
        </Container>

      
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={opensub}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <CircularProgress color="inherit" />
            <Typography variant="body1" sx={{ ml: 2 }}>
              Saving your info..
            </Typography>
          </Stack>
        </Backdrop>
      </Box>
    </Dialog>
  );
}
