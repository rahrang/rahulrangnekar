import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ColumnContainer } from 'components/reusable/Containers';

import NAVBAR_LINKS from './constants';

const Navbar = ({ siteTitle }) => {
  return (
    <Container ai="flex-start" className="p-h-1">
      <Header>{siteTitle}</Header>
      <div className="p-h-1">{NAVBAR_LINKS.map(n => <p>{n.text}</p>)}</div>
    </Container>
  );
};

const Container = ColumnContainer.extend`
  background-color: #0b3c5d;
  height: 100vh;
  position: sticky;
  top: 0;
  flex: 20%;
`;

const Header = styled.h1`
  color: white;
`;

Navbar.propTypes = {};

export default Navbar;
