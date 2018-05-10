import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

const IconLink = ({ to, iid, scale, maxHeight, maxWidth }) => {
  return (
    <Anchor
      className="m-h-q m-v-q"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon {...{ iid, scale, maxHeight, maxWidth }} />
    </Anchor>
  );
};

const Anchor = styled.a`
  fill: white;
  transition: all 0.25s;

  &:hover {
    fill: #d9b310;
  }
`;

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  iid: PropTypes.string,
  scale: PropTypes.number,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number
};

IconLink.defaultProps = {
  to: '#'
};

export default IconLink;
