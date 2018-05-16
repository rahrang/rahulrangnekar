import isEmpty from 'lodash/isEmpty';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import union from 'lodash/union';
import isUndefined from 'lodash/isUndefined';
import isEqual from 'lodash/isEqual';
import includes from 'lodash/includes';

import { isBefore, isAfter } from './dateHelpers';

export const getParams = props => parse(props.location.search);

export const setParams = (props, stateParams) => {
  const {
    history,
    location: { pathname }
  } = props;
  const params = fromPairs(
    toPairs(stateParams).filter(([k, v]) => !isEmpty(v))
  );
  const qs = stringify(params);
  history.push(`${pathname}?${qs}`);
};

export const getUniqueTags = data => {
  const allTags = [];
  data.forEach(edge => {
    const {
      node: {
        frontmatter: { tags }
      }
    } = edge;
    allTags.push(tags);
  });

  const uniqueTags = union(...allTags).sort((a, b) => a > b);
  return uniqueTags;
};

export const filterByStatus = (data, status) => {
  if (isUndefined(status) || isEmpty(data)) return data;
  const fd = data.filter(({ node: { frontmatter: { status: s } } }) =>
    isEqual(s, status)
  );
  return fd;
};

export const filterByTag = (data, tag) => {
  if (isUndefined(tag) || isEmpty(data)) return data;
  const fd = data.filter(({ node: { frontmatter: { tags } } }) =>
    includes(tags, tag)
  );
  return fd;
};

export const filterByStartDate = (data, date) => {
  if (isEmpty(date) || isEmpty(data)) return data;
  const fd = data.filter(({ node: { frontmatter: { timespan } } }) =>
    isAfter(timespan[0], date)
  );
  return fd;
};

export const filterByEndDate = (data, date) => {
  if (isEmpty(date) || isEmpty(data)) return data;
  const fd = data.filter(({ node: { frontmatter: { timespan } } }) =>
    isBefore(timespan[1], date)
  );
  return fd;
};

const parse = qs => {
  const res = {};
  if (isEmpty(qs) || isUndefined(qs)) return res;
  const arr = qs.slice(1).split('&');
  arr.forEach(pair => {
    const [k, v] = pair.split('=');
    res[k] = v;
  });
  return res;
};

const stringify = params => {
  if (isEmpty(params) || isUndefined(params)) return '';
  let res = [];
  Object.entries(params).forEach(pair => {
    const str = pair.join('=');
    res.push(str);
  });
  return res.join('&');
};
