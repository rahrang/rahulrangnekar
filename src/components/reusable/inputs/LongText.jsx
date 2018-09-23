import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import Label from './Label';

const LongText = ({ label, name, placeholder }) => (
  <div className="flex flex-col flex-wrap align-baseline justify-center my-2 w-full">
    {!_isEmpty(label) && <Label>{label}</Label>}
    <textarea
      className="bg-transparent resize-none h-32 w-full text-sm mb-2 p-1 border-b-blue-2 focus:border-yellow"
      name={name}
      placeholder={placeholder}
    />
  </div>
);

LongText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

LongText.defaultProps = {
  label: '',
  placeholder: ''
};

export default LongText;
