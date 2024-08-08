import React from 'react';
import styled from 'styled-components';
// import './App.css';

// Main container
const Container = styled.div`
  width: 2200px;
  height: 532px;
  background: black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px; /* Added top padding for space above all components */
`;

// Circle with message icon
const Circle = styled.div`
  width: 104.97px;
  height: 104.97px;
  background: #665AEA;
  border-radius: 50%;
  border: 1.19px solid #C4C2FF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px; /* Adjusted for spacing from the top */
  left: 10px; /* Adjusted for spacing from the left */
`;

const MessageIcon = styled.div`
  width: 40.56px;
  height: 40.56px;
  background: transparent;
  border: 2.39px solid #C4C2FF;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '\\2022 \\2022 \\2022'; /* Unicode for dots */
    color: #FFFFFF;
    font-size: 20px;
  }
`;

// Text components
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 20px;
`;

const SmallText = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 17.89px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.135em;
  text-align: left;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const OrangeText = styled.span`
  color: orange;
  margin-right: 5px;
`;

const BigText = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 47.71px;
  font-weight: 600;
  line-height: 52.72px;
  text-align: left;
  color: white;
`;

// Navigation buttons
const NavigationButton = styled.div`
  width: 83.5px;
  height: 83.5px;
  background: ${props => props.white ? 'white' : '#454545'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: ${props => props.white ? '#454545' : 'white'};
  font-size: 26px;
`;

const NavIconLeft = styled.div`
  &:before {
    content: '<';
  }
`;

const NavIconRight = styled.div`
  &:before {
    content: '>';
  }
`;

// Grid container for cards
const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 51.29px; /* Adjusted gap between cards */
  position: absolute;
  top: 120px; /* Adjusted to position the grid correctly */
  left: 0;
  padding: 20px;
`;

// Individual card component
const GridCard = styled.div`
  width: 384.61px;
  height: 274.35px;
  background: linear-gradient(151.16deg, #FFF8F8 10.38%, #F5F7FF 95.44%);
  border-radius: 18px; /* Applied border radius to all corners */
  padding: 21px 17.06px 22.13px 17.07px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// Inner content of the card
const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0px 1.31px 2.63px 0px #92929240;
  padding: 31.5px 24.28px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// Adjusted text row to ensure proper alignment
const TextRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

// Additional card elements
const GreenCircle = styled.div`
  width: 19.03px;
  height: 19.03px;
  background: #6FDB5D;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const OrangeTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12.5px solid transparent;
  border-right: 12.5px solid transparent;
  border-bottom: 25px solid #FFDC60;
  position: absolute;
  top: 10px;
  left: 35px;
`;

const Stars = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Star = styled.span`
  color: #FFB545;
  font-size: 20px;
`;

const CardText = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 11.81px;
  font-weight: 400;
  line-height: 18.49px;
  text-align: left;
  color: #000000;
  margin-top: 50px;
  margin-bottom: 60px; /* Added bottom margin for spacing */
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("image.png");
  background-size: cover;
  background-position: center;
`;

const NameDesigner = styled.div`
  margin-left: 10px;
`;

const Name = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 11.81px;
  font-weight: 400;
  color: #000000;
`;

const Designer = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 11.81px;
  font-weight: 400;
  color: #000000;
`;


const Testimonials = () => {
  return (
    <Container>
      <TextRow>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Circle>
            <MessageIcon />
          </Circle>
          <TextContainer>
            <SmallText>
              <OrangeText>//</OrangeText> 04. Testimonial
            </SmallText>
            <BigText>We work with customers across all industries</BigText>
          </TextContainer>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavigationButton white>
            <NavIconLeft />
          </NavigationButton>
          <NavigationButton>
            <NavIconRight />
          </NavigationButton>
        </div>
      </TextRow>
      <Grid>
        {Array(4).fill(0).map((_, index) => (
          <GridCard key={index}>
            <InnerCard>
              <GreenCircle />
              <OrangeTriangle />
              <Stars>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
              </Stars>
              <CardText>
                Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.
              </CardText>
              <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '20px', left: '20px', width: 'calc(100% - 40px)' }}>
                <ProfileImage />
                <NameDesigner>
                  <Name>Name</Name>
                  <Designer>Designer</Designer>
                </NameDesigner>
              </div>
            </InnerCard>
          </GridCard>
        ))}
      </Grid>
    </Container>

  );
};

export default Testimonials;
