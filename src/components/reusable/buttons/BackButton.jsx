import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BackButton = ({ text, to }) => (
  <Link
    className="my-1 px-1 text-xs uppercase text-blue hover:text-blue-darker cursor-pointer no-underline transition"
    to={to}
  >
    <span className="mr-1">
      <i class="fas fa-chevron-left" />
    </span>
    <span>Back{text && ` to ${text}`}</span>
  </Link>
);

BackButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string.isRequired
};

BackButton.defaultProps = {
  text: ''
};

export default BackButton;
