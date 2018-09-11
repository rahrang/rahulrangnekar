import React from 'react';
import PropTypes from 'prop-types';

import ClearButton from 'components/reusable/buttons/ClearButton';

const TagContainer = ({ children, onClear }) => {
  return (
    <div className="flex flex-col flex-wrap items-start justify-center my-2">
      <span className="text-blue capitalize">Tags</span>
      <div className="flex flex-row flex-wrap items-center justify-start">
        {children}
        <ClearButton onClick={() => onClear('')} />
      </div>
    </div>
  );
};

TagContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onClear: PropTypes.func
};

export default TagContainer;
