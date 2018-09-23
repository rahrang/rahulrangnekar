import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = ({ text }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center my-4">
      <p className="text-black">{text}</p>
      <img
        className="h-64 w-64 m-4"
        src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_100/website/emptystate.jpg"
        alt={text}
      />
    </div>
  );
};

EmptyState.propTypes = {
  text: PropTypes.string
};

EmptyState.defaultProps = {
  text: 'Nothing to see here.'
};

export default EmptyState;
