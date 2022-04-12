import React, { useState, useEffect  } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from '@mui/material/FormHelperText';


export default function Checkout({open, onClose}) {

const steps = ['Basic-info', 'Address', 'Checkout'];
const [userdata, setUserdata] = useState({});
const isuser =  localStorage.getItem('isuser');

const [checkdata, SetCheckdata] = useState({});

useEffect(() => {
  if(isuser === "Yes"){
    let ss = localStorage.getItem('state');
    console.log(ss);
    setUserdata(JSON.parse(localStorage.getItem('user')));
  }
  
}, []);

const usstate =  localStorage.getItem('state');

const GetStepContent = (step) => {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    // const onSubmit = (formData, e) => {
    //   e.preventDefault();
    
    //   if( Object.keys(formData).length > 0 ){
    //     console.log(formData);
    //   }
      
    // };
  
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
         
            
  
            <Grid item xs={12} sm={6}>
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
         
            <Grid item xs={12} sm={6}>
              <TextField
                id="age"
                name="age"
                label="Age"
                fullWidth
                color="secondary"
                value={userdata.age}
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
                maxRows={2}
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
                
                <Grid item xs={12} sm={12} sx={{mb:3}}>
                <FormControl >
                  <FormLabel required id="demo-radio-buttons-group-label" color="secondary">
                  Are you within 6 months of enrolling into Medicare Part B or turning 65?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    
                    name="hq"
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
              <FormLabel required id="demo-radio-buttons-group-label" color="secondary">
                  Do you have any of the following medical conditions?
                  </FormLabel>
  
              <FormGroup>
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="COPD, emphysema, pulminary Fibrosis" />
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="Insulin dependent diabetes" />
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="History of cancer, not including skin cancer" />
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="Rheumatoid or psoriatic arthritis" />
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="Artery disease or congestive heart failure" />
                  <FormControlLabel control={<Checkbox color="secondary"/>} label="None of the above" />
                </FormGroup>
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
    <Dialog open={open} onClose={onClose}>
      <Container component="main" maxWidth="sm">
        <Box variant="outlined" sx={{ my: { xs: 3, md: 3 },  }}>
          <Typography  variant="body1" align="left">
          Tell us about yourself so we can recommend Medicare Supplement
          Insurance Plans that may fit your needs.
          </Typography>
          <Stepper id="ui-stepper" activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your Enquiry.
                </Typography>
                <Typography variant="subtitle1">
                  We have received it, Our support agent will get back to you shortly.
                </Typography>

                <Button sx={{mt:3}} size="large" variant="contained"  color="secondary" onClick={onClose}>Okay!</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {GetStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:3, mb:3 }}>
                  {activeStep !== 0 && (
                    <Button size="large" color="secondary" sx={{mr:2}} onClick={handleBack} >
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Checkout' : 'Next'}
                  </Button>
                </Box>

                
              </React.Fragment>
            )}
          </React.Fragment>
        </Box>
        
      </Container>
    </Dialog>
  );
}
