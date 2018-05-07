import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

const NavLink = ({ text, to, exact }) => {
  return (
    <Link
      className="m-v-h"
      to={to}
      exact={exact}
      activeStyle={{ color: '#d9b310' }}
    >
      {text}
    </Link>
  );
};

const Link = styled(GatsbyLink)`
  color: white;
  font-weight: bold;
  letter-spacing: 0.0625rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default NavLink;
