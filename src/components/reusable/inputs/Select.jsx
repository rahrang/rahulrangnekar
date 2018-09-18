import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    <div className="flex flex-row flex-wrap items-end justify-center">
      {!!name.length && <Name>{name}</Name>}
      <SelectInput
        className="bg-transparent bg-off-white rounded-none uppercase mx-2 text-sm hover:text-off-white hover:bg-blue"
        name={name}
        onChange={onChange}
        value={selectedValue}
        width={width}
      >
        {options.map(createOption)}
      </SelectInput>
      {!noClear && <ClearButton onClick={() => onSelect('')} />}
    </div>
  );
};

const Name = styled.span`
  color: #4b75b9;
  text-transform: capitalize;
`;

const SelectInput = styled.select`
  border: none;
  border-bottom: 3px solid #4b75b9;
  cursor: pointer;
  transition: all 0.25s;
  height: 25px;
  width: ${props => (props.width ? `${props.width}px` : '150px')};
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
