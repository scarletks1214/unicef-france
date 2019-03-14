import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 24px;
  border-radius: 4px;
  padding: 16px 16px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.58);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  transition: all 500ms;
  border: none;
  color: white;
  background-color: #008ED9;

  background: repeating-linear-gradient(
    135deg,
    #1BAFEB,
    #1BAFEB 10px,
    #008ED9 10px,
    #008ED9 20px
  );
`;

const Button = ({children, ...rest}) => (
  <StyledButton type="submit" {...rest}>
    {children}
  </StyledButton>
);

export default Button;
