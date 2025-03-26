import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Consequence Studio</Title>
      <Description>
        Your creative journey begins here. We're crafting something amazing.
      </Description>
    </HomeContainer>
  );
};

export default Home; 