import { useState } from 'react';
import { Container,Button,Grid, TextField, Typography,Snackbar, Alert } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const validateForm = () => {
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setFullName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <Container>
      <Grid container sx={{display:'flex',justifyContent:"center",marginBottom:10}}>
        <Grid item sx={{display:'flex',alignItems:"center",flexDirection:'column',marginTop:10}}>
        <div className="gap-4 md:inline-flex md:justify-start text-center md:text-left">
            <HandshakeIcon
              className="bg-[#CA87FF] text-[#722AAB] h-[70px] w-[70px] p-[14px] rounded-full 
            "
            />
        </div>
        <br/>
        <Typography
                className="text-[15px] text-[#DEDEDE] font-poppins"
                sx={{ letterSpacing: "3px", textTransform: "uppercase"}}
              >
                <span className="text-[#5956E8] mx-1">&#47;&#47;</span>
                01 . Contact us
              </Typography>
              <Typography sx={{textAlign:"center",color:"#DEDEDE",fontSize:{xs:"20px",sm:"25px",md:"30px",lg:"30px",xl:"30px"},fontFamily:"poppins"}}>Let’s build something awesome together</Typography>
        </Grid>
        <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
                        <Grid xs={12}
                                sm={12}
                                md={7}
                                lg={8}
                                xl={8} item sx={{marginTop:10,marginBottom:10,backgroundColor:"#222222",width:"100%",borderRadius:3,display:"flex",alignItems:"center",flexDirection:"column"}}>
                                <Grid container sx={{margin:{xs:"30px 30px 30px",sm:"30px 60px 30px",md:"50px 60px 20px",lg:"50px 60px 20px",xl:"50px 60px 20px"},display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                                                  <Grid item xs={11}
                                                    sm={5}
                                                    md={5}
                                                    lg={5}
                                                    xl={5}
                                                  sx={{marginTop:"20px"
                                                  }}>
                                                    <label  style={{color:"white"}}>Full Name:</label><br/>
                                                    <TextField className="bg-[#313131] font-poppins rounded-lg" variant="outlined" placeholder="Enter your name"  InputProps={{style: {color: 'white'},sx: {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#318CE7', 
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1877F2', 
                      },
                    },}} sx={{marginTop:1,borderRadius:2,width:"100%"}} value={fullName}
                                                                            onChange={(e) => setFullName(e.target.value)}
                                                                            error={Boolean(errors.fullName)}
                                                                            helperText={errors.fullName}></TextField>
                                                  </Grid>
                                                  <Grid item xs={11}
                                                    sm={5}
                                                    md={5}
                                                    lg={5}
                                                    xl={5}
                                                   sx={{marginTop:"20px"
                                                  }}>
                                                    <label style={{color:"white"}}>Your Email:</label><br/>
                                                    <TextField variant="outlined" name="Email" type="Email" placeholder="Example@gmail.com" className="bg-[#313131] font-poppins rounded-lg"  InputProps={{style: {color: 'white'},sx: {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#318CE7', 
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1877F2', 
                      },
                    }}} 
                                                       sx={{color:"white",marginTop:1,borderRadius:2,width:"100%"}}
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       error={Boolean(errors.email)}
                                                       helperText={errors.email}>
                                                    </TextField>
                                                  </Grid>
                                </Grid>
                                <Grid sx={{color:"white",margin:{xs:"0px 30px 30px",sm:"0px 60px 30px",md:"0px 60px 30px",lg:"0px 60px 30px",xl:"0px 60px 30px"},justifyContent:"center"}} container >
                                  <Grid item xs={11}
                                                    sm={11}
                                                    md={11}
                                                    lg={11}
                                                    xl={11}>
                                  <label>Message:</label><br/>
                                  <TextField className="bg-[#313131] font-poppins rounded-lg" multiline rows={8} variant="outlined" placeholder="Hello there, I would like to talk about how to..." name="Email"   InputProps={{style: {color: 'white'},sx: {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#318CE7', 
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1877F2', 
                      },
                    }}} sx={{marginTop:1,borderRadius:2,width:"100%"}} value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={Boolean(errors.message)}
                  helperText={errors.message}></TextField>
                                </Grid>
                                </Grid>
                                <Grid item sx={{display:"flex",justifyContent:"center",marginBottom:4}}>
                                  <Button className="hover:bg-[#FFDC60]" variant='contained' type='submit' onClick={handleSubmit} sx={{backgroundColor:'#ffdd60ae',color:"black",height:"40px",width:"145px"}}>Send Message</Button>
                                </Grid>
                        </Grid>
        <Grid xs={12}
                sm={12}
                md={4}
                lg={3}
                xl={3} item sx={{marginTop:{xs:0,sm:0,md:10,lg:10,xl:10},marginBottom:10}}>
                  <Grid container sx={{display:'flex',alignItems:"center",justifyContent:"space-around",gap:{xs:10,sm:2,md:9,lg:9,xl:9},flexDirection:'row'}}>
            <Grid xs={8}
              sm={5}
              md={12}
              lg={12}
              xl={12}
              item
              sx={{backgroundColor:'#222222',height:{xs:"230px",sm:'230px',md:'230px',lg:'230px',xl:'230px'},width:{xs:"50%",sm:'50%',md:'100%',lg:'100%',xl:'90%'},borderRadius:3}}>
                <Grid item m={3}>
                  <Typography  variant="h6" sx={{backgroundColor:"#FFDC60",borderRadius:4,width:'100px',textAlign:"center",fontSize:'20px'}}>Contact</Typography>
                  <br/>
                  <hr style={{color:'#ECECEC'}}/>
                  <Typography sx={{color:"white",fontSize:{xs:"23px",sm:"19px",md:"23px",lg:"23px",xl:"23px"},marginTop:'8px'}}><span style={{color:"#5956E8"}}><MailOutlineIcon sx={{fontSize:{xs:"33px",sm:"29px",md:"25px",lg:"33px",xl:"33px"}}}/></span> Email</Typography>
                  <Typography sx={{color:'#C0BEBE',marginLeft:{xs:"40px",sm:"16px",md:"40px",lg:"40px",xl:"40px"},marginTop:{xs:"1px",sm:1,md:"1px",lg:"1px",xl:"1px"},paddingRight:"100px",fontSize:{sm:"15px",md:"18px",lg:"16px",xl:"16px"}}}>nextlevel@marketing.com</Typography></Grid>
              </Grid>
            <Grid xs={8}
              sm={5}
              md={12}
              lg={12}
              xl={12} sx={{backgroundColor:'#222222',height:{xs:"230px",sm:'230px',md:'230px',lg:'230px',xl:'230px'},borderRadius:3}}
              item>
                <Grid item m={3}>
              <Typography variant="h6" sx={{backgroundColor:"#FFDC60",borderRadius:4,width:'70px',textAlign:"center",fontSize:'20px'}}>Call</Typography>
              <br/>
              <hr style={{color:'#ECECEC'}}/>
              <Typography sx={{color:"white",fontSize:{xs:"23px",sm:"19px",md:"23px",lg:"23px",xl:"23px"},marginTop:'8px',fontWeight:"100px"}}><span style={{color:"#5956E8"}}><LocalPhoneOutlinedIcon sx={{fontSize:{xs:"33px",sm:"29px",md:"25px",lg:"33px",xl:"33px"}}}/></span> Phone</Typography>
              <Typography sx={{color:'#C0BEBE',marginLeft:{xs:"40px",sm:"16px",md:"40px",lg:"40px",xl:"40px"},marginTop:{xs:"1px",sm:1,md:"1px",lg:"1px",xl:"1px"},fontSize:{sm:"15px",md:"18px",lg:"16px",xl:"16px"}}}>+91 8888884565</Typography>
              </Grid>
              </Grid>
                </Grid>
        </Grid>
        
      </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Message Sent Successfully!
        </Alert>
      </Snackbar>
      
    </Container>
  );
};

export default Contact;
