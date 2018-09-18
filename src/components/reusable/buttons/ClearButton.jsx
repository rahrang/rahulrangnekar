import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';

const ClearButton = ({ text, onClick }) => (
  <Button
    className="bg-off-white border border-solid text-maroon hover:bg-maroon hover:text-off-white rounded-50 m-1 px-2 py-1 text-xxs uppercase"
    onClick={onClick}
  >
    {_isEmpty(text) ? <i className="fas fa-times" /> : text}
  </Button>
);

const Button = styled.span`
  cursor: pointer;
  transition: all ease-in-out 0.25s;
`;

ClearButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default ClearButton;
