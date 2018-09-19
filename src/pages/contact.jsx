import React from 'react';

import ShortText from 'components/reusable/inputs/ShortText';
import LongText from 'components/reusable/inputs/LongText';
import { FadeIn } from 'components/reusable/ui/';

const ContactPage = () => {
  const content = (
    <FadeIn>
      <h2 className="text-off-white md:text-4xl lg:text-5xl font-normal mb-1">
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
        <button
          className="bg-blue text-off-white hover:bg-blue-dark w-full py-1 rounded transition"
          type="button"
        >
          Send It
        </button>
      </form>
    </FadeIn>
  );

  return (
    <div>
      <div className="flex flex-row flex-wrap items-center relative justify-end">
        <img
          className="w-full m-0 h-full"
          src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/contact-4.jpg"
          alt="Rahul Rangnekar"
        />
        <div className="px-6 absolute">{content}</div>
      </div>
    </div>
  );
};

export default ContactPage;
