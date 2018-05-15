import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar, { NAVBAR_WIDTH } from 'components/Navbar/';
import { ColumnContainer } from 'components/reusable/Containers';

import 'styles/index.scss';
import 'styles/box-sizing.scss';
import 'styles/markdown.scss';

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
      <div>
        <Helmet
          title="Rahul Rangnekar"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <TopBar className="m-0" />
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          isOpen={navbarIsOpen}
          toggle={this.toggleNavbar}
        />
        <Container
          ai="flex-start"
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

const Container = ColumnContainer.extend`
  margin-left: ${props => `${props.marginLeft}px`};
  transition: all 0.25s;
`;

const TopBar = styled.hr`
  border: none;
  height: 5px;
  background-color: #d9b310;
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
