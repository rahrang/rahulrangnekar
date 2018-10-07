import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

const ClearButton = ({ text, onClick }) =>
  _isEmpty(text) ? (
    <span
      className="bg-off-white border border-solid text-maroon hover:bg-maroon hover:text-off-white rounded-50 m-1 cursor-pointer flex items-center justify-center transition"
      onClick={onClick}
      style={{ height: 18, width: 18, fontSize: '0.55rem' }}
    >
      <i className="fas fa-times" />
    </span>
  ) : (
    <span
      className="bg-off-white border border-solid text-maroon hover:bg-maroon hover:text-off-white rounded m-1 px-2 py-1 text-xxs uppercase transition"
      onClick={onClick}
    >
      {text}
    </span>
  );

ClearButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ClearButton.defaultProps = {
  text: ''
};

export default ClearButton;
