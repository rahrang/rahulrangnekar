import React from 'react';
import PropTypes from 'prop-types';

import DateSelect from './DateSelect';

const DateRangeSelect = ({ onSelect, start, end }) => {
  return (
    <div className="flex flex-col flex-wrap items-start justify-center my-2">
      <DateSelect type="start" dateString={start} onSelect={onSelect} />
      <DateSelect type="end" dateString={end} onSelect={onSelect} />
    </div>
  );
};

DateRangeSelect.propTypes = {
  onSelect: PropTypes.func,
  start: PropTypes.string,
  end: PropTypes.string
};

export default DateRangeSelect;
