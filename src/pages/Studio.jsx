import React from 'react';
import styled from 'styled-components';

const StudioContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0f;
  color: white;
  padding: 20px;
`;

function Studio() {
  return (
    <StudioContainer>
      <p>If you can see this, the page is working!</p>
    </StudioContainer>
  );
}

export default Studio; 