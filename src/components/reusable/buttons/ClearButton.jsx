import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClearButton = ({ text, onClick }) => (
  <Button className="m-h-q m-v-q p-h-q font-small" onClick={onClick}>
    Clear{text && ` ${text}`}
  </Button>
);

const Button = styled.span`
  background-color: #f8f8f8;
  border: 1px solid red;
  border-radius: 3px;
  cursor: pointer;
  color: red;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;

  &:hover {
    background-color: red;
    color: #f8f8f8;
  }
`;

ClearButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default ClearButton;
