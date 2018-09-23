import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';

import {
  // generateYears,
  DEFAULT_YEARS
} from '../../../../utils/dateHelpers';

const YearSelect = ({ options, selectedValue, onSelect, width }) => {
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

YearSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.number,
      value: PropTypes.number
    })
  ).isRequired,
  selectedValue: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

YearSelect.defaultProps = {
  options: DEFAULT_YEARS
};

export default YearSelect;
