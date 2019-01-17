import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import theme from '../../constants/theme';
import GlobalStyle from '../globalStyle';
import LayoutStyles from './styles';
import Navbar from '../navbar';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <LayoutStyles>
              <Navbar />
              {children}
            </LayoutStyles>
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
