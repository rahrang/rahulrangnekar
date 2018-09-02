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
import { RowContainer, ColumnContainer } from 'components/reusable/Containers';
import { FadeIn } from 'components/reusable/ui/';

const ContactPage = () => {
  const imgInfo = {
    src:
      'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/contact-4.jpg',
    alt: 'Rahul Rangnekar'
  };

  const content = (
    <FadeIn>
      <Header className="m-b-h">Send me a Message</Header>
      <Form
        className="p-v-1 p-h-1"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <ColumnContainer ai="baseline">
          <label className="hidden">
            Don't fill this out if you're human.
            <input type="hidden" name="bot-field" />
          </label>
          <RowContainer jc="baseline">
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
          </RowContainer>
          <LongText
            name="message"
            placeholder="Hello, Rahul! I loved visiting your website -- good luck in the future!"
            label="Message"
            width={500}
          />
        </ColumnContainer>
        <Button primary width="100%">
          Send It
        </Button>
      </Form>
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

const Form = styled.form`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default ContactPage;
