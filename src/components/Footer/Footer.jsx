import React from 'react';

import FooterStyles from './styles';

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
                <div className="button-wrapper">
                  <button type="submit">Send It!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FooterStyles>
    );
  }
}
