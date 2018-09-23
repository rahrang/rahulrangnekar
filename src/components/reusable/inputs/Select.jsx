import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClearButton from 'components/reusable/buttons/ClearButton';

const Select = ({ name, options, selectedValue, onSelect, noClear }) => {
  const onChange = e => {
    const {
      target: { value }
    } = e;
    return onSelect(value === 'all' ? '' : value);
  };

  const createOption = ({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  );

  return (
    <div className="flex flex-row flex-wrap items-end justify-center">
      {!!name.length && <span className="text-blue capitalize">{name}</span>}
      <select
        className="bg-transparent bg-off-white border-b-blue-2 rounded-none text-sm hover:text-off-white hover:bg-blue cursor-pointer transition mx-2"
        name={name}
        onChange={onChange}
        value={selectedValue}
      >
        {options.map(createOption)}
      </select>
      {!noClear && <ClearButton onClick={() => onSelect('')} />}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onSelect: PropTypes.func.isRequired,
  noClear: PropTypes.bool
};

Select.defaultProps = {
  noClear: false
};

export default Select;
