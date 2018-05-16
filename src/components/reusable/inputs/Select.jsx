import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RowContainer } from 'components/reusable/Containers';
import ClearButton from 'components/reusable/buttons/ClearButton';

const Select = ({ name, options, selectedValue, onSelect, noClear, width }) => {
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
      {!!name.length && <Name>{name}</Name>}
      <SelectInput
        className="m-h-h font-small"
        name={name}
        onChange={onChange}
        value={selectedValue}
        width={width}
      >
        {options.map(createOption)}
      </SelectInput>
      {!noClear && <ClearButton onClick={() => onSelect('')} />}
    </RowContainer>
  );
};

const Name = styled.span`
  color: #0b3c5d;
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
  width: ${props => (props.width ? `${props.width}px` : '150px')};

  &:hover {
    background-color: #328cc1;
    color: #fff;
  }
`;

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  noClear: PropTypes.bool.isRequired,
  width: PropTypes.number
};

Select.defaultProps = {
  noClear: false
};

export default Select;
