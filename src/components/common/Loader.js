import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;

const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3b82f6;
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.p`
  margin-top: 20px;
  color: #4b5563;
  font-size: 14px;
`;

const Loader = () => (
  <LoaderContainer>
    <div>
      <SpinnerContainer />
      <LoaderText>Loading...</LoaderText>
    </div>
  </LoaderContainer>
);

export default Loader;