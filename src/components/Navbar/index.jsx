import React, { Component } from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarStyles>
        <div className="navbar-section">
          <Link to="/about" activeClassName="active-navlink">
            About
          </Link>
          <Link to="/projects" activeClassName="active-navlink">
            Projects
          </Link>
        </div>
        <Link className="headline" to="/">
          <h1>Rahul Rangnekar</h1>
        </Link>
        <div className="navbar-section">
          <Link to="/contact" activeClassName="active-navlink">
            Contact
          </Link>
          <Link className="pill" to="/resume" activeClassName="active-navlink">
            Resume
          </Link>
        </div>
      </NavbarStyles>
    );
  }
}
