import React from 'react';
import { Box, Container } from '@mui/material';
import HomePage from './HomePage/HomePage';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
  return (
    <Container>
      <Box 
        sx={{ 
          p: 2,  // padding: 16px
          m: 2   // margin: 16px
        }}
      >
<HomePage/>
<Projects/>
<Services/>
      </Box>
    </Container>
  );
};

export default Home;
