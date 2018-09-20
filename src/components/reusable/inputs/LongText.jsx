import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from './Label';

const LongText = ({ label, name, placeholder, type, width, height }) => {
  return (
    <div className="flex flex-col flex-wrap align-baseline justify-center my-2 w-full">
      <Label>{label}</Label>
      <Input
        className="mb-2 p-1 w-full"
        name={name}
        placeholder={placeholder}
        height={height}
      />
    </div>
  );
};

LongText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default LongText;

const Input = styled.textarea`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid #4b75b9;
  resize: none;
  height: ${props => (props.height ? `${props.height}px` : '150px')};
  width: ${props => (props.width ? `${props.width}px` : '250px')};

  &:focus {
    border-bottom: 2px solid #f0ce3b;
  }
`;
