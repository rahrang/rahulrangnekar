import React from 'react';
import PropTypes from 'prop-types';

import ClearButton from '../reusable/buttons/ClearButton';

const TagContainer = ({ children, onClear }) => (
  <div className="flex flex-col flex-wrap items-start justify-center my-2">
    <div className="text-blue mb-2">Tags</div>
    <div className="flex flex-row flex-wrap items-center justify-start">
      {children}
      <ClearButton onClick={() => onClear('')} />
    </div>
  </div>
);

TagContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func.isRequired
};

export default TagContainer;
