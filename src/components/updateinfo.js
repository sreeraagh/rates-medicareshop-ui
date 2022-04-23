import React, { useEffect, useState } from "react";
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
import Dialog from "@mui/material/Dialog";


<<<<<<< HEAD

export default function Updateinfo({ open, onClose, prov, plan, premium }) {

  const [opensub, setOpensub] = useState(false);
  let fbclid;
  // const selectedcard = cardvalue;
  // let fbclid=document.getElementById("fbclid").value;
  // let term_id= document.getElementById("term_id").value;
  // let campaign_id= document.getElementById("Campaign_ID").value;
  // let user_agent=document.getElementById("user_agent").value;
  // let content_id=document.getElementById("content_id").value; 
  // let utm_term=document.getElementById("utm_term").value; 
  // let utm_type=document.getElementById("utm_type").value; 
  // let utm_campaign=document.getElementById("utm_campaign").value; 
  // let utm_source=document.getElementById("utm_source").value; 
  // let utm_content=document.getElementById("utm_content").value; 
  // let gclid=document.getElementById("gclid").value; 
  // let ga_client_id=document.getElementById("ga_client_id").value; 
  // let keyword=document.getElementById("keyword").value;

  const [xxtrustedformcerturl, setXXTrustedFormCertUrl] = useState("");
  const [landingpage, setLandingPage] = useState("");
  const [tcpalanguage, setTCPALanguage] = useState("");
  const [eventid, setEventid] = useState("");

  useEffect(() => {
    setXXTrustedFormCertUrl("xxTrustedFormCertUrl");
    setLandingPage("https://mnw-client.herokuapp.com/");
    setTCPALanguage("By clicking the button above, you provide your signature expressly consenting to receive marketing communications via live telephone, an automatic telephone dialing system, pre-recorded/artificial voice message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or these Companies at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand all of the Privacy Policy of this site.");
    setEventid("");
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('1956');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
    
  };
=======
export default function Updateinfo({ open, onClose }) {

  const [show, setShow] = useState(true);
  const [opensub, setOpensub] = useState(false);

  const [username, setUsername] = useState("");

  const [fbclid, setfbclid] = useState("");
  const [term_id, setterm_id] = useState("");
  const [Campaign_ID, setCampaign_ID] = useState("");
  const [user_agent, setuser_agent] = useState("");
  const [content_id, setcontent_id] = useState("");
  const [utm_term, setutm_term] = useState("");
  const [utm_type, setutm_type] = useState("");
  const [utm_campaign, setutm_campaign] = useState("");
  const [utm_source, setutm_source] = useState("");
  const [utm_content, setutm_content] = useState("");
  const [gclid, setgclid] = useState("");
  const [ga_client_id, setga_client_id] = useState("");
  const [keyword, setkeyword] = useState("");
  const [xxTrustedFormCertUrl, setxxTrustedFormCertUrl] = useState("");
  const [TCPALanguage, setTCPALanguage] = useState("");
  const [LandingPage, setLandingPage] = useState("");
  const [eventid, seteventid] = useState("");

  useEffect(() => {
    setfbclid("fbclid");
    setterm_id("");
    setCampaign_ID("");
    setuser_agent("user_agent");
    setcontent_id("");
    setutm_term("");
    setutm_type("");
    setutm_campaign("");
    setutm_source("");
    setutm_content("");
    setgclid("");
    setga_client_id("");
    setkeyword("");
    setxxTrustedFormCertUrl("xxTrustedFormCertUrl");
    setTCPALanguage("By clicking the button above, you provide your signature expressly consenting to receive marketing communications via live telephone, an automatic telephone dialing system, pre-recorded/artificial voice message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or these Companies at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand all of the Privacy Policy of this site.");
    setLandingPage("https://mnw-client.herokuapp.com/");
    seteventid("");
  }, [])

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [age, setAge] = useState('');

>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f

  const handleYearChange = (event) => {
    setYear(event.target.value);
    
  };



  const icon = (
    <Typography variant="caption">By clicking the button above, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from Jera Marketing Solutions, LLC or its subsidiaries, affiliates, or Companies at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand the Privacy Policy of this site.
    </Typography>
  );


  const [checked, setChecked] = useState(false);
  
  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  const onSubmit = (formData, e) => {

    e.preventDefault();
<<<<<<< HEAD
    setOpensub(!opensub);
    let userinfo = formData;
    
    if (Object.keys(userinfo).length > 0) {
       


       let udob =  month + "/" + day + "/" + year;
      
      // let gdob = year + month + day;
      // let gphone = "1"+formData.phone;
      // let fgender = formData.gender;
      // let ggender;
      
      // if(fgender === "male" ){
      //   ggender = "m"
      // } else{
      //   ggender = "f"
      // }

      let dob = new Date(JSON.stringify(udob)); 
      let month_diff = Date.now() - dob.getTime();  
      let age_dt = new Date(month_diff);   
      let uyear = age_dt.getUTCFullYear();   
      let uage = Math.abs(uyear - 1970);


      localStorage.setItem('user', JSON.stringify(userinfo));
      localStorage.setItem('isuser', "Yes");
      localStorage.setItem('state', "");
      
      localStorage.setItem('age', uage);
    
=======

    setOpensub(!opensub);

    if (Object.keys(formData).length > 0) {

>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
      fetch(`https://hooks.zapier.com/hooks/catch/3556959/b8xbj6u/`, {
        method: "POST",
        body: JSON.stringify({
          "formdata" : formData,
          "carrier" : prov,
          "plan": plan,
          "monthly_premium": premium
        })
        
      })
<<<<<<< HEAD
        .then(response => {
          console.log(response);  
        })
        .catch(error  => {
          console.log(error);  
        })
        
    }

    window.location.reload(true);
    
    setTimeout(() => {
      setOpensub(opensub);
          onClose();
    }, 1000);
      
          
          

=======
        .then(() => {
          setTimeout(() => {
            setOpensub(opensub);
            setShow(false);
          }, 1000);
          localStorage.setItem('user', JSON.stringify(formData));
          localStorage.setItem('isuser', "Yes");
          localStorage.setItem('state', "");
          setUsername(formData.firstName);
        })
        .catch(() => alert("There was an error, please try again."))
    }

>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
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
            <Typography variant="h6" sx={{fontWeight: "600", lineHeight: "1.4", mt: 1, mb:2}} id="ui-head">
              Update your basic information and we will display personalized results.
            </Typography>
            
            <Box
              component="form"
              id="ui-formwrap"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
<<<<<<< HEAD
              <Grid container spacing={3} id="ui-form">
                  <Box sx={{display: "none"}}>
                <TextField
                  name="fbclid"
                  id="fbclid"
                  label="FB click Id"
                  value={fbclid}
                />
                <TextField
                  name="term_id"
                  id="term_id"
                  hidden
                  label="term_id"
                  value=""
                />
                <TextField
                  name="Campaign_ID"
                  id="Campaign_ID"
                  hidden
                  label="Campaign_ID"
                  value=""
                />
                <TextField
                  name="user_agent"
                  id="user_agent"
                  hidden
                  label="User Agent"
                  value=""
                />
                <TextField
                  name="content_id"
                  id="content_id"
                  hidden
                  label="content_id"
                  value=""
                />
                <TextField
                  name="utm_term"
                  id="utm_term"
                  hidden
                  label="utm_term"
                  value=""
                />
                <TextField
                  name="utm_type"
                  id="utm_type"
                  hidden
                  label="utm_type"
                  value=""
                />
                <TextField
                  name="utm_campaign"
                  id="utm_campaign"
                  hidden
                  label="utm_campaign"
                  value=""
                />
                <TextField
                  name="utm_source"
                  id="utm_source"
                  hidden
                  label="utm_source"
                  value=""
                />
                <TextField
                  name="utm_content"
                  id="utm_content"
                  hidden
                  label="utm_content"
                  value=""
                />
                <TextField
                  name="gclid"
                  id="gclid"
                  hidden
                  label="gclid"
                  value=""
                />
                <TextField
                  name="ga_client_id"
                  id="ga_client_id"
                  hidden
                  label="ga_client_id"
                  value=""
                />
                <TextField
                  name="keyword"
                  id="keyword"
                  hidden
                  label="Keyword"
                  value=""
                />
                <TextField
                  name="xxTrustedFormCertUrl"
                  hidden
                  label="xxTrustedFormCertUrl"
                  value={xxtrustedformcerturl}
                />
                <TextField
=======
              <Grid container spacing={3}>
                <input
                  name="fbclid"
                  hidden
                  label="FB click Id"
                  // value={fbclid}
                  {...register("fbclid")}
                />
                <input
                  name="term_id"
                  hidden
                  label="term_id"
                  // value={term_id}
                  {...register("term_id")}
                />
                <input
                  name="Campaign_ID"
                  hidden
                  label="Campaign_ID"
                  // value={Campaign_ID}
                  {...register("Campaign_ID")}
                />
                <input
                  name="user_agent"
                  hidden
                  label="User Agent"
                  // value={user_agent}
                  {...register("user_agent")}
                />
                <input
                  name="content_id"
                  hidden
                  label="content_id"
                  // value={content_id}
                  {...register("content_id")}
                />
                <input
                  name="utm_term"
                  hidden
                  label="utm_term"
                  // value={utm_term}
                  {...register("utm_term")}
                />
                <input
                  name="utm_type"
                  hidden
                  label="utm_type"
                  // value={utm_type}
                  {...register("utm_type")}
                />
                <input
                  name="utm_campaign"
                  hidden
                  label="utm_campaign"
                  // value={utm_campaign}
                  {...register("utm_campaign")}
                />
                <input
                  name="utm_source"
                  hidden
                  label="utm_source"
                  // value={utm_source}
                  {...register("utm_source")}
                />
                <input
                  name="utm_content"
                  hidden
                  label="utm_content"
                  // value={utm_content}
                  {...register("utm_content")}
                />
                <input
                  name="gclid"
                  hidden
                  label="gclid"
                  // value={gclid}
                  {...register("gclid")}
                />
                <input
                  name="ga_client_id"
                  hidden
                  label="ga_client_id"
                  // value={ga_client_id}
                  {...register("ga_client_id")}
                />
                <input
                  name="keyword"
                  hidden
                  label="Keyword"
                  // value={keyword}
                  {...register("keyword")}
                />
                <input
                  name="xxTrustedFormCertUrl"
                  hidden
                  label="xxTrustedFormCertUrl"
                  // value={xxTrustedFormCertUrl}
                  {...register("xxTrustedFormCertUrl")}
                />
                <input
>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
                  name="Jornaya"
                  hidden
                  label="Jornaya"
                  id="Jornaya"
<<<<<<< HEAD
                />
                <TextField
                  name="TCPALanguage"
                  hidden
                  label="TCPA Language"
                  value={tcpalanguage}
                />
                <TextField
                  name="LandingPage"
                  hidden
                  label="LandingPage"
                  value={landingpage}
                />
                <TextField
                  name="eventid"
                  hidden
                  label="eventid"
                  value={eventid}
                />

</Box>

                <Grid item xs={12} sm={6} id="uiform-field">
=======
                  {...register("Jornaya")}
                />
                <input
                  name="TCPALanguage"
                  hidden
                  label="TCPA Language"
                  // value={TCPALanguage}
                  {...register("TCPALanguage")}
                />
                <input
                  name="LandingPage"
                  hidden
                  label="LandingPage"
                  // value={LandingPage}
                  {...register("LandingPage")}
                />
                <input
                  name="eventid"
                  hidden
                  label="eventid"
                  // value={eventid}
                  {...register("eventid")}
                />

                <Grid item xs={12} sm={6}>
>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
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
                  <TextField
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
                  />
                </Grid>

                <Grid item xs={12} sm={6} id="uiform-field">
                
                  <TextField
                    required
                    fullWidth
                    name="zipcode"
                    label="Zip code"
                    placeholder="Enter Your Zip code"
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
                
<<<<<<< HEAD
=======
                helperText={errors.dob?.message}
              /> */}

                  {/* <TextField
          id="outlined-select-currency"
          select
          label="Age"
          value={age}
          required
          fullWidth
          name="age"
          color="secondary"
          onChange={handleAgeChange}
          //onChange={e => setAge(e.target.value)}
          error={Boolean(errors.age)}
          {...register("age", {required: "Age is required",})}
          helperText={errors.age?.message}
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
        </TextField> */}
>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f

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

<<<<<<< HEAD
                <Grid item xs={4} sm={4}  id="uiform-field-dobd" >
                  <FormControl fullWidth required error={Boolean(errors.day)}>
=======




                  <FormControl fullWidth required error={Boolean(errors.age)}>
>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
                    <InputLabel
                      color="secondary"
                      id="demo-simple-select-helper-label"
                    >
                      Day
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
<<<<<<< HEAD
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
=======
                      value={age}

                      label="Age"
                      name="age"
                      color="secondary"
                      {...register("age", { required: "Age is required", })}

>>>>>>> f43101cd0716c975d891f9ee9d2c69a3f2a10d8f
                      //onChange={e => setAge(e.target.value)}
                    >
                      

                      <MenuItem value={"2004"} >2004</MenuItem>
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
                      <MenuItem value={"1961"} >1961</MenuItem>
                      <MenuItem value={"1960"} >1960</MenuItem>
                      <MenuItem value={"1959"} >1959</MenuItem>
                      <MenuItem value={"1958"} >1958</MenuItem>
                      <MenuItem value={"1957"} >1957</MenuItem>
                      <MenuItem value={"1956"} >1956</MenuItem>
                     
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
                <Collapse in={checked} collapsedSize={40}>
                  {icon}
                </Collapse>
                <Button
                  color="secondary"
                  size="small"
                  sx={{ pt: 0, pb: 0, textTransform: "lowercase" }}
                  checked={checked}
                  onClick={handleChange}
                >
                  {checked ? "...show less" : "...show more"}
                </Button>

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