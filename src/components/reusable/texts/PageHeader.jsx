import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col flex-wrap items-start justify-center bg-off-white rounded-lg px-2">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default PageHeader;
