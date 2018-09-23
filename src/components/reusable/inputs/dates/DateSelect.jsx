import React from 'react';
import PropTypes from 'prop-types';

import ClearButton from '../../buttons/ClearButton';
import { getMonth, getYear, formatMonth } from '../../../../utils/dateHelpers';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

const DateSelect = ({ dateString, type, onSelect }) => {
  const onMonthChange = newMonth => {
    const currYear = getYear(dateString);
    // TODO: check year is valid both as a year and according to options
    const month = formatMonth(newMonth);
    const newDateString = `${month}-${currYear}`;
    onSelect(type, newDateString);
  };

  const onYearChange = newYear => {
    const currMonth = getMonth(dateString);
    // TODO: check month is valid both as a month and according to options
    const newDateString = `${formatMonth(currMonth)}-${newYear}`;
    onSelect(type, newDateString);
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center my-1">
      <span className="text-blue capitalize" style={{ minWidth: '50px' }}>
        {type}
      </span>
      <MonthSelect
        onSelect={onMonthChange}
        selectedValue={getMonth(dateString)}
        width={60}
      />
      <YearSelect
        onSelect={onYearChange}
        selectedValue={getYear(dateString)}
        width={60}
      />
      <ClearButton onClick={() => onSelect(type, '')} />
    </div>
  );
};

DateSelect.propTypes = {
  date: PropTypes.string,
  type: PropTypes.oneOf(['start', 'end']).isRequired
};

DateSelect.defaultProps = {
  date: undefined
};

export default DateSelect;
