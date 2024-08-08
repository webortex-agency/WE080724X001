import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const Footer = () => {
  return (
    <Box >
      <Box 
        sx={{ 
          paddingLeft:{
            xs: '10%',  
            sm: '20%',   
            md: '6%',  
            lg: '6%',   
            xl: '6%'},
            paddingRight:
            {xs: '10%',  
            sm: '20%',   
            md: '6%',  
            lg: '6%',   
            xl: '6%'},
          paddingTop: '3%',
          paddingBottom: 2, 
          
          backgroundColor: '#292930',
          display: "flex",
          justifyContent: 'space-around',
          width: {
              xs: '100%',  
              sm: '100%',   
              md: '100%',  
              lg: '100%',   
              xl: '100%',   
            }
        }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
          <Grid 
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={4} 
            item 
            sx={{display:"flex",justifyContent:"center"}}
          >
            <Grid item sx={{ height: {
                xs: '100%',  
                sm: '100%',   
                md: '100%',  
                lg: '100%',   
                xl: '100%'},
                width: {
                xs: '80%',  
                sm: '75%',   
                md: '75%',  
                lg: '75%',   
                xl: '75%',   
              },backgroundColor: "#3C3C45", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: 5 }}>
              <Grid item >
                <Box component="img" sx={{ height: {
                xs: '130px',  
                sm: '150px',   
                md: '150px',  
                lg: '140px',   
                xl: '150px'},
                width: {
                xs: '130px',  
                sm: '150px',   
                md: '150px',  
                lg: '140px',   
                xl: '160px',   
              }}} src='https://s3-alpha-sig.figma.com/img/1d6c/92cd/92601fbe2dc4264ebac1377173947f4d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUA1UmaaOFtOoc7v8pTHBXqCV2WQetr7uWIvvyIAhsC3QItPVLUeiqZydEl9~7bvsq5S~Cag1DBNo4r75GrFyCShOyecC1oDIsveEMBxmjUv3Z9WipwkpbKKVk03Fb-bCka56A1KvtSeN9rxOTbHxFz~pilcNk2IoYdcqKAsqa04CO~fetpz4EVkdQ9TQ-Qt~IKF935toGtwX6KLtfSaklKcYSidTX9uu-fNK3vT567y00F5Xx8x~eBnwYiaK6eIy2VzX7j3y8trfQAbbOovFZpNJkqZq~WgODbh9FF5Npk8TRRQko1alrXvYYjRydE9~CxINSdobn1WmySSX8gq3w__' alt='Contact Image' />
              </Grid>
              
              <Grid item style={{ width: "100%",paddingLeft: "10%", paddingRight: "10%",float:"right" }}>
                <Typography variant="h6" sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'}, fontFamily:"Poppins", color: "white" }}>Contact us</Typography>
                
                <Typography variant="body1" sx={{ fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins", color: "#D0D0D0" }}>Industry&apos;s standard from dummy and make a type  book.</Typography>
              </Grid>
              <Grid item sx={{ display: "flex", paddingLeft: "10%", paddingRight: "10%", paddingTop: "3%", paddingBottom: '5%', flexDirection: "column", width: "100%",gap:1}}>
                <TextField  type="email" name="email" sx={{
                  '& .MuiOutlinedInput-root':{
                    display:'flex',
                    alignItems:'center',
                 '& .MuiOutlinedInput-input':{
                    padding:'8px 8px',
                  },
                  '& fieldset':{
                    borderColor:'transparent',
                  },
                  '&:hover fieldset':{
                    borderColor:'transparent',
                  },
                  '&.Mui-focused fieldset':{
                    borderColor:'transparent',
                  },
                },
                fontFamily:"Poppins",height: {xs: '45px',  
                                                sm: '45px',   
                                                md: '40px',  
                                                lg: '40px',   
                                                xl:'40px'},
                                       width: {
                                                xs: '100%',  
                                                sm: '100%',   
                                                md: '100%',  
                                                lg: '100%',   
                                                xl: '100%',   
                                              },
                    backgroundColor: "#5B5B61", borderRadius: 1.5 }} label="Enter Your Email" InputLabelProps={{ sx: { fontSize: {        
                                                                                                                  xs: '60%',  
                                                                                                                  sm: '70%',   
                                                                                                                  md: '70%',  
                                                                                                                  lg: '75%',   
                                                                                                                  xl: '80%'},color: "white",textAlign:'center'} }}/>
                
                <TextField multiline rows={2} name="comments" sx={{ '& .MuiOutlinedInput-root':{
                 '& .MuiOutlinedInput-input':{
                    padding:'4px 4px',
                  },
                  '& fieldset':{
                    borderColor:'transparent',
                  },
                  '&:hover fieldset':{
                    borderColor:'transparent',
                  },
                  '&.Mui-focused fieldset':{
                    borderColor:'transparent',
                  }},fontFamily:"Poppins", backgroundColor: "#5B5B61", borderRadius: 1.5}}  label="Message" InputLabelProps={{ sx: {fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'}, color: "white" } }}></TextField>
              </Grid>
              <Grid item style={{ paddingLeft: "10%", paddingRight: "10%", width: "100%",paddingBottom:"7%", }}>
                <Button fullWidth variant='contained' sx={{'&:hover': {
                                              backgroundColor: '#FFBF00'},fontSize: {        
                                              xs: '70%',  
                                              sm: '75%',   
                                              md: '85%',  
                                              lg: '85%',   
                                              xl: '85%'},fontFamily:"Poppins",color: "black", backgroundColor: "#FFDC60", height: '90%' }}>Send</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid 
            xs={12}
            sm={12}
            md={7}
            lg={8} 
            xl={8}
            item
            sx={{ marginTop: "3%", paddingTop:{xs:'10%',sm:'10%',md:'0%',lg:'0%',xl:'0%'}, paddingLeft:{  xs:'5%',
                                                                                        sm:'5%', 
                                                                                        md: '7%',  
                                                                                        lg: '10%',   
                                                                                        xl: '10%'}, 
                                                                                        paddingRight:
                                                                                        {xs:'5%',
                                                                                        sm:'5%', 
                                                                                        md: '3%',  
                                                                                        lg: '5%',   
                                                                                        xl: '5%'} }}
          >
            <Grid item style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid item sx={{width: {        
                                              xs: '50%',  
                                              sm: '50%',   
                                              md: '50%',  
                                              lg: '40%',   
                                              xl: '40%'},paddingRight:{xs: '5%',  
                                                sm: '5%',   
                                                md: '2%',  
                                                lg: '2%',   
                                                xl: '2%'}}}>
                <Typography variant='h6' sx={{fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},fontFamily:"Poppins", color: 'white' }}><span style={{ color: '#42E052' }}><LocalPhoneOutlinedIcon/></span> Get in touch with</Typography>
                <br/>
                <Typography variant='h6' sx={{'&:hover': {
          color: '#FFBF00'},fontFamily:"Poppins", backgroundColor: '#3C3C45', height: {xs: '30px',  
                                              sm: '30px',   
                                              md: '35px',  
                                              lg: '35px',   
                                              xl: '35px'}, width: {        
                                              xs: '90%',  
                                              sm: '80%',   
                                              md: '80%',  
                                              lg: '85%',   
                                              xl: '70%'},fontSize: {        
                                                xs: '60%',  
                                                sm: '70%',   
                                                md: '70%',  
                                                lg: '75%',   
                                                xl: '80%'}, display: 'flex', alignItems: "center", justifyContent: "center", textAlign: "center", borderRadius: 2, color: "#FFDC60" }}>+91 8688281821</Typography>
               
               
                <Link variant='body1' href='#' sx={{fontFamily:"Poppins", color: 'white',fontSize: {        
                                               xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'}, }}>contact@64framez.com</Link>
              </Grid>

              <Grid item sx={{width: {        
                                              xs: '50%',  
                                              sm: '50%',   
                                              md: '50%',  
                                              lg: '50%',   
                                              xl: '50%'} ,
                                              paddingLeft:{xs: '3%',  
                                                sm: '5%',   
                                                md: '3%',  
                                                lg: '3%',   
                                                xl: '3%'}}} >
               
                  <Typography variant='h6' sx={{ fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},fontFamily:"Poppins",color: 'white' }}><span style={{ color: '#FFDC60' }}><LocationOnOutlinedIcon/></span> Location</Typography>
                  <br/>
                  <Typography variant='body1' sx={{ fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},fontFamily:"Poppins",color: 'white' }}>Sample city, Tirupati, Andhra Pradesh, India.</Typography>
                  
                  <Link variant='body1' href='#' sx={{'&:hover': {
          color: '#FFBF00'},fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'}, fontFamily:"Poppins",color: '#FFDC60' }}>location</Link>
                </Grid>
            </Grid>
            <br/>
            
            <hr style={{ color: "#727274" }} />
            <br/>
            
            <Grid item style={{display: "flex", justifyContent: "flex-start" }}>
              <Grid item sx={{ paddingRight:"40%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography variant='h6' sx={{ fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},color: 'white' }}><span style={{ color: "#FF5449" }}><FilterNoneOutlinedIcon/></span> Pages</Typography>
                <br/>
                <Link variant="body1" href='#' sx={{fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'}, fontFamily:"Poppins",color: 'white' }}>Home</Link>
                
                <Link variant="body1" href='#' sx={{fontSize: {        
                                             xs: '60%',  
                                             sm: '70%',   
                                             md: '70%',  
                                             lg: '75%',   
                                             xl: '80%'}, fontFamily:"Poppins",color: 'white' }}>Services</Link>
             
                <Link variant="body1" href='#' sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins", color: 'white' }}>Projects</Link>
              
                <Link variant="body1" href='#' sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins", color: 'white' }}>Team</Link>
                
                <Link variant="body1" href='#' sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'}, color: 'white' }}>About</Link>
              </Grid>
              <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",float:"right" }}>
                <Typography variant='h6' sx={{fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'}, fontFamily:"Poppins",color: 'white' }}><span style={{ color: "#42E052" }}><CampaignOutlinedIcon/></span> Follows</Typography>
                <br/>
                <Link variant="body1" href='#' sx={{ fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},fontFamily:"Poppins",color: 'white' }}>Facebook</Link>
                
                <Link variant="body1" href='#' sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins", color: 'white' }}>Instagram</Link>
                
                <Link variant="body1" href='#' sx={{ fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins",color: 'white' }}>Twitter</Link>
                
                <Link variant="body1" href='#' sx={{fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'}, fontFamily:"Poppins",color: 'white' }}>LinkedIn</Link>
                
                <Link variant="body1" href='#' sx={{ fontSize: {        
                                               xs: '60%',  
                                               sm: '70%',   
                                               md: '70%',  
                                               lg: '75%',   
                                               xl: '80%'},fontFamily:"Poppins",color: 'white' }}>Pinterest</Link>
              </Grid>
            </Grid>
            <br/>
              <hr style={{color:"#727274"}}/>
              <br/>
              <Typography variant='body1' sx={{fontSize: {        
                                              xs: '60%',  
                                              sm: '70%',   
                                              md: '70%',  
                                              lg: '75%',   
                                              xl: '80%'},fontFamily:"Poppins",color:'white'}}>Copyright © 64 FRAMEZ | Designed by Webortex</Typography>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;