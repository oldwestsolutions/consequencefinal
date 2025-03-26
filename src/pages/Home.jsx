import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  background: #0a0a0f;
  min-height: 100vh;
  color: white;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #0a0a0f 0%, #17012d 100%);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 70%,
      rgba(109, 40, 217, 0.2) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 2rem auto;
  text-align: center;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

function Home() {
  return (
    <Container>
      <HeroSection>
        <div style={{ width: '100%', textAlign: 'center', padding: '2rem' }}>
          <Title>Welcome to Consequence</Title>
          <Description>
            Your modern, responsive web-based Digital Audio Workstation (DAW) built with React.
          </Description>
        </div>
      </HeroSection>
    </Container>
  );
}

export default Home; 