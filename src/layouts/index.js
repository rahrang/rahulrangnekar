import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar, { NAVBAR_WIDTH } from 'components/Navbar/';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const ALT_STYLE_PATHS = ['/', '/contact'];
class Layout extends Component {
  state = {
    navbarIsOpen: true
  };

  toggleNavbar = bool => this.setState({ navbarIsOpen: bool });

  calcMarginLeft = navbarIsOpen => {
    const {
      location: { pathname }
    } = this.props;
    const altStyle = ALT_STYLE_PATHS.includes(pathname);
    if (navbarIsOpen) return NAVBAR_WIDTH;
    if (altStyle) return 0;
    return 40;
  };

  render() {
    const { children, data } = this.props;
    const { navbarIsOpen } = this.state;
    return (
      <div style={{ minWidth: 360 }}>
        <Helmet
          title="Rahul Rangnekar"
          meta={[
            { name: 'description', content: '' },
            {
              name: 'keywords',
              content:
                'software developer, designer, writer, lover of fun, staying active, and dogs'
            }
          ]}
        />
        <TopBar className="m-0" />
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          isOpen={navbarIsOpen}
          toggle={this.toggleNavbar}
        />
        <Container
          className="flex flex-col flex-wrap items-start justify-center"
          marginLeft={this.calcMarginLeft(navbarIsOpen)}
        >
          {children()}
        </Container>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func
};

const Container = styled.div`
  margin-left: ${props => `${props.marginLeft}px`};
  transition: all 0.25s;
`;

const TopBar = styled.hr`
  border: none;
  height: 5px;
  background-color: #f0ce3b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
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
