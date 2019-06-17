import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
  getInitialTheme,
  getTheme,
  setTheme,
  GlobalStyle,
  Navbar,
  Footer,
  SwitchThemeButton
} from '@rahrang/frame';

class Layout extends React.Component {
  state = {
    themeKey: getInitialTheme()
  };

  switchTheme = newThemeKey => {
    this.setState({ themeKey: newThemeKey });
    setTheme(newThemeKey);
  };

  render() {
    const { children } = this.props;
    const { themeKey } = this.state;
    return (
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
        render={() => (
          <React.Fragment>
            <ThemeProvider theme={getTheme(themeKey)}>
              <React.Fragment>
                <GlobalStyle />
                <div>
                  <SwitchThemeButton
                    onClick={this.switchTheme}
                    currThemeKey={themeKey}
                  />
                  <Navbar />
                  <div className="content-container page-container">
                    {children}
                  </div>
                  <Footer />
                </div>
              </React.Fragment>
            </ThemeProvider>
          </React.Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
