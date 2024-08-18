import { Container, Button, Grid, TextField, Typography } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p1dx12q', 'template_n2rio1e', form.current, 'Bc-7UM34x4W5ZfIp3')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        },
      );
  };

  return (
    <Container>
      <Grid container sx={{ display: 'flex', justifyContent: "center", marginBottom: 10 }}>
        <Grid item sx={{ display: 'flex', alignItems: "center", flexDirection: 'column', marginTop: 10 }}>
          <div className="gap-4 md:inline-flex md:justify-start text-center md:text-left">
            <HandshakeIcon
              className="bg-[#CA87FF] text-[#722AAB] h-[70px] w-[70px] p-[14px] rounded-full"
            />
          </div>
          <br />
          <Typography
            className="text-[15px] text-[#DEDEDE] font-poppins"
            sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
          >
            <span className="text-[#5956E8] mx-1">&#47;&#47;</span>
            01 . Contact us
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#DEDEDE", fontSize: "30px", fontFamily: "poppins" }}>
            Let’s build something awesome together
          </Typography>
        </Grid>

        <Grid container sx={{ display: 'flex', justifyContent: "center", gap: { xs: 10, sm: 10, md: 20, lg: 20, xl: 20 }, flexDirection: 'row', marginTop: 10 }}>
          <Grid xs={10}
            sm={8}
            md={4}
            lg={4}
            xl={4}
            item
            sx={{ backgroundColor: '#222222', height: { xs: "230px", sm: '230px', md: '230px', lg: '230px', xl: '230px' }, width: { xs: "50%", sm: '50%', md: '100%', lg: '100%', xl: '90%' }, borderRadius: 3 }}>
            <Grid item m={3}>
              <Typography variant="h6" sx={{ backgroundColor: "#FFDC60", borderRadius: 4, width: '100px', textAlign: "center", fontSize: '20px' }}>Contact</Typography>
              <br />
              <hr style={{ color: '#ECECEC' }} />
              <Typography sx={{ color: "white", fontSize: '23px', marginTop: '8px' }}>
                <span style={{ color: "#5956E8" }}>
                  <MailOutlineIcon sx={{ fontSize: "33px" }} />
                </span> Email
              </Typography>
              <Typography sx={{ color: '#C0BEBE', marginLeft: "40px", paddingRight: "100px", fontSize: { sm: "20px", md: "17px", lg: "18px", xl: "18px" } }}>
                nextlevel@marketing.com
              </Typography>
            </Grid>
          </Grid>

          <Grid xs={10}
            sm={8}
            md={4}
            lg={4}
            xl={4} sx={{ backgroundColor: '#222222', height: { xs: "230px", sm: '230px', md: '230px', lg: '230px', xl: '230px' }, borderRadius: 3 }}
            item>
            <Grid item m={3}>
              <Typography variant="h6" sx={{ backgroundColor: "#FFDC60", borderRadius: 4, width: '70px', textAlign: "center", fontSize: '20px' }}>Call</Typography>
              <br />
              <hr style={{ color: '#ECECEC' }} />
              <Typography sx={{ color: "white", fontSize: '23px', marginTop: '8px', fontWeight: "100px" }}>
                <span style={{ color: "#5956E8" }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: "33px" }} />
                </span> Phone
              </Typography>
              <Typography sx={{ color: '#C0BEBE', marginLeft: "40px" }}>+91 8888884565</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 10, marginBottom: 10, backgroundColor: "#222222", width: "100%", borderRadius: 3, display: "flex", justifyContent: "center" }}>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container sx={{ margin: { xs: "30px 30px 30px", sm: "30px 60px 30px", md: "50px 60px 50px", lg: "60px 60px 50px", xl: "60px 60px 50px" }, display: "flex", justifyContent: "space-between" }}>
            <Grid item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5} sx={{ marginTop: "20px" }}>
              <label style={{ color: "white" }}>Full Name:</label><br />
              <TextField
                className="bg-[#313131] font-poppins rounded-lg"
                variant="outlined"
                placeholder="Enter your name"
                name="from_name" // Add name attribute
                InputLabelProps={{
                  style: { color: "white", fontFamily: "Poppins" },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: "white" },
                    '&:hover fieldset': { borderColor: "white" },
                    '&.Mui-focused fieldset': { borderColor: "white" },
                    '& .MuiInputBase-input::placeholder': { color: "white", opacity: 1 },
                    '& .MuiInputBase-input': { color: 'white' }, // Set input text color to white
                  },
                  border: "1px solid white", marginTop: 1, borderRadius: 2, width: "100%"
                }}
              />
            </Grid>

            <Grid item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5} sx={{ marginTop: "20px" }}>
              <label style={{ color: "white" }}>Your Email:</label><br />
              <TextField
                variant="outlined"
                name="mail_id" // Add name attribute
                type="Email"
                className="bg-[#313131] font-poppins rounded-lg"
                placeholder="Example@gmail.com"
                InputLabelProps={{
                  style: { color: "white", fontFamily: "Poppins" },
                }}
                sx={{
                  '& .MuiInputBase-input::placeholder': { color: "white", opacity: 1 },
                  '& .MuiInputBase-input': { color: 'white' }, // Set input text color to white
                  border: "1px solid white", marginTop: 1, borderRadius: 2, width: "100%"
                }}
              />
            </Grid>
          </Grid>

          <Grid sx={{ color: "white", margin: { xs: "0px 30px 30px", sm: "0px 60px 30px", md: "0px 60px 30px", lg: "0px 60px 30px", xl: "0px 60px 30px" } }} item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}>
            <label>Message:</label><br />
            <TextField
              className="bg-[#313131] font-poppins rounded-lg"
              multiline
              rows={10}
              variant="outlined"
              name="message" // Add name attribute
              placeholder="Hello there, I would like to talk about how to..."
              InputLabelProps={{
                style: { color: "white", fontFamily: "Poppins" },
              }}
              sx={{
                '& .MuiInputBase-input::placeholder': { color: "white", opacity: 1 },
                '& .MuiInputBase-input': { color: 'white' }, // Set input text color to white
                border: "1px solid white", marginTop: 1, borderRadius: 2, width: "100%"
              }}
            />
          </Grid>

          <Grid item sx={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
            <Button
              type="submit"
              className="hover:bg-[#FFDC60]"
              variant='contained'
              sx={{ backgroundColor: '#ffdd60ae', color: "black", height: "40px", width: "145px" }}
            >
              Send Message
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Contact;
