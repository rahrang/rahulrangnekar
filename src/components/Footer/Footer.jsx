import React from 'react';
import _map from 'lodash/map';

import FooterStyles from './styles';
import Icon from '../Icon';
import links from './links';

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyles>
        <div className="content-container">
          <div className="footer">
            <div className="contact-form">
              <h3>Contact Me!</h3>
              <form
                className="contact"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <div className="row-1">
                  <div className="input-wrapper">
                    <label htmlFor="name">
                      <span className="label">Name</span>
                      <input type="text" name="name" id="name" />
                    </label>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="email">
                      <span className="label">Email</span>
                      <input type="email" name="email" id="email" />
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="message">
                    <span className="label">Message</span>
                    <textarea name="message" id="message" />
                  </label>
                </div>
                <div data-netlify-recaptcha="true" />
                <div className="button-wrapper">
                  <button type="submit">Send It!</button>
                </div>
              </form>
            </div>
            <div className="online">
              <h3>Find Me Online!</h3>
              <div className="social-icons">
                {_map(links, l => (
                  <a
                    className="link"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon iconKey={l.icon} />
                    <span className="platform">{l.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FooterStyles>
    );
  }
}
