import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RowContainer } from 'components/reusable/Containers';
import ClearButton from 'components/reusable/buttons/ClearButton';
import { getMonth, getYear, formatMonth } from 'utils/dateHelpers';
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
    <RowContainer className="m-v-q">
      <Name>{type}</Name>
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
      <ClearButton text={type} onClick={() => onSelect(type, '')} />
    </RowContainer>
  );
};

DateSelect.propTypes = {
  date: PropTypes.string,
  type: PropTypes.oneOf(['start', 'end'])
};

const Name = styled.span`
  color: #0b3c5d;
  text-transform: capitalize;
  min-width: 50px;
`;

export default DateSelect;
