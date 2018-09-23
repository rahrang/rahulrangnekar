import dateFns from 'date-fns';
import range from 'lodash/range';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import isDate from 'lodash/isDate';
import isString from 'lodash/isString';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// example input: '01-2018' or '08-1996'
export const asWords = dateString =>
  dateFns.format(toDate(dateString), 'MMM YY');

export const asString = date => `${date.getMonth()}-${date.getFullYear()}`;

export const isAfter = (date, dateToCompare) =>
  dateFns.isAfter(toDate(date), toDate(dateToCompare));

export const isBefore = (date, dateToCompare) =>
  dateFns.isBefore(toDate(date), toDate(dateToCompare));

export const isWithinRange = (date, startDate, endDate) =>
  dateFns.isWithinRange(toDate(date), toDate(startDate), toDate(endDate));

export const generateYears = (
  startYear,
  endYear = new Date().getFullYear() + 1
) => {
  const yearRange = range(startYear, endYear);
  return yearRange.map(y => ({ label: y, value: y }));
};

export const generateMonths = (startMonth, endMonth = 11) => {
  const monthRange = range(startMonth, endMonth + 1);
  return monthRange.map(m => ({ label: MONTHS[m], value: m }));
};

export const isValid = arg => !(isUndefined(arg) || isEmpty(arg));

export const getMonth = date => {
  if (isDate(date)) return date.getMonth();
  if (isString(date)) {
    const [month] = date.split('-');
    return parseInt(month);
  }
  return 'invalid date';
};

export const getYear = date => {
  if (isDate(date)) return date.getFullYear();
  if (isString(date)) {
    const [, year] = date.split('-');
    return parseInt(year);
  }
  return 'invalid date';
};

export const formatMonth = month => {
  if (month < 0) return 'invalid month';
  return month < 10 ? `0${month}` : `${month}`;
};

export const DEFAULT_YEARS = generateYears(2016);
export const DEFAULT_MONTHS = generateMonths(0);
export const DEFAULT_START = '00-2016';
export const DEFAULT_END = asString(new Date());

const toDate = dateString => {
  const [month, year] = dateString.split('-');
  const date = new Date(year, month);
  return dateFns.isValid(date) ? date : 'invalid date';
};
