import React from 'react';
import PropTypes from 'prop-types';

const CircleIcon = ({ faIconClass, bgColor, bgSize, iconColor, iconSize }) => (
  <div
    className={`rounded-50 bg-${bgColor} flex items-center justify-center`}
    style={{ height: bgSize, width: bgSize }}
  >
    <i className={`${faIconClass} text-${iconColor} text-${iconSize}`} />
  </div>
);

export default CircleIcon;

CircleIcon.propTypes = {
  faIconClass: PropTypes.string.isRequired, // font awesome icon class
  bgColor: PropTypes.string,
  bgSize: PropTypes.oneOfType([
    PropTypes.number, // pixels
    PropTypes.string // ems/rems
  ]),
  iconColor: PropTypes.string,
  iconSize: PropTypes.string // font-size
};

CircleIcon.defaultProps = {
  bgColor: 'blue',
  bgSize: 40,
  iconColor: 'off-white',
  iconSize: 'base'
};
