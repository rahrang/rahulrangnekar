import React from 'react';
import Link from 'gatsby-link';

import { FadeIn } from 'components/reusable/ui/';
import Descriptor from 'components/reusable/Descriptor';

const IndexPage = ({ data }) => {
  const iconOpts = {
    bgSize: 70,
    iconSize: '2xl',
    bgColor: 'blue-lighter',
    iconColor: 'blue-dark'
  };

  const content = (
    <React.Fragment>
      <h2 className="text-off-white md:text-4xl lg:text-5xl font-normal sm:mb-2 md:mb-4 lg:mb-6">
        Rahul Rangnekar
      </h2>
      <p className="text-off-white shadow-none md:text-base uppercase md:text-base lg:text-lg font-bold tracking-wide">
        Software Developer &amp;&amp; Writer
      </p>
      <div className="sm:my-4 lg:my-8">
        <Link
          className="bg-blue-dark hover:bg-blue-darker text-off-white rounded text-xs tracking-wide uppercase p-2 no-underline mx-2 px-4 pointer transition"
          to="/contact"
        >
          Contact Me
        </Link>
        <Link
          className="bg-off-white hover:bg-blue-dark text-blue-dark hover:text-off-white rounded text-xs tracking-wide uppercase p-2 no-underline mx-2 px-4 pointer transition"
          to="/projects"
        >
          Check out my Projects
        </Link>
      </div>
    </React.Fragment>
  );

  return (
    <div className="full-width">
      <FadeIn>
        <div className="flex flex-row flex-wrap items-center relative justify-start">
          <img
            className="w-full m-0 h-full"
            src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/home-5"
            alt="Rahul Rangnekar"
          />
          <div className="px-6 absolute">{content}</div>
        </div>
      </FadeIn>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-blue text-4xl font-thin my-4">
          I create solutions
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Descriptor
            iconOpts={{ faIconClass: 'fas fa-lightbulb', ...iconOpts }}
            header="Ideate"
            description="Find problems in my life."
          />
          <Descriptor
            iconOpts={{ faIconClass: 'fas fa-code', ...iconOpts }}
            header="Design & Develop"
            description="Find ways to solve them with web applications."
          />
          <Descriptor
            iconOpts={{ faIconClass: 'fas fa-pen-alt', ...iconOpts }}
            header="Write"
            description="Write about my experiences."
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
