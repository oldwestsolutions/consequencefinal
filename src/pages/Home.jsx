import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to Consequence Studio
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        Your creative journey begins here.
      </p>
    </div>
  );
};

export default Home; 