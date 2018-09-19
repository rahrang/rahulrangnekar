import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './NavLink';
import Icon from 'components/reusable/icons/Icon';

import { NAVBAR_LINKS } from './constants';
import Footer from './Footer';

export const NAVBAR_WIDTH = 215;

const Navbar = ({ siteTitle, isOpen, toggle }) => {
  return isOpen ? (
    <div
      className="bg-blue h-screen fixed pin-t pin-l z-0 flex flex-col flex-wrap items-start justify-start px-4 py-8"
      style={{ maxWidth: `${NAVBAR_WIDTH}px` }}
    >
      <CloseContainer
        className="cursor-pointer absolute transition"
        onClick={() => toggle(false)}
      >
        <Icon iid="times" maxHeight={20} />
      </CloseContainer>
      <h1 className="text-off-white mb-8">{siteTitle}</h1>
      <div className="flex flex-col flex-wrap items-start justify-center px-4">
        {NAVBAR_LINKS.map(n => <NavLink key={n.to} {...n} />)}
      </div>
      <Footer />
    </div>
  ) : (
    <Hamburger
      className="bg-blue rounded cursor-pointer absolute transition z-10"
      onClick={() => toggle(true)}
    >
      <div className="p-1" style={{ height: '35px' }}>
        <Icon iid="bars" maxHeight={25} />
      </div>
    </Hamburger>
  );
};

export default Navbar;

const CloseContainer = styled.div`
  fill: white;
  top: 12px;
  right: 12px;

  &:hover {
    fill: #f0ce3b;
  }
`;

const Hamburger = styled.div`
  fill: white;
  top: 15px;
  left: 10px;
`;

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
