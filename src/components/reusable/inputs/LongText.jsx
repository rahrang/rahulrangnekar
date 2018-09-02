import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ColumnContainer } from 'components/reusable/Containers';
import { Label } from './Label';

const LongText = ({ label, name, placeholder, type, width, height }) => {
  return (
    <ColumnContainer className="m-v-h" ai="baseline">
      <Label>{label}</Label>
      <Input
        className="m-b-h p-v-q p-h-q"
        name={name}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </ColumnContainer>
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
  outline: none;
  resize: none;
  height: ${props => (props.height ? `${props.height}px` : '200px')};
  width: ${props => (props.width ? `${props.width}px` : '250px')};

  transition: all 0.5s linear;

  &:focus {
    border-bottom: 2px solid #f0ce3b;
  }
`;
