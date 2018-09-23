import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';

import {
  // generateMonths,
  DEFAULT_MONTHS
} from '../../../../utils/dateHelpers';

const MonthSelect = ({ options, selectedValue, onSelect, width }) => {
  return (
    <Select
      name=""
      options={options}
      selectedValue={selectedValue}
      onSelect={onSelect}
      width={width}
      noClear
    />
  );
};

MonthSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired,
  selectedValue: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

MonthSelect.defaultProps = {
  options: DEFAULT_MONTHS
};

export default MonthSelect;
