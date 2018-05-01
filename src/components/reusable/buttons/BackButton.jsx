import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BackButton = ({ text, to }) => (
  <Button className="m-v-q p-h-q font-small" to={to}>
    &lt; Back{text && ` to ${text}`}
  </Button>
);

const Button = styled(Link)`
  /* border-bottom: 1px solid #328cc1; */
  cursor: pointer;
  color: #328cc1;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;

  &:hover {
    color: #d9b310;
  }
`;

BackButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default BackButton;
