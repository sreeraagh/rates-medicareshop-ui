import React, { useState, useEffect  } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import CardMedia from '@mui/material/CardMedia';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from '@mui/material/FormHelperText';
import CallIcon from '@mui/icons-material/Call';

export default function Checkout({open, onClose}) {

const steps = ['Basic-info', 'Address', 'Checkout'];
const [userdata, setUserdata] = useState({});
const isuser =  localStorage.getItem('isuser');
const uage =  localStorage.getItem('age');

// const [checked, setChecked] = React.useState(true);

// const [nchecked, setNchecked] = React.useState(true);
// const [disabled, setDisabled] = React.useState(false);
// const [ndisabled, setNdisabled] = React.useState(false);

// const handleChange = (event) => {
//   setChecked(event.target.checked);
//   if(checked){
//     setNdisabled(false);
//     setNchecked(false);
//   }else{
//     setNdisabled(true);
//   }
// };

// const handleNChange = (event) => {
//   setNchecked(event.target.checked);
//   if(nchecked){
//     setDisabled(false);
//     setChecked(false);
//   }else{
//     setDisabled(true);
//   }
// };



useEffect(() => {
  if(isuser === "Yes"){
    let ss = localStorage.getItem('state');
    console.log(ss);
    setUserdata(JSON.parse(localStorage.getItem('user')));
  }
  
}, []);

const usstate =  localStorage.getItem('state');

const GetStepContent = (step) => {
  
    switch (step) {
      case 0:
        return(
          <React.Fragment>
          {/* <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography> */}
  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="firstName"
                label="First Name"
                fullWidth
                color="secondary"
                value={userdata.firstName}
                InputLabelProps={{ shrink: true,  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="lastName"
                label="Last Name"
                fullWidth
                color="secondary"
                value={userdata.lastName}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                color="secondary"
                value={userdata.phone}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                color="secondary"
                value={userdata.email}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
         
            
  
            <Grid item xs={12} sm={6} id="ch-gender">
              <TextField
                id="gender"
                name="gender"
                label="Gender"
                fullWidth
                color="secondary"
                value={userdata.gender}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
         
            <Grid item xs={12} sm={6} id="ch-age">
              <TextField
                id="age"
                name="age"
                label="Age"
                fullWidth
                color="secondary"
                value={uage}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
  
          </Grid>
        </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="zip"
                label="Zipcode"
                name="age"
                fullWidth
                color="secondary"
                value={userdata.zipcode}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
  
            {/* <Grid item xs={4} md={4}>
              <TextField
                required
                id="city"
                label="City"
                name="city"
                fullWidth
                color="secondary"
                value={usstate}
                InputLabelProps={{ shrink: true, readOnly: true, }}
                
              />
            </Grid> */}
  
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="state"
                label="State"
                name="state"
                fullWidth
                color="secondary"
                value={usstate}
                InputLabelProps={{ shrink: true, readOnly: true, }}
              />
            </Grid>
            
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="outlined-multiline-flexible"
                label="Primary Address"
                name="address"
                fullWidth
                color="secondary"
                rows={2}
                multiline
                InputLabelProps={{ shrink: true, }}
                autoFocus
              />
            </Grid>
           
          </Grid>
        </React.Fragment>
        );
      case 2:
        
        return (
        
              <React.Fragment>
                
                <Grid item xs={12} sm={12} sx={{mb:3, mt: "10px"}}>
                <FormControl >
                  <FormLabel  id="demo-radio-buttons-group-label" color="secondary">
                  Are you within 6 months of enrolling into Medicare Part B or turning 65?
                  </FormLabel>
                  <RadioGroup
                   id="hq-wrap"
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="hq1"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="secondary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="secondary"/>}
                      label="No"
                    />
                  </RadioGroup>
                  <FormHelperText style={{color: "#d32f2f"}}></FormHelperText>
  
                </FormControl>
                
              </Grid>
              
              <Grid item xs={12} sm={12}>

              <FormControl>
        <FormLabel color="secondary" id="demo-radio-buttons-group-label">Do you have any of the following medical conditions?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        id="hq-wrap"
        name="radio-buttons-group"
      >
      <FormControlLabel  value="COPD, emphysema, pulminary Fibrosis" control={<Radio color="secondary"/>} label="COPD, emphysema, pulminary Fibrosis" />
                  <FormControlLabel  value="Insulin dependent diabetes" control={<Radio color="secondary"/>} label="Insulin dependent diabetes" />
                  <FormControlLabel  value="History of cancer, not including skin cancer" control={<Radio color="secondary"/>} label="History of cancer, not including skin cancer" />
                  <FormControlLabel  value="Rheumatoid or psoriatic arthritis" control={<Radio color="secondary"/>} label="Rheumatoid or psoriatic arthritis" />
                  <FormControlLabel  value="Artery disease or congestive heart failure" control={<Radio color="secondary"/>} label="Artery disease or congestive heart failure" />
                  <FormControlLabel  value="None of the above" control={<Radio color="secondary"/>} label="None of the above" />
      </RadioGroup>
    </FormControl>
              </Grid>
  
              </React.Fragment>
         
        );
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  // const handleSubmit = (e, formData) => {
  //   e.preventDefault();
  // }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'sm'} id="ui-dial">
      <Box id="ui-chform">
      <Container component="main" >
        <Box variant="outlined" sx={{ my: 3 }}  id="ch-box">
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>

                <Stack direction="row" sx={{alignItems: "center", mb:3}} spacing={2}>
                <Typography variant="h5" id="tq-icon"> 
                  <b>🙌</b>
                </Typography>
                <Typography variant="h5" id="tq-head"> 
                  <b>Thank you for your inquiry to MedicareShop.</b>
                </Typography>
                </Stack>

                <Stack direction="column" sx={{alignItems: "center", mb:3}} >
                <Typography variant="subtitle1" color="common.black"  sx={{fontWeight:"500"}} gutterBottom id="tq-sub1">
                  We have recieved your carrier and plan selection and are working to finalize your application.
                </Typography>
                <Typography variant="subtitle1" id="tq-sub2">
                  For your protection, an agent licensed in your state will call you at the number provided to verify your information. Our office hours are 9am-6pm eastern.
                </Typography>
                </Stack>

                <Divider/>
                <Stack direction="row" sx={{mt: 3, mb:3, alignItems: "center" }} spacing={2} id="chform-help">
                <Typography variant="subtitle1" sx={{fontWeight:"500"}} color="common.black">
                  Prefer to call in? We can be reached at : 
                </Typography>
                <Button size="large" variant="contained" color="secondary" href="tel:18884301355" startIcon={<CallIcon />}>1-888-430-1355</Button>
                </Stack>
                <Divider/>

                <Stack direction="column" sx={{mt: 3, mb:3, alignItems: "center" }} spacing={2}>
                <Typography variant="subtitle1" id="tq-sub3">
                  If you have a moment, we encourage you to take a couple minutes and watch the video below to learn how to make the best decision on purchasing a medigap plan.
                </Typography>
                  
                  <div className="videoWrapper">
                    <iframe title="med-video" className="ms-iframe" src="https://player.vimeo.com/video/675905157?h=2e17b32375"  frameBorder="0" allow="autoplay"  allowFullScreen></iframe>
                  </div>

                </Stack>

                <Stack direction="row" sx={{justifyContent: "center"}}>
                <Button size="large" variant="outlined"  color="secondary" sx={{mt: 3}} onClick={onClose} startIcon={<CloseIcon />}>Close</Button>
                </Stack>
              </React.Fragment>
            ) : (
              <React.Fragment>

        <Typography variant="h6" sx={{fontWeight: "600", lineHeight: "1.4"}} id="ui-head">
          Tell us about yourself so we can recommend Medicare Supplement
          Insurance Plans that may fit your needs.
          </Typography>
          <Stepper id="ui-stepper" activeStep={activeStep} sx={{ pt: 4, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

                {GetStepContent(activeStep)}
                

                
              </React.Fragment>
            )}
          </React.Fragment>
        </Box>
        
      </Container>

      {activeStep !== steps.length && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:3, mb:3 }} id="chform-btn-wrap">
                  {activeStep !== 0 && (
                    
                    <Button size="large" color="secondary" sx={{mr:2}} onClick={handleBack} >
                      Back
                    </Button>
                  )}

                  <Button
                    id="chform-btn"
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Checkout' : 'Next'}
                  </Button>
                </Box>
              )}
        </Box>
    </Dialog>

    
  );
}
