import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
// import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Cookies from 'universal-cookie';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputMask from "react-input-mask";
//import Collapse from '@mui/material/Collapse';
import { useForm, Controller } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from "@mui/material/Dialog";


export default function Updateinfo({ open, onClose, prov, plan, premium }) {

  const [opensub, setOpensub] = useState(false);
  const [usererror, setUsererror] = useState(false);
  const userTries = localStorage.getItem('userTries');
  const cookies = new Cookies();
  
  useEffect(()=> {
    if(userTries === "1"){
      setUsererror(true);
      console.log(userTries);
      
    }
  }, []);
  
  console.log(usererror);
  const navigate = useNavigate();
  
  var XMLParser = require('react-xml-parser');
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('1956');

const utmtermRef = useRef();
const termidRef = useRef();
const campaignidRef = useRef();
const useragentRef = useRef();
const contentidRef = useRef();
const utmtypeRef = useRef();
const utmcampaignRef = useRef();
const utmsourceRef = useRef();
const utmmediumRef = useRef();
const utmcontentRef = useRef();
const gclidRef = useRef();
const fbclidRef = useRef();
const gaclientidRef = useRef();
const keywordRef = useRef();
const trustedRef = useRef();

const userAlert = useRef();


 
  const handleMonthChange = (event) => {
    setMonth(event.target.value);    
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const icon = (
    <Typography variant="caption" sx={{pb:1}}>By clicking the button above, you provide your written signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or <a href="https://medicareshop.com/partners/">Companies</a> at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand the Privacy Policy of this site.
    </Typography>
  );


const onSubmit = (formData, e) => {    
    
    e.preventDefault();
     setOpensub(!opensub);
    let userinfo = formData;
    
     if (Object.keys(userinfo).length > 0) {
      
      var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();
      var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      if(day > d2){
          d2 = d2 + months[m2 - 1];
          m2 = m2 - 1;
      }
      
      if(month > m2){
          m2 = m2 + 12;
          y2 = y2 - 1;
      }
        
      // var d = d2 - day;
      var m = m2 - month;
      var y = y2 - year;
      
      var userage = y+"."+m;

      var userphone = formData.phone.replace(/[- )(]/g,'');

      console.log(userage, userphone);

     let leadCheck;
     let leadStatus; 
          
    

      // let gdob = year + month + day;
      // let gphone = "1"+formData.phone;
      // let fgender = formData.gender;
      // let ggender;
      
      // if(fgender === "male" ){
        //   ggender = "m"
        // } else{
          //   ggender = "f"
          // }
          
      // let udob =  month + "/" + day + "/" + year;
      // let dob = new Date(JSON.stringify(udob));   

      // let month_diff = Date.now() - dob.getTime();  
      // let age_dt = new Date(month_diff);   

      // let uyear = age_dt.getUTCFullYear();   
      // let uage = Math.abs(uyear - 1970);

      
      // var udob = new Date(year, month, day);
      // var month_diff = Date.now() - udob.getTime();
      // var age_dt = new Date(month_diff); 
      // var uage = Math.abs(age_dt.getUTCFullYear() - 1970);
      
      // console.log(uage);

    var uage = Math.round(userage);

    localStorage.setItem('user', JSON.stringify(userinfo));
    localStorage.setItem('isuser', "Yes");
    // localStorage.setItem('state', "");
    localStorage.setItem('age', uage);
      
    let jornaya = cookies.get('leadid_token-3F0C70E5-D003-207E-F402-F3F9F66871E5-385552C3-81F8-6A67-A115-A339DECC3A60');
      
    let neustarData;
    let firstname = formData.firstName;
    let lastname = formData.lastName;
    let email = formData.email;

    let phoneActive;
    let phoneScore;
  
    const getNeustar = async () => { 
    try {
      const response = await fetch(`https://medicareshop-server.herokuapp.com/neustar/${firstname}/${lastname}/${userphone}/${email}`);
      
      neustarData = await response.json();

      // console.log(neustarData);
      // console.log(neustarData.xgdresponse.errorcode[0]);
      // console.log(neustarData.xgdresponse.response[0].result[0].value[0]);
      
      var xmlText = neustarData.xgdresponse.response[0].result[0].value[0];

      var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML

      phoneActive = xml.children[2].children[0].attributes.active;
      phoneScore = parseInt(xml.children[2].children[0].attributes.score);
      console.log(xml, phoneActive, phoneScore);
      
      if ( phoneActive === "1" && phoneScore > 50){
      localStorage.setItem('userTries', "");

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': leadStatus,
        "age": userage,
        'value': formData,
        'utm_term' : utmtermRef.current.value,
        'utm_type' : utmtypeRef.current.value,
        'utm_campaign' : utmcampaignRef.current.value,
        'utm_source' : utmsourceRef.current.value,
        'utm_medium' : utmmediumRef.current.value,
        'utm_content' : utmcontentRef.current.value,
        'term_id' : termidRef.current.value,
        'campaign_id' : campaignidRef.current.value,
        'content_id' : contentidRef.current.value,
        'gclid' : gclidRef.current.value,
        'fbclid' : fbclidRef.current.value,
        'gaclient_id' : gaclientidRef.current.value,
        'keyword' : keywordRef.current.value,
        'useragent' : useragentRef.current.value,
        'jornaya': jornaya,
        'tt': trustedRef.current.value
      });

      fetch(`https://hooks.zapier.com/hooks/catch/3556959/b8xbj6u/`, {
        method: "POST",
        body: JSON.stringify({
        'event': leadStatus,
          'value': formData,
          'utm_term' : utmtermRef.current.value,
          'term_id' : termidRef.current.value,
          'campaign_id' : campaignidRef.current.value,
        'useragent' : useragentRef.current.value,
        'content_id' : contentidRef.current.value,
        'utm_type' : utmtypeRef.current.value,
        'utm_campaign' : utmcampaignRef.current.value,
        'utm_source' : utmsourceRef.current.value,
        'utm_medium' : utmmediumRef.current.value,
        'utm_content' : utmcontentRef.current.value,
        'gclid' : gclidRef.current.value,
        'fbclid' : fbclidRef.current.value,
        'gaclient_id' : gaclientidRef.current.value,
        'keyword' : keywordRef.current.value,
        'jornaya': jornaya,
        'tt': trustedRef.current.value
        })
        
      })
        .then(response => {
          console.log(response); 
        })
        .catch(error  => {
          console.log(error);  
        })
        
        localStorage.setItem('userTries', "3");

        setTimeout(() => { 
          // window.location.reload(true);
          navigate("/rates");
        }, 2000);
        
      } else{
        console.log('hello there');

        const userTries = localStorage.getItem('userTries');

        console.log(userTries);

        if (userTries === undefined || userTries === null || userTries === ""){
          localStorage.setItem('userTries', "1");
          setUsererror(true);
          setOpensub(opensub);
          userAlert.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
        
        if (userTries === "1"){
          localStorage.setItem('userTries', "2");
          navigate("/thankyou2");
        }
      }
     
    } catch (err) {
      console.log(err);
    }
    };
    
    fetch(`https://login.leadapache.com/new_api/api.php?Key=35d5acb63bde0fe556c32c657d153b522157974320635bf3216b6d3e2232706a&API_Action=customDuplicateCheck&TYPE=24&Primary_Phone=${userphone}&Format=JSON`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => { 
      leadCheck = actualData.response[0].message;
      console.log(leadCheck, actualData);
      if ( leadCheck === 'lead is not a duplicate' && (userage >= 64.5 && userage < 80.0 ) ) {
        leadStatus = "uniqueLead";
        getNeustar();
      } else{
        leadStatus = "duplicateLead";
        const stt = localStorage.getItem("state");
        localStorage.setItem('userTries', "3");
        console.log(stt);
        setTimeout(() => { 
          // window.location.reload(true);
          navigate("/rates");
        }, 2000);
        
      }
      console.log(leadStatus);
    })
    .catch((err) => {
      console.log(err.message);
    });
  


    // setTimeout(() => { 
    //   window.location.reload(true);
    // }, 2000);

    }
};


  return (
    
    <Dialog open={open} onClose={onClose} id="ui-dial">
 
      {/* {!error && ( */}
        <Container component="main" maxWidth="xl" sx={{ p: 2 }} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack direction="row" id="ui-head-stack">
            <Typography variant="h6" sx={{fontWeight: "600", lineHeight: "1.4", mt: 1, mb:2}} >
              Update your basic information and we will display personalized results. We promise&nbsp;<b id="uf-icon">❤️</b>
            </Typography>

            <CloseIcon onClick={onClose} color="error" id="ui-close"/>

            </Stack>

            {usererror && (
            <Stack direction="row" sx={{mt:2, width: "100%"}} ref={userAlert} id="useralert">
            <Alert severity="error" sx={{width: "100%"}}>
            <AlertTitle>Your information could not be validated.</AlertTitle>
               You have <strong>1 final attempt remaining.</strong>
            </Alert>
            </Stack>
            )}

            <Box
              component="form"
              id="ui-formwrap"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 2 }}
            >

              {/* <Grid container id="gtm-inputs-wrap">
             
              </Grid> */}
              
              <Grid container spacing={3} id="ui-form">
              
                <Grid item xs={12} sm={6} id="uiform-field">
