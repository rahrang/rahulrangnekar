import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = ({ children, primary, width }) => (
  <ButtonWrapper
    className={`${primary ? 'btn-primary' : 'btn-alternate'} p-h-1`}
    width={width}
  >
    {children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 0.025rem;
  height: 40px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;
  padding: 0.5rem;
  width: ${props => props.width || 'auto'};
`;

const ExtLinkButton = ButtonWrapper.withComponent('a');

const IntLinkButton = ButtonWrapper.withComponent(Link);

export { Button, ExtLinkButton, IntLinkButton };
