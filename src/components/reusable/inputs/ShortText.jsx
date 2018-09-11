import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from './Label';

const ShortText = ({ label, name, placeholder, type, width }) => {
  return (
    <div className="flex flex-col flex-wrap align-baseline justify-center my-2 mr-1">
      <Label>{label}</Label>
      <Input
        className="bg-transparent mb-2 p-1"
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        width={width}
      />
    </div>
  );
};

ShortText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number
};

export default ShortText;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #4b75b9;
  outline: none;
  width: ${props => (props.width ? `${props.width}px` : '250px')};

  transition: all 0.5s linear;

  &:focus {
    border-bottom: 2px solid #f0ce3b;
  }
`;
