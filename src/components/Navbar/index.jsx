import React, { Component } from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarStyles>
        <div className="navbar-section">
          <Link to="/" activeClassName="active-navlink">
            Home
          </Link>
          <Link to="/about" activeClassName="active-navlink">
            About
          </Link>
        </div>
        <h1 className="headline">Rahul Rangnekar</h1>
        <div className="navbar-section">
          <Link to="/projects" activeClassName="active-navlink">
            Project
          </Link>
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
