import React from 'react';
import PropTypes from 'prop-types';

import DateSelect from './DateSelect';

const DateRangeSelect = ({ onSelect, start, end }) => {
  return (
    <div className="flex flex-col items-start justify-center my-2">
      <span>
        <DateSelect type="start" dateString={start} onSelect={onSelect} />
      </span>
      <span>
        <DateSelect type="end" dateString={end} onSelect={onSelect} />
      </span>
    </div>
  );
};

DateRangeSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default DateRangeSelect;