<input hidden id="utm-term" ref={utmtermRef} />
<input hidden id="utm-type" ref={utmtypeRef}/>
<input hidden id="utm-campaign" ref={utmcampaignRef}/>
<input hidden id="utm-source" ref={utmsourceRef}/>
<input hidden id="utm-medium" ref={utmmediumRef}/>
<input hidden id="utm-content" ref={utmcontentRef}/>
<input hidden id="term-id" ref={termidRef} />
<input hidden id="campaign-id" ref={campaignidRef}/>
<input hidden id="user-agent" ref={useragentRef}/>
<input hidden id="content-id" ref={contentidRef}/>
<input hidden id="gclid" ref={gclidRef}/>
<input hidden id="fbclid" ref={fbclidRef}/>
<input hidden id="ga-client-id" ref={gaclientidRef}/>
<input hidden id="keyword" ref={keywordRef}/>
<input hidden id="leadid_token" name="universal_leadid" value="" />
<input hidden id="leadid_tcpa_disclosure" /><label hidden for="leadid_tcpa_disclosure">By clicking the button above, you provide your written signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or Companies at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand the Privacy Policy of this site.</label>

<input hidden id="xxTrustedFormCertUrl"  name="xxTrustedFormCertUrl" value="" ref={trustedRef}/>
{/* visible fields */}
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    label="First Name"
                    color="secondary"
                    placeholder="Enter Your First Name"
                    autoFocus
                     
                    {...register("firstName", {
                      pattern: { value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
                      ,
                      message: "Spaces & numbers are not allowed"
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
                <Grid item xs={12} sm={6} id="uiform-field">
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    label="Last Name"
                    color="secondary"
                    placeholder="Enter Your Last Name"
                    {...register("lastName", {
                      pattern: { value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
                      ,
                      message: "Spaces & numbers are not allowed."
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
                <Grid item xs={12} sm={6} id="uiform-field">
                  <TextField
                    required
                    fullWidth
                    id="ui_email"
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
                <Grid item xs={12} sm={6} id="uiform-field">

{/* 
        <InputMask
        mask={phone ? "(999) 999-9999" : null}
        type="text"
        maskChar={null}
        id="phone"
        className="demo-phone"
        name="phone"
        placeholder="Enter your Phone no."
        required
        value={phone}
        onChange={(e) => e.preventDefault()}
        onInput={changePhoneHandler}
      /> */}


<Controller
    name="phone"
    control={control}
    defaultValue=""
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
                    // InputProps={{
                    //   startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                    // }}
                    required
                    fullWidth
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
                  />   */}

                </Grid>

                <Grid item xs={12} sm={6} id="uiform-field">
                
                  <TextField
                    required
                    fullWidth
                    name="zipcode"
                    label="Zip Code"
                    inputProps={{ maxLength: 5 }}
                    placeholder="Enter Your Zip Code"
                    color="secondary"
                    type="tel"
                    {...register("zipcode", {
                      required: "Zip Code is required",
                      pattern: { value: /^(?!00000)\d{5}(?:[-\s]\d{4})?$/, message: "Enter a valid US Zip Code" },
                      minLength: {
                        value: 5,
                        message: "Zip Code must be 5 digits long.",
                      },
                      maxLength: {
                        value: 5,
                        message: "Zip Code must be less than 5 digits.",
                      },
                      // validate: (value) => value === '0' || 'Enter a valid US Zip code',
                    })}
                    
                    error={Boolean(errors.zipcode)}
                    helperText={errors.zipcode?.message}
                  />

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
                  <FormControl fullWidth required error={Boolean(errors.month)}>
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
                      {...register("month", { required: "Month is required.", })}
                      
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

                <Grid item xs={4} sm={4}  id="uiform-field-dobd" >
                  <FormControl fullWidth required error={Boolean(errors.day)}>
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
                      {...register("day", { required: "Day is required.", })}
                      
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

                  <FormControl fullWidth required error={Boolean(errors.year)}>
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
                      {...register("year", { required: "Year is required.", })}
                      
                      onChange={handleYearChange}
                      //onChange={e => setAge(e.target.value)}
                    >
                      

                      {/* <MenuItem value={"2004"} >2004</MenuItem>
                      <MenuItem value={"2003"} >2003</MenuItem>
                      <MenuItem value={"2002"} >2002</MenuItem>
                      <MenuItem value={"2001"} >2001</MenuItem>
                      <MenuItem value={"2000"} >2000</MenuItem>
                      <MenuItem value={"1999"} >1999</MenuItem>
                      <MenuItem value={"1998"} >1998</MenuItem>
                      <MenuItem value={"1997"} >1997</MenuItem>
                      <MenuItem value={"1996"} >1996</MenuItem>
                      <MenuItem value={"1995"} >1995</MenuItem>
                      <MenuItem value={"1994"} >1994</MenuItem>
                      <MenuItem value={"1993"} >1993</MenuItem>
                      <MenuItem value={"1992"} >1992</MenuItem>
                      <MenuItem value={"1991"} >1991</MenuItem>
                      <MenuItem value={"1990"} >1990</MenuItem>
                      <MenuItem value={"1989"} >1989</MenuItem>
                      <MenuItem value={"1988"} >1988</MenuItem>
                      <MenuItem value={"1987"} >1987</MenuItem>
                      <MenuItem value={"1986"} >1986</MenuItem>
                      <MenuItem value={"1985"} >1985</MenuItem>
                      <MenuItem value={"1984"} >1984</MenuItem>
                      <MenuItem value={"1983"} >1983</MenuItem>
                      <MenuItem value={"1982"} >1982</MenuItem>
                      <MenuItem value={"1981"} >1981</MenuItem>
                      <MenuItem value={"1980"} >1980</MenuItem>
                      <MenuItem value={"1979"} >1979</MenuItem>
                      <MenuItem value={"1978"} >1978</MenuItem>
                      <MenuItem value={"1977"} >1977</MenuItem>
                      <MenuItem value={"1976"} >1976</MenuItem>
                      <MenuItem value={"1975"} >1975</MenuItem>
                      <MenuItem value={"1974"} >1974</MenuItem>
                      <MenuItem value={"1973"} >1973</MenuItem>
                      <MenuItem value={"1972"} >1972</MenuItem>
                      <MenuItem value={"1971"} >1971</MenuItem>
                      <MenuItem value={"1970"} >1970</MenuItem>
                      <MenuItem value={"1969"} >1969</MenuItem>
                      <MenuItem value={"1968"} >1968</MenuItem>
                      <MenuItem value={"1967"} >1967</MenuItem>
                      <MenuItem value={"1966"} >1966</MenuItem>
                      <MenuItem value={"1965"} >1965</MenuItem>
                      <MenuItem value={"1964"} >1964</MenuItem>
                      <MenuItem value={"1963"} >1963</MenuItem>
                      <MenuItem value={"1962"} >1962</MenuItem>
                      <MenuItem value={"1961"} >1961</MenuItem> */}
                      <MenuItem value={"1960"} >1960</MenuItem>
                      <MenuItem value={"1959"} >1959</MenuItem>
                      <MenuItem value={"1958"} >1958</MenuItem>
                      <MenuItem value={"1957"} >1957</MenuItem>
                      <MenuItem value={"1956"} >1956</MenuItem>
                      <MenuItem value={"1955"} >1955</MenuItem>
                      <MenuItem value={"1954"} >1954</MenuItem>
                      <MenuItem value={"1953"} >1953</MenuItem>
                      <MenuItem value={"1952"} >1952</MenuItem>
                      <MenuItem value={"1951"} >1951</MenuItem>
                      <MenuItem value={"1950"} >1950</MenuItem>
                      <MenuItem value={"1949"} >1949</MenuItem>
                      <MenuItem value={"1948"} >1948</MenuItem>
                      <MenuItem value={"1947"} >1947</MenuItem>
                      <MenuItem value={"1946"} >1946</MenuItem>
                      <MenuItem value={"1945"} >1945</MenuItem>
                      <MenuItem value={"1944"} >1944</MenuItem>
                      <MenuItem value={"1943"} >1943</MenuItem>
                      <MenuItem value={"1942"} >1942</MenuItem>
                      <MenuItem value={"1941"} >1941</MenuItem>
                      <MenuItem value={"1940"} >1940</MenuItem>
                      <MenuItem value={"1939"} >1939</MenuItem>
                      <MenuItem value={"1938"} >1938</MenuItem>
                      <MenuItem value={"1937"} >1937</MenuItem>
                      <MenuItem value={"1936"} >1936</MenuItem>
                      <MenuItem value={"1935"} >1935</MenuItem>
                      <MenuItem value={"1934"} >1934</MenuItem>
                      <MenuItem value={"1933"} >1933</MenuItem>
                      <MenuItem value={"1932"} >1932</MenuItem>
                      <MenuItem value={"1931"} >1931</MenuItem>
                      <MenuItem value={"1930"} >1930</MenuItem>

                    </Select>
                    <FormHelperText>{errors.year?.message}</FormHelperText>
                  </FormControl>
                
                </Grid>

                </Grid>
                </Grid>
                




                {/* Gender */}
                <Grid item xs={12} sm={6} id="uiform-field">
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
                  {/* Gender */}
                </Grid>

                <Grid item xs={12} sm={6} id="uiform-field">
                  <FormControl error={Boolean(errors.gender)}>
                    <FormLabel
                      required
                      id="demo-radio-buttons-group-label"
                      color="secondary"
                    >
                      Do you use Tobacco?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="tobacco"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={
                          <Radio
                            color="secondary"
                            {...register("tobacco", {
                              required: "Tobacco usage is required.",
                            })}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={
                          <Radio
                            color="secondary"
                            {...register("tobacco", {
                              required: "Tobacco usage is required.",
                            })}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                    <FormHelperText style={{ color: "#d32f2f" }}>
                      {errors.tobacco?.message}
                    </FormHelperText>
                  </FormControl>
                  {/* Gender */}
                </Grid>
              </Grid>

              <Button
                id="uiform-submit"
                type="submit"
                fullWidth
                size="large"
                color="secondary"
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                Update Info
              </Button>

              <Grid item xs={12}>
                {/* <Collapse in={checked} collapsedSize={40}>
                  {icon}
                </Collapse> */}
                {icon}
                {/* <Button
                  color="secondary"
                  size="small"
                  sx={{ pt: 0, pb: 0, textTransform: "lowercase" }}
                  checked={checked}
                  onClick={handleChange}
                >
                  {checked ? "...show less" : "...show more"}
                </Button> */}

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
              </Grid>
            </Box>
          </Box>
        </Container>
      {/* )} */}

      {/* {!show && (
        <Container component="main" maxWidth="xs" sx={{ p: 2 }}>
          <Box>
            <Stack direction="column" sx={{ alignItems: "center" }}>
              <CheckCircleIcon
                color="success"
                sx={{ width: "3em", height: "3em", mt: 2, mb: 2 }}
              />
              <Typography
                variant="h6"
                color="common.black"
                sx={{ fontWeight: 600 }}
              >
                Thank you, {username}!
              </Typography>

              <Typography
                variant="body1"
                color="common.black"
                sx={{ mt: 1, textAlign: "center" }}
              >
                You can see best plans/quotes curated for you in your area.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                size="large"
                id="seemyquotes-btn"
                color="inherit"
                sx={{ color: "#fff", background: "#000", mt: 3, mb: 3 }}
                onClick={onClose}
              >
                {" "}
                See my quotes
              </Button>
            </Stack>
          </Box>
        </Container>
      )} */}

    {/* {error && (
        <Alert severity="warning" color="grey" variant="filled" id="ui-form-error">
                  <p className="error">
                    OOPS! Something went wrong. Try again later
                  </p>

        </Alert>
      )} */}

    </Dialog>
  );
}