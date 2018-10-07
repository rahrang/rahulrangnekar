import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts/';
import { FadeIn } from '../components/reusable/ui/';
import Descriptor from '../components/reusable/Descriptor';

import { SMALL_BREAKPOINT } from '../components/layouts/';

const BASE_IMG_URL =
  'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/';

const IndexPage = ({ location }) => {
  const iconOpts = {
    bgSize: 80,
    iconSize: '2xl',
    bgColor: 'blue-lighter',
    iconColor: 'blue-dark'
  };

  const content = (
    <React.Fragment>
      <h2 className="text-off-white text-sm sm:text-2xl md:text-3xl lg:text-5xl font-normal my-2 md:my-3 lg:my-4">
        Rahul Rangnekar
      </h2>
      <p className="text-off-white shadow-none uppercase text-xxs md:text-base lg:text-lg font-bold tracking-wide my-2 md:my-3 lg:my-4">
        Software Developer &amp;&amp; Writer
      </p>
      <div className="flex flex-col md:flex-row my-2 md:my-3 lg:my-4">
        <Link
          className="bg-blue-dark hover:bg-blue-darker text-off-white rounded text-xxs md:text-xs tracking-wide uppercase no-underline mr-2 py-1 px-2 md:py-2 md:px-4 cursor-pointer transition"
          to="/contact"
          style={{ maxWidth: 'fit-content' }}
        >
          Contact Me
        </Link>
        <Link
          className="bg-off-white hover:bg-blue-dark text-blue-dark hover:text-off-white rounded text-xxs md:text-xs tracking-wide uppercase no-underline mt-1 md:mt-0 md:ml-2 py-1 px-2 md:py-2 md:px-4 cursor-pointer transition"
          to="/projects"
          style={{ maxWidth: 'fit-content' }}
        >
          Check out my Projects
        </Link>
      </div>
    </React.Fragment>
  );

  return (
    <Layout location={location}>
      <div className="w-full">
        <FadeIn>
          <div className="flex flex-row flex-wrap items-center relative justify-start">
            <img
              className="w-full m-0 h-full"
              srcSet={`${BASE_IMG_URL}home-576w 840w, ${BASE_IMG_URL}home-1440w 1440w`}
              sizes={`(max-width: ${SMALL_BREAKPOINT}px) 100vw, 100vw`}
              src={`${BASE_IMG_URL}home-1440w`}
              alt="Rahul Rangnekar"
            />
            <div className="ml-10 md:ml-6 absolute">{content}</div>
          </div>
        </FadeIn>
        <div className="flex flex-col items-center justify-center pt-2 px-4 pb-4">
          <h3 className="text-blue text-4xl font-thin my-4">
            I create Solutions
          </h3>
          <div className="flex flex-row flex-wrap items-start justify-center">
            <Descriptor
              iconOpts={{ faIconClass: 'fas fa-lightbulb', ...iconOpts }}
              header="Ideate"
              description="I actively think about the problems I face on a daily basis, then brainstorm potential solutions within my skillset."
            />
            <Descriptor
              iconOpts={{ faIconClass: 'fas fa-code', ...iconOpts }}
              header="Design & Develop"
              description="Over several iterations, I create robust, well-designed applications with cutting-edge technologies to solve my real-world problems."
            />
            <Descriptor
              iconOpts={{ faIconClass: 'fas fa-pen-alt', ...iconOpts }}
              header="Write"
              description="After deploying an application for all to use, I write about the project and my experiences to convey my motivations and design decisions."
            />
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center bg-off-white pt-2 px-4 pb-4">
          <h3 className="text-blue text-4xl font-thin my-4">
            Fresh off the Internet
          </h3>
          <div>
            Here is where I would include my most recent tweets,
            medium/quora/linkedin articles, youtube videos, etc. As of right
            now, this section is empty. I'm betting this website being public
            will light a fire under me to begin creating/contributing in more
            public settings than I have done in these past few months.
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
