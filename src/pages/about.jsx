import React from 'react';

import Layout from '../components/layouts/';
import { FadeIn } from '../components/reusable/ui/';

const About = ({ location }) => (
  <Layout location={location}>
    <FadeIn>
      <div className="flex flex-col items-start px-8 py-4">
        <div className="flex flex-col md:flex-row">
          <img
            className="flex-1 w-1/5"
            // style={{ 'max-width': '50%' }}
            src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/home-5"
          />
          <p className="flex-1 w-2/3">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </FadeIn>
  </Layout>
);

export default About;
