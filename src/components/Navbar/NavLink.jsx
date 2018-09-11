import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

const NavLink = ({ text, to, exact }) => {
  return (
    <Link
      className="my-3 text-off-white font-bold uppercase no-underline tracking-wide"
      to={to}
      exact={exact}
      activeStyle={{ color: '#f0ce3b' }}
    >
      {text}
    </Link>
  );
};

const Link = styled(GatsbyLink)`
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
