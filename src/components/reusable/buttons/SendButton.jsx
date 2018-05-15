import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SendButton = ({ text, width }) => (
  <Button className="m-v-q p-v-q" width={width}>
    {text || 'Send'}
  </Button>
);

const Button = styled.button`
  background-color: #328cc1;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: #f8f8f8;
  outline: none;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;
  width: ${props => props.width || 'auto'};

  &:hover {
    background-color: #d9b310;
  }
`;

SendButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string
};

export default SendButton;
