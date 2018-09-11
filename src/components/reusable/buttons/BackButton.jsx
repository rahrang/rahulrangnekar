import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BackButton = ({ text, to }) => (
  <Button className="my-1 px-1 text-sm" to={to}>
    &lt; Back{text && ` to ${text}`}
  </Button>
);

const Button = styled(Link)`
  cursor: pointer;
  color: #0b3c5d;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;

  &:hover {
    color: #f0ce3b;
  }
`;

BackButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default BackButton;
