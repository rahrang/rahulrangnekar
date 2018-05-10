import React from 'react';
import styled from 'styled-components';

import { RowContainer } from 'components/reusable/Containers';
import IconLink from 'components/reusable/icons/IconLink';

import { FOOTER_LINKS } from './constants';

const Footer = () => {
  return (
    <Container className="in-b">
      {FOOTER_LINKS.map(l => <IconLink key={l.iid} {...l} maxHeight={16} />)}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 20px;
`;

export default Footer;
