import React from 'react';
import { Link } from 'gatsby';

import ExternalLinkButton from '../ExternalLinkButton';
import Icon from '../Icon';

export default class MobileNavbar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="mobile">
        <button className="hamburger" onClick={this.toggle}>
          <Icon iconKey="hamburger" />
        </button>
        {isOpen && (
          <div className="mobile-navbar">
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
            <a className="navlink" href="https://blog.rahulrangnekar.com">
              Blog
            </a>
            <ExternalLinkButton
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ExternalLinkButton>
          </div>
        )}
      </div>
    );
  }
}
