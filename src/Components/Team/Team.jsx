import React from 'react';
import { Box, Container, Grid, Icon, IconButton, Link, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Handshake } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Ashok from '../../assets/TeamMembers/aa.png'
import Insta from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import x from '../../assets/twitter.png'


const Team = () => {
const  TeamMembers = [
    {
      id:1,
      FirstName:'Ashok',
      LastName:'Pemeram',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:2,
      FirstName:'Jayadeep Reddy',
      LastName:'PeddiReddy',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:3,
      FirstName:'Gnana',
      LastName:'Shekar',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:''
    },
    {
      id:4,
      FirstName:'Gnana',
      LastName:'Shekar',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:5,
      FirstName:'Gnana',
      LastName:'Shekar',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:6,
      FirstName:'Ashok',
      LastName:'Pemeram',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:7,
      FirstName:'Ashok',
      LastName:'Pemeram',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    {
      id:8,
      FirstName:'Ashok',
      LastName:'Pemeram',
      Role:'Founder',
      pic:'./src/assets/TeamMembers/aa.png',
      insta:'https://www.instagram.com/',
      fb:'https://www.facebook.com/',
      x:'https://x.com/?lang=en'
    },
    
  ]
  return (
    // <Container>
      <Box 
        sx={{ 
          paddingBottom: 4,  // padding: 16px
          m: 0,   // margin: 16px
          backgroundColor:'#171717',
          
        }}
      >
        <Grid container sx={{justifyContent:'center'}}>
          <IconButton sx={{
            background:'#665AEA',
            color:'white',
            marginTop:'2%',
          '&:hover': {
          backgroundColor: '#665AEA',
        },
        }} size='large' ><Handshake sx={{fontSize:35}}/></IconButton>
        
        </Grid>
        <Grid container sx={{justifyContent:'center'}}>
        <Typography sx={{fontSize:30,fontFamily:'Nunito',paddingTop:'2%',color:'white'}}>Meet Our Team Experts</Typography>
        </Grid>
        <Grid container sx={{justifyContent:'space-around',paddingLeft:'5%',paddingRight:'5%'}}>
          {TeamMembers.map(member=>(
             <Grid item sm={2.5} sx={{backgroundColor:'white',borderRadius:5,height:'20rem',padding:'25px',textAlign:'center',marginTop:4,
              '&:hover': {
                 background: 'linear-gradient(to right, #E9F7FF, #FFDBD4,#FFF3CA)'
              },
             }} key={member.id}>
             <img src={member.pic} alt='Ashok' style={{borderRadius:10}}></img>
             <Grid sx={{width:'100%',display:'flex',justifyContent:'center'}}>
             <Grid sx={{color:'#5956E8',border:'1.6px solid #5956E8',marginTop:2,width:60
             }}></Grid>
              </Grid>
             <Typography sx={{paddingTop:2,fontWeight:'bolder',fontFamily:'Nunito'}}>{member.FirstName} {member.LastName}</Typography>
             <Typography sx={{fontSize:15,fontFamily:'Noto Sans',color:'#555555'}}>{member.Role}</Typography>
             <Grid container sx={{justifyContent:'center',marginTop:1}}>
               {member.insta != '' ?
               <IconButton>
                 <Link href={member.insta}><img src={Insta} alt='Instagram' width={25}></img></Link>
               </IconButton>
               : null
               }
               {member.fb != '' ?
               <IconButton>
                 <Link href={member.fb}><img src={fb} alt='Instagram' width={20}></img></Link>
               </IconButton>
               : null
               }
               {member.x != '' ?
               <IconButton>
                 <Link href={member.x}><img src={x} alt='Instagram' width={20}></img></Link>
               </IconButton>
               : null
               }
             </Grid>

             </Grid>
        
          ))}
        </Grid>
      </Box>
    // </Container>
  );
};

export default Team;
