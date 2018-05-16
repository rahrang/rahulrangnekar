import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';

import { generateMonths, isValid, DEFAULT_MONTHS } from 'utils/dateHelpers';

const MonthSelect = ({ options, selectedValue, onSelect, width }) => {
  return (
    <Select
      name=""
      options={isValid(options) ? options : DEFAULT_MONTHS}
      selectedValue={selectedValue}
      onSelect={onSelect}
      width={width}
      noClear
    />
  );
};

MonthSelect.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.number,
    value: PropTypes.number
  }),
  selectedValue: PropTypes.number,
  onSelect: PropTypes.func
};

export default MonthSelect;
