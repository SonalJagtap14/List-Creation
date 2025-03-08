import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.secondary ? '#9ca3af' : '#4f46e5'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.secondary ? '#6b7280' : '#4338ca'};
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Button = ({ children, secondary, ...props }) => (
  <StyledButton secondary={secondary} {...props}>
    {children}
  </StyledButton>
);

export default Button;
