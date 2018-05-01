import { parse, stringify } from 'query-string';
import isEmpty from 'lodash/isEmpty';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import union from 'lodash/union';
import isUndefined from 'lodash/isUndefined';
import isEqual from 'lodash/isEqual';
import includes from 'lodash/includes';

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
  if (isUndefined(status)) return data;
  const fd = data.filter(({ node: { frontmatter: { status: s } } }) =>
    isEqual(s, status)
  );
  return fd;
};

export const filterByTag = (data, tag) => {
  if (isUndefined(tag)) return data;
  const fd = data.filter(({ node: { frontmatter: { tags } } }) =>
    includes(tags, tag)
  );
  return fd;
};
