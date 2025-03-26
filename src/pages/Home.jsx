import React from 'react';
import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const Container = styled.div`
  background: #0a0a0f;
  min-height: 100vh;
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

const MainSection = styled.section`
  background: #0a0a0f;
  position: relative;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #fff, #a78bfa, #6d28d9);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 3s linear infinite;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #6e54ff;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: linear-gradient(135deg, #6e54ff 0%, #9f54ff 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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

const Button = styled.button`
  background: ${props => props.primary ? 
    'linear-gradient(90deg, #6d28d9, #7c3aed)' : 
    'transparent'};
  color: white;
  border: ${props => props.primary ? 'none' : '2px solid #6d28d9'};
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.primary ? 
    '0 4px 15px rgba(109, 40, 217, 0.3)' : 
    'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(109, 40, 217, 0.4);
    background: ${props => props.primary ? 
      'linear-gradient(90deg, #7c3aed, #8b5cf6)' : 
      'rgba(109, 40, 217, 0.1)'};
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`;

const StarCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const EnhancedInfoSection = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 2rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(90deg, #fff, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .intro {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #d1d1d1;
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
  }

  .feature-item {
    background: rgba(109, 40, 217, 0.1);
    border: 1px solid rgba(109, 40, 217, 0.3);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      border-color: rgba(109, 40, 217, 0.6);
      box-shadow: 0 10px 30px rgba(109, 40, 217, 0.2);
    }

    h3 {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    p {
      color: #a0a0a0;
      line-height: 1.6;
    }
  }

  .conclusion {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #d1d1d1;
    max-width: 800px;
    margin: 4rem auto 0;
    text-align: center;
    padding: 2rem;
    border-top: 1px solid rgba(109, 40, 217, 0.3);
  }
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(109, 40, 217, 0.3);
  padding: 3rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a0a0a0;

  a {
    color: #a0a0a0;
    text-decoration: none;
    margin-left: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 2rem;

    a {
      margin: 0 1rem;
    }
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 30%,
    rgba(109, 40, 217, 0.2) 0%,
    rgba(13, 6, 31, 0.4) 50%,
    rgba(10, 10, 15, 0.95) 100%
  );
  pointer-events: none;
`;

const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroTextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const CircleLogo = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid rgba(109, 40, 217, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, rgba(109, 40, 217, 0.5), transparent);
    z-index: -1;
    filter: blur(10px);
  }
`;

const FeaturesSection = styled.section`
  background: linear-gradient(180deg, #0a0a0f 0%, #0d0628 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(109, 40, 217, 0.5), 
      transparent
    );
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #6d28d9, transparent);
    border-radius: 2px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const FeatureCard = styled.div`
  background: rgba(109, 40, 217, 0.1);
  border: 1px solid rgba(109, 40, 217, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(109, 40, 217, 0.5), 
      transparent
    );
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(109, 40, 217, 0.6);
    box-shadow: 0 10px 30px rgba(109, 40, 217, 0.2);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #6d28d9, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 4px rgba(109, 40, 217, 0.3));
  }

  h3 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #fff, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #d1d1d1;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const WorkflowSection = styled.section`
  background: #0a0a0f;
  padding: 8rem 0;
  position: relative;
