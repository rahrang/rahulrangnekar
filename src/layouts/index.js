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
  <div>
    <Helmet
      title="Rahul Rangnekar"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Navbar siteTitle={data.site.siteMetadata.title} />
    <Container ai="flex-start" className="p-h-1h p-v-1">
      {children()}
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

const Container = ColumnContainer.extend`
  margin-left: 275px;
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
