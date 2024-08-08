import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: auto;
  gap: 54px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background-color: #171717; /* Set background color to black */
`;

const Text = styled.div`
  width: 147px;
  height: 44px;
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 44.2px;
  text-align: left;
  color: #FFFFFF; /* Text color set to white */
`;

const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 27.54px;
  margin-bottom: 65px;
`;

const Card = styled.div`
  width: 350.34px;
  height: 213.94px;
  gap: 4.5px;
  border-radius: 9.34px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9.34px;
  }
`;


const Projects = () => {
  return (
    <Container>
      <Text>Projects</Text>
      <Grid>
        <Card>
          <img src="./src/assets/Projects/Graphic.gif" alt="Card 1" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/motion.gif" alt="Card 2" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/Interior.gif" alt="Card 3" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/WEB.gif" alt="Card 4" />
        </Card>
      </Grid>
      <Grid>
        <Card>
          <img src="./src/assets/Projects/Photography.gif" alt="Card 5" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/Digital.gif" alt="Card 6" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/2d.gif" alt="Card 7" />
        </Card>
        <Card>
          <img src="./src/assets/Projects/3d.gif" alt="Card 8" />
        </Card>
      </Grid>
    </Container>
  );
};

export default Projects;