`;

const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const WorkflowStep = styled.div`
  text-align: center;
  position: relative;

  .step-number {
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(45deg, #6d28d9, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: #a0a0a0;
    line-height: 1.8;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(45deg, #0d0628, #1a0142);
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(109, 40, 217, 0.2) 0%, transparent 70%);
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #fff, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #a0a0a0;
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 3rem;
  }
`;

function StarryBackground() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let shootingStars = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      const numberOfStars = 150;
      
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          twinkleSpeed: Math.random() * 0.05 + 0.02,
          twinklePhase: Math.random() * Math.PI * 2,
          baseOpacity: Math.random() * 0.7 + 0.3
        });
      }
    };

    const createShootingStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 100 + 120,
        speed: Math.random() * 20 + 15,
        opacity: 1,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1)
      };
    };

    const drawStars = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a0f');
      gradient.addColorStop(1, '#17012d');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach(star => {
        ctx.beginPath();
        // Calculate twinkling effect
        const twinkle = Math.sin(timestamp * star.twinkleSpeed + star.twinklePhase);
        const opacity = star.baseOpacity + twinkle * 0.2;
        
        // Draw star core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw star glow
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 4
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.3})`);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw shooting stars
      shootingStars = shootingStars.filter(star => star.opacity > 0);
      
      shootingStars.forEach(star => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.moveTo(star.x, star.y);
        
        // Calculate trail end point
        const trailEndX = star.x - Math.cos(star.angle) * star.length;
        const trailEndY = star.y + Math.sin(star.angle) * star.length;
        
        // Create gradient for the trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          trailEndX, trailEndY
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = gradient;
        
        ctx.lineTo(trailEndX, trailEndY);
        ctx.stroke();

        // Update shooting star position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.02;

        // Add glow effect to shooting stars
        ctx.beginPath();
        const starGlow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, 4
        );
        starGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        starGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = starGlow;
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Randomly add new shooting stars
      if (Math.random() < 0.02 && shootingStars.length < 5) {
        shootingStars.push(createShootingStar());
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    initCanvas();
    createStars();
    drawStars(0);

    window.addEventListener('resize', () => {
      initCanvas();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <StarCanvas ref={canvasRef} />;
}

function Home() {
  return (
    <Container>
      <HeroSection>
        <StarryBackground />
        <GradientOverlay />
        <Nav>
          <Logo>Consequence</Logo>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="#features">Features</NavLink>
            <NavLink to="#about">About</NavLink>
            <LoginButton to="/login">Login</LoginButton>
          </NavLinks>
        </Nav>
        <HeroContentWrapper>
          <HeroTextContent>
            <Title>Create Beyond Imagination</Title>
            <Description>
              Experience the future of music production with AI-powered creativity. 
              Transform your workflow and produce extraordinary sounds with our 
              revolutionary platform.
            </Description>
            <div>
              <Button primary>Get Started</Button>
              <Button>Watch Demo</Button>
            </div>
          </HeroTextContent>
          <HeroVisual>
            <CircleLogo>
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 10L90 90H10L50 10Z"
                  stroke="#6d28d9"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </CircleLogo>
          </HeroVisual>
        </HeroContentWrapper>
      </HeroSection>

      <MainSection>
        <FeaturesSection>
          <SectionTitle>Powerful Features</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <div className="icon">🎛️</div>
              <h3>AI-Powered Analysis</h3>
              <p>
                Real-time track analysis and intelligent suggestions powered by 
                cutting-edge machine learning algorithms.
              </p>
            </FeatureCard>
            <FeatureCard>
              <div className="icon">🎚️</div>
              <h3>Smart Mixing</h3>
              <p>
                Professional-grade mixing assistance with adaptive EQ and 
                dynamic processing suggestions.
              </p>
            </FeatureCard>
            <FeatureCard>
              <div className="icon">🎹</div>
              <h3>MIDI Excellence</h3>
              <p>
                Advanced MIDI routing and processing with intelligent pattern 
                recognition and suggestions.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </FeaturesSection>

        <WorkflowSection>
          <SectionTitle>Intuitive Workflow</SectionTitle>
          <WorkflowGrid>
            <WorkflowStep>
              <div className="step-number">01</div>
              <h3>Connect</h3>
              <p>
                Seamlessly integrate with your DAW through our plugin interface.
              </p>
            </WorkflowStep>
            <WorkflowStep>
              <div className="step-number">02</div>
              <h3>Create</h3>
              <p>
                Produce music with real-time AI assistance and suggestions.
              </p>
            </WorkflowStep>
            <WorkflowStep>
              <div className="step-number">03</div>
              <h3>Collaborate</h3>
              <p>
                Share and work with other producers in real-time.
              </p>
            </WorkflowStep>
            <WorkflowStep>
              <div className="step-number">04</div>
              <h3>Perfect</h3>
              <p>
                Fine-tune your tracks with AI-powered mixing and mastering.
              </p>
            </WorkflowStep>
          </WorkflowGrid>
        </WorkflowSection>

        <CTASection>
          <CTAContent>
            <h2>Ready to Transform Your Production?</h2>
            <p>
              Join thousands of producers who are already creating amazing music 
              with Consequence. Get started today and experience the future of 
              music production.
            </p>
            <Button primary>Start Free Trial</Button>
          </CTAContent>
        </CTASection>

        <Footer>
          <div>© 2023 Consequence. All rights reserved.</div>
          <div>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/contact">Contact</a>
          </div>
        </Footer>
      </MainSection>
    </Container>
  );
}

export default Home; 