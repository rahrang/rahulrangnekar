import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClearButton = ({ text, onClick }) => (
  <Button className="m-1 px-1 text-sm" onClick={onClick}>
    Clear{text && ` ${text}`}
  </Button>
);

const Button = styled.span`
  background-color: #f8f8f8;
  border: 1px solid #7b0d1e;
  border-radius: 3px;
  cursor: pointer;
  color: #7b0d1e;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;

  &:hover {
    background-color: #7b0d1e;
    color: #f8f8f8;
  }
`;

ClearButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default ClearButton;
