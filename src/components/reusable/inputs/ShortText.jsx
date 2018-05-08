import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ColumnContainer } from 'components/reusable/Containers';
import { Label } from './Label';

const ShortText = ({ label, name, placeholder, type, width }) => {
  return (
    <ColumnContainer className="m-v-h m-r-1" ai="baseline">
      <Label>{label}</Label>
      <Input
        className="m-0 p-v-q p-h-q"
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        width={width}
      />
    </ColumnContainer>
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
  border-bottom: 2px solid black;
  outline: none;
  width: ${props => (props.width ? `${props.width}px` : '250px')};

  transition: all 0.5s linear;

  &:focus {
    border-bottom: 2px solid red;
  }
`;
