import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';

import { generateYears, isValid, DEFAULT_YEARS } from 'utils/dateHelpers';

const YearSelect = ({ options, selectedValue, onSelect, width }) => {
  return (
    <Select
      name=""
      options={isValid(options) ? options : DEFAULT_YEARS}
      selectedValue={selectedValue}
      onSelect={onSelect}
      width={width}
      noClear
    />
  );
};

YearSelect.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.number,
    value: PropTypes.number
  }),
  selectedValue: PropTypes.number,
  onSelect: PropTypes.func
};

export default YearSelect;
