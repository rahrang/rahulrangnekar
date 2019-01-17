import React from 'react';

import AboutStyles from './styles';
import CoffeeImage from './CoffeeImage';

const About = () => (
  <AboutStyles>
    <div className="wrapper">
      <CoffeeImage />
      <p>
        I work as a software developer at
        <span>
          {' '}
          <a
            className="text-blue-lighter hover:text-blue-dark active:text-yellow transition no-underline uppercase text-xs"
            href="https://channelmeter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChannelMeter
          </a>{' '}
        </span>
        in San Francisco, where I build a customer relationship management
        dashboard for brands and agencies to connect with social media content
        creators. I contribute to all aspects of our product throughout the
        stack, but my speciality is front-end design and development. My current
        project has me automating the onboarding process for new clients.
        I&#x27;m designing an intuitive user interface, writing instructional
        copy, and validating and processing CSV files to update our databases,
        freeing up time and energy for our engineers to build new features and
        our salespeople to find new leads. I’ve learned a lot on the job and
        accomplished features I previously wouldn&#x27;t have thought possible.
        My biggest lesson so far is that{' '}
        <strong>
          there is much more I can learn and do, as long as I&#x27;m willing to
          put in the work.
        </strong>
      </p>
    </div>
  </AboutStyles>
);

export default About;
