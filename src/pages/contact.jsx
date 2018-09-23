import React from 'react';

import Layout from '../components/layouts/';
import ShortText from '../components/reusable/inputs/ShortText';
import LongText from '../components/reusable/inputs/LongText';
import { FadeIn } from '../components/reusable/ui/';
import IconLink from '../components/reusable/icons/IconLink';

import CONTACT_LINKS from '../constants/contact';

const ContactPage = ({ location }) => {
  const content = (
    <div>
      <h2 className="text-blue lg:text-off-white text-4xl lg:text-5xl font-normal mb-2 mt-4 lg:mt-0">
        Send me a Message
      </h2>
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
          <div className="flex flex-row flex-wrap items-center justify-start">
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
          />
        </div>
        <button
          className="bg-blue text-off-white hover:bg-blue-dark w-full py-1 rounded transition"
          type="button"
        >
          Send It
        </button>
      </form>
    </div>
  );

  return (
    <Layout location={location}>
      <FadeIn>
        <div className="flex flex-row flex-wrap items-center lg:items-end relative justify-center">
          <img
            className="w-full m-0 h-full"
            src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/contact-4.jpg"
            alt="Rahul Rangnekar"
          />
          <div className="px-6 lg:mr-8 lg:absolute">{content}</div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center">
          <h3 className="text-blue text-3xl font-thin my-4">
            and say hi online!
          </h3>
          <div className="my-2 px-2 flex flex-row flex-wrap items-center justify-center">
            {CONTACT_LINKS.map(c => (
              <IconLink
                key={`icon_link_${c.iconClass}`}
                {...{
                  iconSize: 'lg',
                  iconColor: 'blue-dark',
                  hoverColor: 'off-white',
                  boxSize: 40,
                  bgColor: 'blue-lighter',
                  ...c
                }}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default ContactPage;
