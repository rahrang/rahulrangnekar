import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RowContainer } from 'components/reusable/Containers';
import ClearButton from 'components/reusable/buttons/ClearButton';

const Select = ({ name, options, selectedValue, onSelect }) => {
  const onChange = e => {
    const { value } = e.target;
    return onSelect(value === 'all' ? '' : value);
  };

  const createOption = opt => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  );

  return (
    <RowContainer ai="flex-end">
      <Name className="">{name}</Name>
      <SelectInput
        className="m-h-h font-small"
        name={name}
        onChange={onChange}
        value={selectedValue}
      >
        {options.map(createOption)}
      </SelectInput>
      <ClearButton onClick={() => onSelect('')} />
    </RowContainer>
  );
};

const Name = styled.span`
  color: #328cc1;
  text-transform: capitalize;
`;

const SelectInput = styled.select`
  background-color: transparent;
  background-color: #f8f8f8;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid #328cc1;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  transition: all 0.25s;
  height: 25px;
  width: 150px;

  &:hover {
    background-color: #328cc1;
    color: #fff;
  }
`;

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  selectedValue: PropTypes.string,
  onSelect: PropTypes.func
};

export default Select;
