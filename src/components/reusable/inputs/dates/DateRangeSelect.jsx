import React from 'react';
import PropTypes from 'prop-types';

import { ColumnContainer } from 'components/reusable/Containers';
import DateSelect from './DateSelect';

const DateRangeSelect = ({ onSelect, start, end }) => {
  return (
    <ColumnContainer className="m-v-h" ai="flex-start">
      <DateSelect type="start" dateString={start} onSelect={onSelect} />
      <DateSelect type="end" dateString={end} onSelect={onSelect} />
    </ColumnContainer>
  );
};

DateRangeSelect.propTypes = {
  onSelect: PropTypes.func,
  start: PropTypes.string,
  end: PropTypes.string
};

export default DateRangeSelect;
