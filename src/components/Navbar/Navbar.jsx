import React from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';

export default class Navbar extends React.Component {
  render() {
    return (
      <NavbarStyles>
        <div className="content-container">
          <div className="navbar">
            <div className="navbar-section">
              <Link to="/projects" activeClassName="active-navlink">
                Projects
              </Link>
              <a href="https://blog.rahulrangnekar.com">Blog</a>
            </div>
            <Link className="headline" to="/">
              <h1>Rahul Rangnekar</h1>
            </Link>
            <div className="navbar-section">
              <Link to="/about" activeClassName="active-navlink">
                About
              </Link>
              <Link
                className="pill"
                to="/resume"
                activeClassName="active-navlink"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
