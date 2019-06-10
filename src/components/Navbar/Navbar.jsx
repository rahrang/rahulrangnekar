import React from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';
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
                to="/projects"
                activeClassName="navlink--active"
              >
                Projects
              </Link>
              <a className="navlink" href="https://blog.rahulrangnekar.com">
                Blog
              </a>
            </div>
            <Link className="headline navlink" to="/">
              <h1>Rahul Rangnekar</h1>
            </Link>
            <div className="navbar-section">
              <Link
                className="navlink"
                to="/about"
                activeClassName="navlink--active"
              >
                About
              </Link>
              <ExternalLinkButton
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </ExternalLinkButton>
            </div>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
