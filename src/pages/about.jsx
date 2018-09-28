import React from 'react';

import Layout from '../components/layouts/';
import { FadeIn } from '../components/reusable/ui/';

import coffee from '../assets/images/rahul-coffee.jpg';

const About = ({ location }) => (
  <Layout location={location}>
    <FadeIn>
      <div className="flex flex-col items-start max-h-screen">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img
              className="m-0 max-w-full max-h-full"
              src={coffee}
              alt="coffee"
            />
          </div>
          <div className="flex-1">
            <p className="p-4">
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
      </div>
    </FadeIn>
  </Layout>
);

export default About;
