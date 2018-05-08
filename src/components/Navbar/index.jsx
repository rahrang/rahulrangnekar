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
  max-width: 275px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled.h1`
  color: white;
`;

Navbar.propTypes = {};

export default Navbar;
