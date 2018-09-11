import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import LandingImage from 'components/reusable/images/LandingImage';
import { Button } from 'components/reusable/buttons/LinkButton';
import {
  LandingHeader as Header,
  LandingMessage as Message
} from 'components/reusable/texts/';
import ShortText from 'components/reusable/inputs/ShortText';
import LongText from 'components/reusable/inputs/LongText';
import IconLink from 'components/reusable/icons/IconLink';
import { FadeIn } from 'components/reusable/ui/';

const ContactPage = () => {
  const imgInfo = {
    src:
      'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/contact-4.jpg',
    alt: 'Rahul Rangnekar'
  };

  const content = (
    <FadeIn>
      <Header className="mb-2">Send me a Message</Header>
      <form
        className="bg-off-white p-4 rounded shadow"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="flex flex-col flex-wrap items-baseline justify-center">
          <label className="hidden">
            Don't fill this out if you're human.
            <input type="hidden" name="bot-field" />
          </label>
          <div className="flex flex-row flex-wrap items-center justify-center">
            <ShortText
              name="name"
              placeholder="Rahul Rangnekar"
              label="Your Name"
            />
            <ShortText
              name="email"
              placeholder="rahul@rahulrangnekar.com"
              label="Email Address"
              type="email"
            />
          </div>
          <LongText
            name="message"
            placeholder="Hello, Rahul! I loved visiting your website -- good luck in the future!"
            label="Message"
            width={500}
          />
        </div>
        <Button primary width="100%">
          Send It
        </Button>
      </form>
    </FadeIn>
  );

  return (
    <div>
      <LandingImage
        imgInfo={imgInfo}
        title="Rahul Rangnekar"
        content={content}
        position={{ top: '47%', left: '40%' }}
      />
    </div>
  );
};

export default ContactPage;
