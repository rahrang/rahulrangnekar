import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import CircleIcon from './icons/CircleIcon';

const Descriptor = ({ iconOpts, header, description }) => (
  <div
    className="flex flex-col items-start m-3 xl:mx-6 p-2 w-full md:w-48 xl:w-64"
    // style={{ maxWidth: 225 }}
  >
    <div className="flex justify-center w-full my-2">
      <CircleIcon {...iconOpts} />
    </div>
    {!_isEmpty(header) && (
      <p className="text-black uppercase text-sm my-2">{header}</p>
    )}
    {!_isEmpty(description) && (
      <p className="text-blue-light text-base leading-tight">{description}</p>
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
  }).isRequired,
  header: PropTypes.string,
  description: PropTypes.string
};

Descriptor.defaultProps = {
  header: '',
  description: ''
};
