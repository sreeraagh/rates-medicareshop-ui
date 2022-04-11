import React, { useState  } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Collapse from '@mui/material/Collapse';
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Dialog from "@mui/material/Dialog";
import { userinfo, isuser } from '../constants/global';


export default function Updateinfo(  { open, onClose }) {

  const [show, setShow] = useState(true);
  const [opensub, setOpensub] = useState(false);      

  const [username, setUsername] = useState("");
 

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [age, setAge] = React.useState('');
  

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const icon = (
    <Typography  variant="caption">By clicking the button above, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or Companies at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand the Privacy Policy of this site.
    </Typography>
  );


  const [checked, setChecked] = useState(false);
  //const [error, setError] = useState(true);


  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const onSubmit = (formData, e) => {
    e.preventDefault();
    
    setOpensub(!opensub);

    if( Object.keys(formData).length > 0 ){
      
      console.log(isuser);
      setTimeout(() => {
        setOpensub(opensub);
        localStorage.setItem('user', JSON.stringify(formData));
        localStorage.setItem('isuser', "Yes");
        localStorage.setItem('state', "");
        setUsername(formData.firstName);
        setShow(false);
        console.log(userinfo.firstName);
      }, 1000);
    }
    
  };



  return (

<Dialog open={open} onClose={onClose}>


{show && (
    <Container component="main" maxWidth="xl" sx={{p:2}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          Tell us about yourself so we can recommend Medicare Supplement
          Insurance Plans that may fit your needs.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="firstName"
                required
                fullWidth
                label="First Name"
                color="secondary"
                autoFocus
                {...register("firstName", { required: "First Name is required", minLength: { value: 2, message: "First Name must be at least 2 characters" }, maxLength: { value: 20, message: "First Name must be less than 20 characters" } })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                required
                fullWidth
                label="Last Name"
                color="secondary"                
                {...register("lastName", { required: "Last Name is required", minLength: { value: 2, message: "First Name must be at least 2 characters" }, maxLength: { value: 20, message: "Last Name must be less than 20 characters" } })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                color="secondary"
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="tel"
                label="Phone"
                color="secondary"
                name="phone"
                {...register("phone", { required: "Phone is required", pattern: { value: /^\d{3}\d{3}\d{4}$/, message: "Invalid phone number" }, minLength: { value: 10, message: "Phone number must be at least 10 digits" }, maxLength: { value: 10, message: "Phone number must be less than 10 digits" } })}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
              />

            </Grid>

            <Grid item xs={12} sm={6} >
              <TextField
                required
                fullWidth
                name="zipcode"
                label="Zipcode"
                color="secondary"
                type="tel"
                {...register("zipcode", { required: "Zipcode is required", pattern: { value: /^\d{5}$/, message: "Invalid zipcode" }, minLength: { value: 5, message: "Zipcode must be at least 5 digits" }, maxLength: { value: 5, message: "Zipcode must be less than 5 digits" }, })}
                error={Boolean(errors.zipcode)}
                helperText={errors.zipcode?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              {/* <TextField
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                color="secondary"
                type="Date of Birth"
                
                
                helperText={errors.dob?.message}
              /> */}
        <FormControl fullWidth error={Boolean(errors.age)}>
        <InputLabel  color="secondary" required id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          {...register("age", { required: "Date of Birth is required", } )}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"    
          value={age}
          required
          label="Age"
          name="age"
          color="secondary"
          onChange={handleAgeChange}
        >
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={33}>33</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={37}>37</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={39}>39</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={41}>41</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={43}>43</MenuItem>
          <MenuItem value={44}>44</MenuItem>
          <MenuItem value={45}>45</MenuItem>
          <MenuItem value={46}>46</MenuItem>
          <MenuItem value={47}>47</MenuItem>
          <MenuItem value={48}>48</MenuItem>
          <MenuItem value={49}>49</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={51}>51</MenuItem>
          <MenuItem value={52}>52</MenuItem>
          <MenuItem value={53}>53</MenuItem>
          <MenuItem value={54}>54</MenuItem>
          <MenuItem value={55}>55</MenuItem>
          <MenuItem value={56}>56</MenuItem>
          <MenuItem value={57}>57</MenuItem>
          <MenuItem value={58}>58</MenuItem>
          <MenuItem value={59}>59</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={61}>61</MenuItem>
          <MenuItem value={62}>62</MenuItem>
          <MenuItem value={63}>63</MenuItem>
          <MenuItem value={64}>64</MenuItem>
          <MenuItem value={65}>65</MenuItem>
          <MenuItem value={66}>66</MenuItem>
          <MenuItem value={67}>67</MenuItem>
          
        </Select>
        <FormHelperText>{errors.age?.message}</FormHelperText>
      </FormControl>
            </Grid>

            {/* Gender */}
            <Grid item xs={12} sm={6}>
              <FormControl error={Boolean(errors.gender)} >
                <FormLabel required id="demo-radio-buttons-group-label" color="secondary">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  
                  name="gender"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="secondary" {...register("gender", { required: "Choose your Gender" })}/>}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="secondary" {...register("gender", { required: "Choose your Gender" })}/>}
                    label="Male"
                  />
                </RadioGroup>
                <FormHelperText style={{color: "#d32f2f"}}>{errors.gender?.message}</FormHelperText>

              </FormControl>
              {/* Gender */}
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl error={Boolean(errors.gender)}>
                <FormLabel required id="demo-radio-buttons-group-label" color="secondary">
                  Do you use Tobacco?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  
                  name="tobacco"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio color="secondary" {...register("tobacco", { required: "Tobacco usage is required" })}/>}
                    label="Yes"
                  />
                  <FormControlLabel 
                  value="No" 
                  control={<Radio color="secondary" {...register("tobacco", { required: "Tobacco usage is required" })}/>} 
                  label="No" />
                </RadioGroup>
              </FormControl>
              {/* Gender */}
            </Grid>

            
          </Grid>

          <Button
            type="submit"
            fullWidth
            size="large"
            
            color="secondary"
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Save Info
          </Button>

          <Grid item xs={12} >

          
          <Collapse in={checked} collapsedSize={40}>{icon}</Collapse>
          <Button color="secondary" size="small" sx={{pt: 0, pb: 0, textTransform: "lowercase"}} checked={checked} onClick={handleChange}>{checked ? "...show less" : "...show more"}</Button>  
          

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={opensub}
      >
        <Stack direction="row" sx={{ alignItems: "center"}}>
        <CircularProgress color="inherit" />
        <Typography variant="body1" sx={{ml:2}}>
          Saving your info..
        </Typography>
        </Stack>
      </Backdrop>

          </Grid>

        </Box>
      </Box>
</Container>
)}

   {!show && (
     <Container component="main" maxWidth="xs" sx={{p:2}}>
    <Box>
    <Stack direction="column" sx={{ alignItems: "center"}}>
    <CheckCircleIcon color="success" sx={{ width:"3em", height: "3em", mt:2, mb:2 }}/>
        <Typography variant="h6" color="common.black" sx={{fontWeight: 600}}>
            Thank you for your information!
        </Typography>
      

        <Typography  variant="body1" color="common.black"  sx={{mt:1, textAlign: "center",}}>
            Hi {username}, You can see quotes curated for you....
            
        </Typography>
        
      
        <Button variant="contained" endIcon={<ArrowForwardIcon />} size="large" id="seemyquotes-btn" color="inherit" sx={{ color: "#fff", background: "#000" , mt:3, mb:3 }} onClick={onClose}> See my quotes</Button>


</Stack>
      </Box>
    </Container>
      )}
    </Dialog>
  );
}
