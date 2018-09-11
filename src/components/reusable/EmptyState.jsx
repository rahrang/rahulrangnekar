import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/reusable/images/Image';

const EmptyState = ({ text }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <p>{text}</p>
      <Image
        src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_100/v1525502086/website/emptystate.jpg"
        height={350}
        width={350}
        alt={text}
      />
    </div>
  );
};

EmptyState.propTypes = {
  text: PropTypes.string
};

export default EmptyState;
