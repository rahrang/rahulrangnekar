import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ColumnContainer } from 'components/reusable/Containers';
import { Label } from './Label';

const LongText = ({ label, name, placeholder, type, width, height }) => {
  return (
    <ColumnContainer className="m-v-h m-r-1" ai="baseline">
      <Label>{label}</Label>
      <Input
        className="m-v-q p-v-q p-h-q"
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
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
  width: PropTypes.num,
  height: PropTypes.num
};

export default LongText;

const Input = styled.textarea`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  resize: none;
  height: ${props => (props.height ? `${props.height}px` : '200px')};
  width: ${props => (props.width ? `${props.width}px` : '250px')};

  transition: all 0.5s linear;

  &:focus {
    border-bottom: 2px solid red;
  }
`;
