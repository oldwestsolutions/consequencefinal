import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0f 0%, #17012d 100%);
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #6e54ff;
  }
`;

const LoginButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #6e54ff 0%, #9f54ff 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ForgotPassword = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    color: white;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accept any credentials for now
    navigate('/studio');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Welcome Back</Title>
        <LoginForm onSubmit={handleSubmit}>
          <Input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <Input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          <LoginButton type="submit">Log In</LoginButton>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login; 