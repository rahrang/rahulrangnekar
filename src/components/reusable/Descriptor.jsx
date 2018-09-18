import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import CircleIcon from 'components/reusable/icons/CircleIcon';

const Descriptor = ({ iconOpts, header, description }) => (
  <div
    className="flex flex-col items-start my-4 mx-8"
    style={{ maxWidth: 300 }}
  >
    <CircleIcon {...iconOpts} />
    {!_isEmpty(header) && (
      <p className="text-black uppercase text-sm my-2">{header}</p>
    )}
    {!_isEmpty(description) && (
      <p className="text-blue-light text-base font-light">{description}</p>
    )}
  </div>
);

export default Descriptor;

Descriptor.propTypes = {
  iconOpts: PropTypes.shape({
    faIconClass: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    bgSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconColor: PropTypes.string,
    iconSize: PropTypes.string
  }),
  header: PropTypes.string,
  description: PropTypes.string
};

Descriptor.defaultProps = {
  header: '',
  description: ''
};
