import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
  padding: 20px;
`;

const ErrorHeading = styled.h1`
  color: #1e293b;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ErrorDescription = styled.p`
  color: #64748b;
  margin-bottom: 20px;
  font-size: 14px;
`;

const RetryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  
  &:hover {
    background-color: #2563eb;
  }
`;

const ErrorView = ({ onRetry }) => (
  <ErrorContainer>
    <ErrorHeading>Something went wrong</ErrorHeading>
    <ErrorDescription>We couldn't process your request. Please try again.</ErrorDescription>
    <RetryButton onClick={onRetry}>Try Again</RetryButton>
  </ErrorContainer>
);

export default ErrorView;