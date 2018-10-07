import React from 'react';

import Layout from '../components/layouts/';
import ShortText from '../components/reusable/inputs/ShortText';
import LongText from '../components/reusable/inputs/LongText';
import { FadeIn } from '../components/reusable/ui/';
import IconLink from '../components/reusable/icons/IconLink';

import { professional, personal } from '../constants/contact';
import { SMALL_BREAKPOINT } from '../components/layouts/';

const BASE_IMG_URL =
  'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/';

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
            placeholder="Hey Rahul! Your website is awesome -- good luck in the future!"
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
            srcSet={`${BASE_IMG_URL}contact-576w 1080w, ${BASE_IMG_URL}contact-1440w 1440w`}
            sizes={`(max-width: ${SMALL_BREAKPOINT}px) 100vw, 100vw`}
            src={`${BASE_IMG_URL}contact-1440w`}
            alt="Rahul Rangnekar"
          />
          <div className="px-6 lg:mr-8 lg:absolute">{content}</div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center">
          <h3 className="text-blue text-3xl font-thin my-4">
            and say hi online!
          </h3>
          <div className="my-8 px-2 flex flex-col md:flex-row flex-wrap items-center justify-around w-full">
            <div className="my-2">
              <h6 className="text-sm uppercase text-blue">Professional</h6>
              <div className="flex flex-row flex-wrap items-center justify-center">
                {professional.map(c => (
                  <IconLink
                    key={`icon_link_professional_${c.iconClass}`}
                    {...{
                      iconSize: 'xl',
                      iconColor: 'blue-dark',
                      hoverColor: 'off-white',
                      boxSize: 45,
                      bgColor: 'blue-lighter',
                      ...c
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="my-2">
              <h6 className="text-sm uppercase text-blue">Personal</h6>
              <div className="flex flex-row flex-wrap items-center justify-center">
                {personal.map(c => (
                  <IconLink
                    key={`icon_link_personal_${c.iconClass}`}
                    {...{
                      iconSize: 'xl',
                      iconColor: 'blue-dark',
                      hoverColor: 'off-white',
                      boxSize: 45,
                      bgColor: 'blue-lighter',
                      ...c
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default ContactPage;
