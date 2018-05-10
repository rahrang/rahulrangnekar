import React from 'react';
import Link from 'gatsby-link';

import LandingImage from 'components/reusable/images/LandingImage';
import {
  LandingHeader as Header,
  LandingMessage as Message
} from 'components/reusable/texts/';

const IndexPage = ({ data }) => {
  const imgInfo = {
    src:
      'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/home.jpg',
    alt: 'Rahul Rangnekar'
  };

  const content = (
    <React.Fragment>
      <Header className="m-b-h">Rahul Rangnekar</Header>
      <Message>Software Engineer &amp;&amp; Writer</Message>
    </React.Fragment>
  );

  return (
    <div>
      <LandingImage
        imgInfo={imgInfo}
        title="Rahul Rangnekar"
        content={content}
        position={{ top: '35%', left: '50px' }}
      />
    </div>
  );
};

export default IndexPage;
