import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './NavLink';
import Icon from 'components/reusable/icons/Icon';
import { ColumnContainer } from 'components/reusable/Containers';

import { NAVBAR_LINKS } from './constants';
import Footer from './Footer';

export const NAVBAR_WIDTH = 200;

const Navbar = ({ siteTitle, isOpen, toggle }) => {
  return isOpen ? (
    <Container ai="flex-start" jc="flex-start" className="p-h-1 p-v-2">
      <CloseContainer onClick={() => toggle(false)}>
        <Icon iid="times" maxHeight={20} />
      </CloseContainer>
      <Header>{siteTitle}</Header>
      <ColumnContainer className="p-h-1" ai="flex-start">
        {NAVBAR_LINKS.map(n => <NavLink key={n.to} {...n} />)}
      </ColumnContainer>
      <Footer />
    </Container>
  ) : (
    <Hamburger onClick={() => toggle(true)}>
      <div className="p-h-q p-v-q" style={{ height: '35px' }}>
        <Icon iid="bars" maxHeight={25} />
      </div>
    </Hamburger>
  );
};

export default Navbar;

const Container = ColumnContainer.extend`
  background-color: #0b3c5d;
  height: 100vh;
  max-width: ${NAVBAR_WIDTH}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const CloseContainer = styled.div`
  cursor: pointer;
  fill: white;
  position: absolute;
  top: 12px;
  right: 12px;
  transition: all 0.25s;

  &:hover {
    fill: #d9b310;
  }
`;

const Hamburger = styled.div`
  background-color: #0b3c5d;
  border-radius: 5px;
  cursor: pointer;
  fill: white;
  z-index: 2;
  position: absolute;
  top: 15px;
  left: 10px;
  transition: all 0.25s;

  &:hover {
    fill: #d9b310;
  }
`;

const Header = styled.h1`
  color: white;
`;

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};
