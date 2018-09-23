import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import Label from './Label';

const ShortText = ({ label, name, placeholder, type }) => (
  <div className="flex flex-col flex-wrap align-baseline justify-center my-2 mr-1">
    {!_isEmpty(label) && <Label>{label}</Label>}
    <input
      className="bg-transparent border-b-blue-2 mb-2 p-1 w-48 text-sm"
      name={name}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

ShortText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

ShortText.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text'
};

export default ShortText;
