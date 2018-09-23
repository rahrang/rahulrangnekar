import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const NavLink = ({ text, to }) => {
  return (
    <Link
      className="my-3 text-off-white font-bold uppercase no-underline tracking-wide transition"
      to={to}
      activeStyle={{ color: '#f0ce3b' }}
    >
      {text}
    </Link>
  );
};

const Link = styled(GatsbyLink)`
  &:hover {
    transform: scale(1.1);
  }
`;

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLink;
