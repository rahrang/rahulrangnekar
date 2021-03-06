import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import _throttle from 'lodash/throttle';

import Navbar, { NAVBAR_WIDTH } from '../Navbar/';

import '../../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const ALT_STYLE_PATHS = ['/projects'];
export const SMALL_BREAKPOINT = 576;
class Layout extends Component {
  state = {
    navbarIsOpen: true,
    windowWidth: 0
  };

  componentDidMount() {
    this.mounted = true;
    const { innerWidth } = window;
    this.setState({ windowWidth: innerWidth });
    if (innerWidth < SMALL_BREAKPOINT) this.toggleNavbar(false);
    window.addEventListener('resize', _throttle(this.checkResize, 500));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  checkResize = e => {
    const {
      target: { innerWidth }
    } = e;
    if (this.mounted) {
      if (innerWidth < SMALL_BREAKPOINT) this.toggleNavbar(false);
      this.setState({ windowWidth: innerWidth });
    }
  };

  toggleNavbar = bool => this.setState({ navbarIsOpen: bool });

  calcMarginLeft = navbarIsOpen => {
    const {
      location: { pathname }
    } = this.props;
    const { windowWidth } = this.state;
    if (ALT_STYLE_PATHS.includes(pathname)) {
      if (windowWidth < SMALL_BREAKPOINT) return 40; // alt page, small screen
      if (navbarIsOpen) return NAVBAR_WIDTH; // alt page, reg screen, open navbar
      return 40; // alt page, reg screen, closed navbar
    }
    if (windowWidth < SMALL_BREAKPOINT) return 0; // reg page, small screen
    if (navbarIsOpen) return NAVBAR_WIDTH; // reg page, reg screen, open navbar
    return 0; // reg page, reg screen, closed navbar
  };

  render() {
    const { children } = this.props;
    const { navbarIsOpen } = this.state;

    const renderChild = (children, data) => (
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
        <hr className="no-border h-1 bg-yellow fixed pin w-full z-30 m-0" />
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          isOpen={navbarIsOpen}
          toggle={this.toggleNavbar}
        />
        <div
          className="flex flex-col flex-wrap items-start justify-center transition"
          style={{ marginLeft: this.calcMarginLeft(navbarIsOpen) }}
        >
          {children}
        </div>
      </div>
    );

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
        render={data => renderChild(children, data)}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    host: PropTypes.string,
    hostname: PropTypes.string,
    href: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    replace: PropTypes.func,
    search: PropTypes.string
  })
};

Layout.defaultProps = {
  location: {}
};

export default Layout;
