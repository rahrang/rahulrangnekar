import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './NavLink';

import NAVBAR_LINKS from '../../constants/nav';

export const NAVBAR_WIDTH = 215;

const Navbar = ({ siteTitle, isOpen, toggle }) => {
  return isOpen ? (
    <div
      className="bg-blue h-screen fixed pin-t pin-l z-0 flex flex-col flex-wrap items-start justify-start px-4 py-8 z-20"
      style={{ maxWidth: `${NAVBAR_WIDTH}px` }}
    >
      <CloseContainer
        className="cursor-pointer absolute transition text-off-white hover:text-yellow text-lg"
        onClick={() => toggle(false)}
      >
        <i className="fa fa-times" />
      </CloseContainer>
      <h1 className="text-off-white mb-8">{siteTitle}</h1>
      <div className="flex flex-col flex-wrap items-start justify-center px-4">
        {NAVBAR_LINKS.map(n => (
          <NavLink key={n.to} {...n} />
        ))}
      </div>
    </div>
  ) : (
    <Hamburger
      className="bg-blue rounded cursor-pointer absolute transition z-10"
      onClick={() => toggle(true)}
    >
      <div
        className="p-1 flex items-center justify-center"
        style={{ height: '35px' }}
      >
        <i className="fa fa-bars text-xl text-off-white hover:text-yellow" />
      </div>
    </Hamburger>
  );
};

export default Navbar;

const CloseContainer = styled.div`
  top: 12px;
  right: 12px;
`;

const Hamburger = styled.div`
  top: 30px;
  left: 10px;
`;

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
