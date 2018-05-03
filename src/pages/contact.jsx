import React from 'react';
import Link from 'gatsby-link';

import ShortText from 'components/reusable/inputs/ShortText';
import LongText from 'components/reusable/inputs/LongText';
import { RowContainer, ColumnContainer } from 'components/reusable/Containers';
import { FadeIn } from 'components/reusable/ui/';

let ContactPage = () => (
  <FadeIn>
    <form
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
      <button>Send</button>
    </form>
  </FadeIn>
);

export default ContactPage;
