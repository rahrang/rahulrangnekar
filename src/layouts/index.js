import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
        <hr className="no-border h-1 bg-yellow fixed pin w-full z-30 m-0" />
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          isOpen={navbarIsOpen}
          toggle={this.toggleNavbar}
        />
        <div
          className="flex flex-col flex-wrap items-start justify-center transition"
          style={{ marginLeft: this.calcMarginLeft(navbarIsOpen) }}
          // marginLeft={this.calcMarginLeft(navbarIsOpen)}
        >
          {children()}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

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
