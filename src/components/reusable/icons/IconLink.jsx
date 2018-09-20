import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({
  iconClass,
  to,
  iconColor,
  iconSize,
  hoverColor,
  bgColor,
  boxSize
}) => {
  return (
    <a
      className={`flex items-center justify-center my-2 mx-3 no-underline bg-${bgColor} text-${iconColor} hover:text-${hoverColor} transition rounded-50`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={{ height: boxSize, width: boxSize }}
    >
      <i className={`fab fa-${iconClass} text-${iconSize}`} />
    </a>
  );
};

IconLink.propTypes = {
  iconClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  hoverColor: PropTypes.string,
  boxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgColor: PropTypes.string
};

IconLink.defaultProps = {
  iconColor: 'blue',
  iconSize: 'normal',
  hoverColor: 'blue',
  boxSize: 'auto',
  bgColor: 'transparent'
};

export default IconLink;
