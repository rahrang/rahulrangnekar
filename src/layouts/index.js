import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from 'components/Navbar/';
import { RowContainer, ColumnContainer } from 'components/reusable/Containers';

import 'styles/index.scss';
import 'styles/box-sizing.scss';
import 'styles/markdown.scss';

const Layout = ({ children, data }) => (
  <RowContainer ai="flex-start" jc="flex-start">
    <Helmet
      title="Rahul Rangnekar"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Navbar siteTitle={data.site.siteMetadata.title} />
    <Container className="p-h-1h p-v-1">{children()}</Container>
  </RowContainer>
);

Layout.propTypes = {
  children: PropTypes.func
};

const Container = ColumnContainer.extend`
  flex: 80%;
`;

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
