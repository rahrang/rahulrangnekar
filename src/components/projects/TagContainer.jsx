import React from 'react';
import PropTypes from 'prop-types';

import ClearButton from '../reusable/buttons/ClearButton';

const TagContainer = ({ children, onClear }) => (
  <div className="flex flex-col flex-wrap items-start justify-center">
    <div className="flex flex-row items-center text-blue mb-2">
      <span className="mr-2">Tags</span>
      <ClearButton onClick={() => onClear('')} />
    </div>
    <div className="flex flex-row flex-wrap items-center justify-start">
      {children}
    </div>
  </div>
);

TagContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func.isRequired
};

export default TagContainer;
