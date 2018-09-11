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
    <div className="bg-blue h-screen fixed pin-t pin-l z-0 flex flex-col flex-wrap items-start justify-start px-4 py-8" style={{maxWidth: `${NAVBAR_WIDTH}px`}}>
      <CloseContainer onClick={() => toggle(false)}>
        <Icon iid="times" maxHeight={20} />
      </CloseContainer>
      <h1 className="text-off-white mb-8">{siteTitle}</h1>
      <div className="flex flex-col flex-wrap items-start justify-center px-4">
        {NAVBAR_LINKS.map(n => <NavLink key={n.to} {...n} />)}
      </div>
      <Footer />
    </div>
  ) : (
    <Hamburger onClick={() => toggle(true)}>
      <div className="p-1" style={{ height: '35px' }}>
        <Icon iid="bars" maxHeight={25} />
      </div>
    </Hamburger>
  );
};

export default Navbar;

const CloseContainer = styled.div`
  cursor: pointer;
  fill: white;
  position: absolute;
  top: 12px;
  right: 12px;
  transition: all 0.25s;

  &:hover {
    fill: #f0ce3b;
  }
`;

const Hamburger = styled.div`
  background-color: #4b75b9;
  border-radius: 5px;
  cursor: pointer;
  fill: white;
  z-index: 2;
  position: absolute;
  top: 15px;
  left: 10px;
  transition: all 0.25s;

  &:hover {
    fill: #f0ce3b;
  }
`;

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};
