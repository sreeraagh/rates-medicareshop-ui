import React, { useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import InputMask from "react-input-mask";
import Stepper from "@mui/material/Stepper";
import InputAdornment from "@mui/material/InputAdornment";
import Step from "@mui/material/Step";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import CardMedia from '@mui/material/CardMedia';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useForm,Controller } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import CallIcon from "@mui/icons-material/Call";



export default function Checkout({ open, onClose, prov, plan, premium }) {
  const steps = ["Basic-info", "Address", "Checkout"];
  const isuser = localStorage.getItem("isuser");
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


 useEffect (() => {
  if(userdata && isuser === "Yes"){
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

  

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const onSubmit = (formData, e) => {
    e.preventDefault();

    let checkinfo = formData;
    
    if (Object.keys(checkinfo).length > 0) {
      localStorage.setItem('checkinfo', JSON.stringify(checkinfo));
    }
    
    handleNext();
  };

  const onCheckout = (formData, e) => {
    e.preventDefault();
    setOpensub(!opensub);
    let checkinfo = formData;

    if (Object.keys(checkinfo).length > 0) {
      console.log(formData);
      localStorage.setItem('ischecked', "Yes");
      localStorage.setItem('checkinfo', JSON.stringify(checkinfo));

      let finalcheck = JSON.parse(localStorage.getItem('checkinfo'));


      fetch(`https://hooks.zapier.com/hooks/catch/3556959/bzqc6l0/`, {
        method: "POST",
        body: JSON.stringify({
          "formdata" : finalcheck,
          "carrier" : prov,
          "plan": plan,
          "monthly_premium": premium
        })
        
      })
        .then(response => {
          console.log(response); 
          
        })
        .catch(error  => {
          console.log(error);  
        })

        setTimeout(() => {
          setOpensub(opensub); 
          navigate("../thankyou", {replace: true});
        }, 1000);
    }
    
  };
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(uzip);
  };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  const GetStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            {/* <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography> */}
            <Box
              component="form"
              id="ch-form-st1"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    //value={userdata.firstName}
                    label="First Name"
                    color="secondary"
                    placeholder="Enter Your First Name"
                    autoFocus
                    defaultValue={fname}
                    {...register("firstName", {
                      pattern: {
                        value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
                        message: "Spaces & numbers are not allowed",
                      },
                      required: "First Name is required.",
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Must be less than 20 characters.",
                      },
                    })}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    defaultValue={lname}
                    label="Last Name"
                    color="secondary"
                    placeholder="Enter Your Last Name"
                    {...register("lastName", {
                      pattern: {
                        value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
                        message: "Spaces & numbers are not allowed.",
                      },
                      required: "Last Name is required.",
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Must be less than 20 characters.",
                      },
                    })}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="ui_email"
                    defaultValue={uemail}
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    color="secondary"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address.",
                      },
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                <Controller
    name="phone"
    control={control}
    defaultValue={uphone}
    render={({ field: { onChange, value } }) => (
        <InputMask mask="(999) 999-9999" maskChar="" color="secondary" value={value} onChange={onChange} 
              {...register("phone", { 
              required: "Phone is required.", 
              minLength: { value: 14, message: "Phone number must be 10 digits long.",
              }})}>
            {
                inputProps => (
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
                )
            }
        </InputMask>
    )}
