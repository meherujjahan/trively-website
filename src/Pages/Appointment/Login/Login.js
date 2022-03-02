import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Login = () => {
    
    const [loginData, setLoginData]= useState({});

    const handleOnChange =e=>{
        const field= e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit =e=>{
     alert('submit')
        e.preventDefault()
    }
    return (

       <Container>
           <Grid container spacing={2}>

  <Grid item xs={12} md={6} sx={{mt:9}}>
    <Typography variant="body1" gutterBottom>
       Login
    </Typography>
   <form onSubmit={handleLoginSubmit}>
    <TextField
        sx={{width:'75%', m:1}}
        id="standard-basic"
        type='email'
        name='email'
        onChange={handleOnChange}
        label="Your Email"
        variant="standard" />
   <TextField 
        sx={{width:'75%', m:1}}
        type="password" 
        id="standard-basic2"
        name='password'
        onChange={handleOnChange}
        label="Your Password" 
        variant="standard" />
  
        <Button type='submit' sx={{width:'75%', m:1}} variant="contained">Login</Button>

        <NavLink
         to="/register"
        ><Button      
        sx={{textDecoration:"none"}}
         variant="text">New User? please register.</Button></NavLink>
   </form>
   
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width:'100%'}} src={login} alt="" />
  </Grid>
 
 
</Grid>
       </Container>
    );
};

export default Login;