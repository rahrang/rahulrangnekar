import React from 'react';

import FooterStyles from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyles>
        <div className="content-container">
          <div className="footer">
            The Contact form will go on the left, and links to social media will
            be on the right
          </div>
        </div>
      </FooterStyles>
    );
  }
}
