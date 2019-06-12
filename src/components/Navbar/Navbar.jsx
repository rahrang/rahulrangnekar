import React from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';
import MobileNavbar from './MobileNavbar';
import ExternalLinkButton from '../ExternalLinkButton';

export default class Navbar extends React.Component {
  render() {
    return (
      <NavbarStyles>
        <div className="content-container">
          <div className="navbar">
            <div className="navbar-section">
              <Link
                className="navlink"
                to="/about"
                activeClassName="navlink--active"
              >
                About
              </Link>
              <Link
                className="navlink"
                to="/projects"
                activeClassName="navlink--active"
              >
                Projects
              </Link>
            </div>
            <Link className="headline navlink" to="/">
              <h1>Rahul Rangnekar</h1>
            </Link>
            <div className="navbar-section">
              <a className="navlink" href="https://blog.rahulrangnekar.com">
                Blog
              </a>
              <ExternalLinkButton
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                alt
              >
                Resume
              </ExternalLinkButton>
            </div>
          </div>
          <div className="mobile-only">
            <MobileNavbar />
            <Link className="headline navlink" to="/">
              <h1>Rahul Rangnekar</h1>
            </Link>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
