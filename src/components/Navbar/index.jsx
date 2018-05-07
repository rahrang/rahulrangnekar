import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './NavLink';
import { ColumnContainer } from 'components/reusable/Containers';
import { SlideInLeft } from 'components/reusable/ui/';

import NAVBAR_LINKS from './constants';

const Navbar = ({ siteTitle }) => {
  return (
    <SlideInLeft>
      <Container ai="flex-start" jc="flex-start" className="p-h-1 p-v-2">
        <Header>{siteTitle}</Header>
        <ColumnContainer className="p-h-1" ai="flex-start">
          {NAVBAR_LINKS.map(n => <NavLink key={n.to} {...n} />)}
        </ColumnContainer>
      </Container>
    </SlideInLeft>
  );
};

const Container = ColumnContainer.extend`
  background-color: #0b3c5d;
  height: 100vh;
  max-width: 275px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled.h1`
  color: white;
`;

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

export default Navbar;