/>
                  
                  
                  {/* <TextField
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+1</InputAdornment>
                      ),
                    }}
                    required
                    fullWidth
                    defaultValue={uphone}
                    type="tel"
                    label="Phone"
                    placeholder="Enter Your Phone no."
                    color="secondary"
                    name="phone"
                    {...register("phone", {
                      required: "Phone is required.",
                      pattern: {
                        value: /^\d{3}\d{3}\d{4}$/,
                        message: "Invalid phone number.",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number must be 10 digits long.",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be less than 10 digits.",
                      },
                    })}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone?.message}
                  /> */}
                </Grid>

                <Grid item xs={12} sm={12} id="uiform-field">
                  <Grid item xs={12} sm={12} sx={{ mb: 2 }} id="dob-label">
                    <FormLabel
                      required
                      id="demo-radio-buttons-group-label"
                      color="secondary"
                    >
                      Date of Birth
                    </FormLabel>
                  </Grid>

                  <Grid container spacing={3} id="ui-form">
                    <Grid item xs={4} sm={4} id="uiform-field-dobm">
                      <FormControl
                        fullWidth
                        required
                        error={Boolean(errors.month)}
                      >
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-helper-label"
                        >
                          Month
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={month}
                          label="Month"
                          name="month"
                          color="secondary"
                          {...register("month", {
                            required: "Month is required.",
                          })}
                          onChange={handleMonthChange}
                          //onChange={e => setAge(e.target.value)}
                        >
                          <MenuItem value={"01"}>January</MenuItem>
                          <MenuItem value={"02"}>February</MenuItem>
                          <MenuItem value={"03"}>March</MenuItem>
                          <MenuItem value={"04"}>April</MenuItem>
                          <MenuItem value={"05"}>May</MenuItem>
                          <MenuItem value={"06"}>June</MenuItem>
                          <MenuItem value={"07"}>July</MenuItem>
                          <MenuItem value={"08"}>August</MenuItem>
                          <MenuItem value={"09"}>September</MenuItem>
                          <MenuItem value={"10"}>October</MenuItem>
                          <MenuItem value={"11"}>November</MenuItem>
                          <MenuItem value={"12"}>December</MenuItem>
                        </Select>
                        <FormHelperText>{errors.month?.message}</FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={4} sm={4} id="uiform-field-dobd">
                      <FormControl
                        fullWidth
                        required
                        error={Boolean(errors.day)}
                      >
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-helper-label"
                        >
                          Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={day}
                          
                          label="Day"
                          name="day"
                          color="secondary"
                          {...register("day", { required: "Day is required." })}
                          onChange={handleDayChange}
                          //onChange={e => setAge(e.target.value)}
                        >
                          <MenuItem value={"01"}>1</MenuItem>
                          <MenuItem value={"02"}>2</MenuItem>
                          <MenuItem value={"03"}>3</MenuItem>
                          <MenuItem value={"04"}>4</MenuItem>
                          <MenuItem value={"05"}>5</MenuItem>
                          <MenuItem value={"06"}>6</MenuItem>
                          <MenuItem value={"07"}>7</MenuItem>
                          <MenuItem value={"08"}>8</MenuItem>
                          <MenuItem value={"09"}>9</MenuItem>
                          <MenuItem value={"10"}>10</MenuItem>
                          <MenuItem value={"11"}>11</MenuItem>
                          <MenuItem value={"12"}>12</MenuItem>
                          <MenuItem value={"13"}>13</MenuItem>
                          <MenuItem value={"14"}>14</MenuItem>
                          <MenuItem value={"15"}>15</MenuItem>
                          <MenuItem value={"16"}>16</MenuItem>
                          <MenuItem value={"17"}>17</MenuItem>
                          <MenuItem value={"18"}>18</MenuItem>
                          <MenuItem value={"19"}>19</MenuItem>
                          <MenuItem value={"20"}>20</MenuItem>
                          <MenuItem value={"21"}>21</MenuItem>
                          <MenuItem value={"22"}>22</MenuItem>
                          <MenuItem value={"23"}>23</MenuItem>
                          <MenuItem value={"24"}>24</MenuItem>
                          <MenuItem value={"25"}>25</MenuItem>
                          <MenuItem value={"26"}>26</MenuItem>
                          <MenuItem value={"27"}>27</MenuItem>
                          <MenuItem value={"28"}>28</MenuItem>
                          <MenuItem value={"29"}>29</MenuItem>
                          <MenuItem value={"30"}>30</MenuItem>
                          <MenuItem value={"31"}>31</MenuItem>
                        </Select>
                        <FormHelperText>{errors.day?.message}</FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={4} sm={4} id="uiform-field-doby">
                      <FormControl
                        fullWidth
                        required
                        error={Boolean(errors.year)}
                      >
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-helper-label"
                        >
                          Year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={year}
                          
                          label="Year"
                          name="year"
                          color="secondary"
                          {...register("year", {
                            required: "Year is required.",
                          })}
                          onChange={handleYearChange}
                          //onChange={e => setAge(e.target.value)}
                        >
                          <MenuItem value={"1960"}>1960</MenuItem>
                          <MenuItem value={"1959"}>1959</MenuItem>
                          <MenuItem value={"1958"}>1958</MenuItem>
                          <MenuItem value={"1957"}>1957</MenuItem>
                          <MenuItem value={"1956"}>1956</MenuItem>
                          <MenuItem value={"1955"}>1955</MenuItem>
                          <MenuItem value={"1954"}>1954</MenuItem>
                          <MenuItem value={"1953"}>1953</MenuItem>
                          <MenuItem value={"1952"}>1952</MenuItem>
                          <MenuItem value={"1951"}>1951</MenuItem>
                          <MenuItem value={"1950"}>1950</MenuItem>
                          <MenuItem value={"1949"}>1949</MenuItem>
                          <MenuItem value={"1948"}>1948</MenuItem>
                          <MenuItem value={"1947"}>1947</MenuItem>
                          <MenuItem value={"1946"}>1946</MenuItem>
                          <MenuItem value={"1945"}>1945</MenuItem>
                          <MenuItem value={"1944"}>1944</MenuItem>
                          <MenuItem value={"1943"}>1943</MenuItem>
                          <MenuItem value={"1942"}>1942</MenuItem>
                          <MenuItem value={"1941"}>1941</MenuItem>
                          <MenuItem value={"1940"}>1940</MenuItem>
                          <MenuItem value={"1939"}>1939</MenuItem>
                          <MenuItem value={"1938"}>1938</MenuItem>
                          <MenuItem value={"1937"}>1937</MenuItem>
                          <MenuItem value={"1936"}>1936</MenuItem>
                          <MenuItem value={"1935"}>1935</MenuItem>
                          <MenuItem value={"1934"}>1934</MenuItem>
                          <MenuItem value={"1933"}>1933</MenuItem>
                          <MenuItem value={"1932"}>1932</MenuItem>
                          <MenuItem value={"1931"}>1931</MenuItem>
                          <MenuItem value={"1930"}>1930</MenuItem>
                        </Select>
                        <FormHelperText>{errors.year?.message}</FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl error={Boolean(errors.gender)}>
                    <FormLabel
                      required
                      id="demo-radio-buttons-group-label"
                      color="secondary"
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="gender"
                      defaultValue={ugender}
                    >
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            color="secondary"
                            {...register("gender", {
                              required: "Choose your Gender.",
                            })}
                          />
                        }
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            color="secondary"
                            {...register("gender", {
                              required: "Choose your Gender.",
                            })}
                          />
                        }
                        label="Male"
                      />
                    </RadioGroup>
                    <FormHelperText style={{ color: "#d32f2f" }}>
                      {errors.gender?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>

              </Grid>



              <Grid item xs={12} >
                    <Box id="chform-btn-wrap">
                    <Button
                      id="uiform-submit"
                      type="submit"
                      fullWidth
                      size="large"
                      color="secondary"
                      variant="contained"
                      
                    >
                      Next
                    </Button>
                    </Box>
                  </Grid>

            </Box>
          </React.Fragment>
        );
      case 1:

      
      
        return (
          <React.Fragment>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >

            <Grid container spacing={3} >
              <Grid item xs={12} md={12} id="add-wrap">
                <TextField
                   name="address1"
                   required
                   fullWidth
                   label="Address 1"
                   color="secondary"
                   multiline
                   rows={1}
                   placeholder="Enter Your Address 1"
                   {...register("address1", {
                     
                     required: "Address 1 is required.",
                     
                   })}
                   error={Boolean(errors.address1)}
                   helperText={errors.address1?.message}
                />
              </Grid>

              <Grid item xs={12} md={12} id="add-wrap">
                <TextField
                  name="address2"
                  required
                  fullWidth
                  label="Address 2"
                  color="secondary"
                  multiline
                  rows={1}
                  placeholder="Enter Your Address 2"
                />
              </Grid>

              <Grid item xs={6} md={6} id="city-wrap">
              <FormControl >
                <TextField
                  name="city"
                  required
                  fullWidth
                  label="City"  
                  color="secondary"
                  // value={city}
                  // onChange={handleCityChange}
                  placeholder="Enter Your City"
                  id="city"
                  {...register("city", {
                    required: "City is required.",
                    pattern: {
                      value: /^([^0-9]*)$/,
                      message: "Enter your City.",
                    },
                    minLength: {
                      value: 2,
                      message: "Enter your City.",
                    },
                  })}
                  error={Boolean(errors.city)}
                  helperText={errors.city?.message}
                  
                />
                </FormControl >
              </Grid>

            
              <Grid item xs={3} md={3} id="zip-wrap">
              <FormControl >
                <TextField
                   required
                   fullWidth
                   name="zipcode"
                   id="zipcode"
                   label="Zip code"
                   defaultValue={uzip}
                  //  onChange={handleZipChange}
                   inputProps={{ maxLength: 5 }}
                   placeholder="Enter Zip code"
                   color="secondary"
                   type="tel"
                   {...register("zipcode", {
                     required: "Zipcode is required",
                     pattern: { value: /^(?!00000)\d{5}(?:[-\s]\d{4})?$/, message: "Enter a valid US Zip code" },
                     minLength: {
                       value: 5,
                       message: "Zipcode must be 5 digits long.",
                     },
                     maxLength: {
                       value: 5,
                       message: "Zipcode must be less than 5 digits.",
                     },
                     // validate: (value) => value === '0' || 'Enter a valid US Zip code',
                   })}
                   
                   error={Boolean(errors.zipcode)}
                   helperText={errors.zipcode?.message}
                />
                </FormControl >
              </Grid>

              <Grid item xs={3} md={3} id="state-wrap">
                <TextField
                  required
                  id="state"
                  label="State"
                  name="state"
                  fullWidth
                  color="secondary"
                  placeholder="Enter Your State"
                  defaultValue={usstate}
                  inputProps={{ maxLength: 2 }}
                  {...register("state", {
                    required: "State is required.",
                    minLength: {
                      value: 2,
                      message: "Enter your State. (eg. CA,NY,FL)",
                    },
                    pattern: { value:/^([^0-9]*)$/, message: "Enter your State. (eg. CA,NY,FL)" },
                  })}
                  error={Boolean(errors.state)}
                  helperText={errors.state?.message}
                />
              </Grid>

            </Grid>

                <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} id="chform-btn-wrap">
                  
                    {/* <Button size="large" color="secondary" sx={{mr:2}} onClick={handleBack} >
                      Back
                    </Button> */}
                  

                  <Button
                    id="chform-btn"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    Next
                  </Button>
                </Box>
                </Grid>

                </Box>
          </React.Fragment>
        );
      case 2:
        return (
          
            <Box
            id="ch-form-st3"
              component="form"              
              noValidate
              onSubmit={handleSubmit(onCheckout)}
            >

            <Grid item xs={12} sm={12} sx={{ mb: 3, mt: "10px" }} id="hq-wrap">
              <FormControl error={Boolean(errors.hq1)}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  color="secondary"
                >
                  Are you within 6 months of enrolling into Medicare Part B or
                  turning 65?
                </FormLabel>
                <RadioGroup
                  id="hq-wrap"
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="hq1"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio color="secondary"
                    {...register("hq1", {
                      required: "Enrollment status is required.",
                    })}/>}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio color="secondary" {...register("hq1", {
                      required: "Enrollment status is required.",
                    })}/>}
                    label="No"
                  />
                </RadioGroup>
                <FormHelperText id="hq1-helper" style={{ color: "#d32f2f" }}>
                      {errors.hq1?.message}
                    </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl error={Boolean(errors.hq2)}>
                <FormLabel
                  color="secondary"
                  id="demo-radio-buttons-group-label"
                >
                  Do you have any of the following medical conditions?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  id="hq-wrap"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="COPD, emphysema, pulminary Fibrosis"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })}/>}
                    label="COPD, emphysema, pulminary Fibrosis"
                  />
                  <FormControlLabel
                    value="Insulin dependent diabetes"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })} />}
                    label="Insulin dependent diabetes"
                  />
                  <FormControlLabel
                    value="History of cancer, not including skin cancer"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })}/>}
                    label="History of cancer, not including skin cancer"
                  />
                  <FormControlLabel
                    value="Rheumatoid or psoriatic arthritis"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })}/>}
                    label="Rheumatoid or psoriatic arthritis"
                  />
                  <FormControlLabel
                    value="Artery disease or congestive heart failure"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })}/>}
                    label="Artery disease or congestive heart failure"
                  />
                  <FormControlLabel
                    value="None of the above"
                    control={<Radio color="secondary" {...register("hq2", {
                      required: "Medical condition is required.",
                    })}/>}
                    label="None of the above"
                  />
                </RadioGroup>
                <FormHelperText style={{ color: "#d32f2f" }}>
                      {errors.hq2?.message}
                    </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} id="chform-btn-wrap-last">
                  
                 
                    {/* <Button size="large" color="secondary" sx={{mr:2}} onClick={handleBack} >
                      Back
                    </Button> */}
                  

                  <Button
                    id="chform-btn"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Checkout
                  </Button>
                </Box>
                </Grid>

          </Box>
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  // const handleSubmit = (e, formData) => {
  //   e.preventDefault();
  // }

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"} id="ui-dial">
      <Box id="ui-chform">
        <Container component="main">
          <Box variant="outlined" sx={{ my: 3 }} id="ch-box">
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", mb: 3 }}
                    spacing={2}
                  >
                    <Typography variant="h5" id="tq-icon">
                      <b>🙌</b>
                    </Typography>
                    <Typography variant="h5" id="tq-head">
                      <b>Thank you for your inquiry to MedicareShop.</b>
                    </Typography>
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{ alignItems: "center", mb: 3 }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="common.black"
                      sx={{ fontWeight: "500" }}
                      gutterBottom
                      id="tq-sub1"
                    >
                      We have recieved your carrier and plan selection and are
                      working to finalize your application.
                    </Typography>
                    <Typography variant="subtitle1" id="tq-sub2">
                      For your protection, an agent licensed in your state will
                      call you at the number provided to verify your
                      information. Our office hours are 9am-6pm eastern.
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
                    sx={{ mt: 3, mb: 3, alignItems: "center" }}
                    spacing={2}
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

                  <Stack direction="row" sx={{ justifyContent: "center" }}>
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
                  </Stack>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === steps.length - 3 && (
                    <Stack direction="row" id="ui-head-stack">
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", lineHeight: "1.4" }}
                        id="ui-head"
                      >
                        To lock in your rate, fill in your basic information.
                      </Typography>
                      <CloseIcon
                        onClick={onClose}
                        color="error"
                        id="ui-close"
                      />
                    </Stack>
                  )}

                  {activeStep === steps.length - 2 && (
                    <Stack direction="row" id="ui-head-stack">
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", lineHeight: "1.4" }}
                        id="ui-head"
                      >
                        Please enter your residential address below. Your mailing address can be updated later in the form.
                      </Typography>
                      <CloseIcon
                        onClick={onClose}
                        color="error"
                        id="ui-close"
                      />
                    </Stack>
                  )}

                  {activeStep === steps.length - 1 && (
                    <Stack direction="row" id="ui-head-stack">
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", lineHeight: "1.4" }}
                        id="ui-head"
                      >
                        Lastly, tell us a bit about your health and enrollment
                        status.
                      </Typography>
                      <CloseIcon
                        onClick={onClose}
                        color="error"
                        id="ui-close"
                      />
                    </Stack>
                  )}

                  <Stepper
                    id="ui-stepper"
                    activeStep={activeStep}
                    sx={{ pt: 4, pb: 5 }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {GetStepContent(activeStep)}
                </React.Fragment>
              )}
            </React.Fragment>
          </Box>
        </Container>

        {/* {activeStep !== steps.length && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:3, mb:3 }} id="chform-btn-wrap">
                  {activeStep !== 0 && (
                 
                    <Button size="large" color="secondary" sx={{mr:2}} onClick={handleBack} >
                      Back
                    </Button>
                  )}

                  <Button
                    id="chform-btn"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={onSubmit}
                  >
                    {activeStep === steps.length - 1 ? 'Checkout' : 'Next'}
                  </Button>
                </Box>
              )} */}

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
