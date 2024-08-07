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
            sm: '15%',   
            md: '6%',  
            lg: '6%',   
            xl: '6%'},
            paddingRight:
            {xs: '10%',  
            sm: '20%',   
            md: '2%',  
            lg: '6%',   
            xl: '6%'},
          paddingTop: '6%',
          paddingBottom: 2, 
          m: 0,
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
          >
            <Grid item style={{ height: {
                xs: '100%',  
                sm: '100%',   
                md: '100%',  
                lg: '100%',   
                xl: '100%'},
                width: {
                xs: '70%',  
                sm: '70%',   
                md: '70%',  
                lg: '70%',   
                xl: '70%',   
              },backgroundColor: "#3C3C45", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: 10 }}>
              <Grid item >
                <img style={{ height: "230px", width: "230px" }} src='https://s3-alpha-sig.figma.com/img/1d6c/92cd/92601fbe2dc4264ebac1377173947f4d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUA1UmaaOFtOoc7v8pTHBXqCV2WQetr7uWIvvyIAhsC3QItPVLUeiqZydEl9~7bvsq5S~Cag1DBNo4r75GrFyCShOyecC1oDIsveEMBxmjUv3Z9WipwkpbKKVk03Fb-bCka56A1KvtSeN9rxOTbHxFz~pilcNk2IoYdcqKAsqa04CO~fetpz4EVkdQ9TQ-Qt~IKF935toGtwX6KLtfSaklKcYSidTX9uu-fNK3vT567y00F5Xx8x~eBnwYiaK6eIy2VzX7j3y8trfQAbbOovFZpNJkqZq~WgODbh9FF5Npk8TRRQko1alrXvYYjRydE9~CxINSdobn1WmySSX8gq3w__' alt='Contact Image' />
              </Grid>
              
              <Grid item style={{ width: "100%",paddingLeft: "10%", paddingRight: "10%" }}>
                <Typography variant="h6" sx={{  color: "white" }}>Contact us</Typography>
                <br/>
                <Typography variant="body1" sx={{  color: "#D0D0D0" }}>Industry&apos;s standard from dummy and make a type  book.</Typography>
              </Grid>
              <Grid item style={{ display: "flex", paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%", paddingBottom: '5%', flexDirection: "column", width: "100%", gap: 3 }}>
                <TextField type="email" name="email" style={{ backgroundColor: "#5B5B61", borderRadius: 8 }} label="Enter Your Email" InputLabelProps={{ style: { color: "white" } }}/>
                <br/>
                <TextField multiline rows={4} name="comments" style={{ backgroundColor: "#5B5B61", borderRadius: 8 }}  label="Message" InputLabelProps={{ style: { color: "white" } }}></TextField>
              </Grid>
              <Grid item style={{ paddingLeft: "10%", paddingRight: "10%", width: "100%",paddingBottom:"10%", }}>
                <Button fullWidth variant='contained' sx={{ color: "black", backgroundColor: "#FFDC60", fontSize: 18, height: 50 }}>Send</Button>
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
                <Typography variant='h6' style={{ color: 'white' }}><span style={{ color: '#42E052' }}><LocalPhoneOutlinedIcon/></span> Get in touch with</Typography>
                <br/>
                <Typography variant='h6' sx={{ backgroundColor: '#3C3C45', height: {xs: '30px',  
                                              sm: '40px',   
                                              md: '40px',  
                                              lg: '40px',   
                                              xl: '40px'}, width: {        
                                              xs: '90%',  
                                              sm: '100%',   
                                              md: '80%',  
                                              lg: '85%',   
                                              xl: '70%'},fontSize:{xs: '80%',  
                                                sm: '100%',   
                                                md: '100%',  
                                                lg: '100%',   
                                                xl: '100%'}, display: 'flex', alignItems: "center", justifyContent: "center", textAlign: "center", borderRadius: 2, color: "#FFDC60" }}>+91 8688281821</Typography>
                <br/>
               
                <Link variant='body1' href='#' sx={{ color: 'white',fontSize: {        
                                              xs: '70%',  
                                              sm: '100%',   
                                              md: '100%',  
                                              lg: '100%',   
                                              xl: '100%'} }}>contact@64framez.com</Link>
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
               
                  <Typography variant='h6' style={{ color: 'white' }}><span style={{ color: '#FFDC60' }}><LocationOnOutlinedIcon/></span> Location</Typography>
                  <br/>
                  <Typography variant='body1' style={{ color: 'white' }}>Sample city, Tirupati, Andhra Pradesh, India.</Typography>
                  <br/>
                  <Link variant='body1' href='#' style={{ color: '#FFDC60' }}>location</Link>
                
              </Grid>
            </Grid>
            <br/>
            <br/>
            <hr style={{ color: "#727274" }} />
            <br/>
            <br/>
            <Grid item style={{display: "flex", justifyContent: "flex-start" }}>
              <Grid item style={{ paddingRight:"40%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography variant='h6' style={{ color: 'white' }}><span style={{ color: "#FF5449" }}><FilterNoneOutlinedIcon/></span> Pages</Typography>
                <br/><br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Home</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Services</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Projects</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Team</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>About</Link>
              </Grid>
              <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography variant='h6' style={{ color: 'white' }}><span style={{ color: "#42E052" }}><CampaignOutlinedIcon/></span> Follows</Typography>
                <br/><br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Facebook</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Instagram</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Twitter</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>LinkedIn</Link>
                <br/>
                <Link variant="body1" href='#' style={{ color: 'white' }}>Pinterest</Link>
              </Grid>
            </Grid>
            <br/>
              <hr style={{color:"#727274"}}/>
              <br/>
              <Typography variant='body1' style={{color:'white'}}>Copyright © 64 FRAMEZ | Designed by Webortex</Typography>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;