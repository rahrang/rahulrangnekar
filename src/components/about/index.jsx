import React from 'react';

import AboutStyles from './styles';
import CoffeeImage from './CoffeeImage';

const About = () => (
  <AboutStyles>
    <div className="wrapper">
      <CoffeeImage />
      <p>
        I am an engineer, caffeine and cheese enthusiast, and amateur athlete. I
        am happy to spend my time running and bouldering, cooking new foods and
        making chai or coffee, and creating projects and products to keep me
        engaged with the latest web technologies.
      </p>
    </div>
    <div className="wrapper wrapper--inverse">
      <p>
        I graduated from the University of California at Berkeley in May 2018
        with B.A. degress in Computer Science and Economics. In my time at Cal,
        I created several side projects and was an active leader in my
        business/marketing fraternity. My studies and extracurriculars taught me
        to work well with teammates, empathize with my products' consumers, and
        motivate myself to follow my passions.
      </p>
    </div>
    <div className="wrapper">
      <p>
        I work as a Fullstack Software Engineer at
        <span>
          {' '}
          <a
            className=""
            href="https://channelmeter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChannelMeter
          </a>{' '}
        </span>
        in San Francisco. I build a customer relationship management dashboard
        for brands and media networks to manage and execute influencer marketing
        campaigns with social media creators. I integrate our dashboard with
        APIs from YouTube, Facebook, Instagram, Twitch, and Twitter, analyze and
        massage data into valuable insights, and develop and iterate upon new
        and important features. This allows our clients to make better and
        quicker informed decisions so they can spend more time interacting with
        their creators and growing their business. I&#x27;ve learned a lot on
        the job and accomplished tasks I previously wouldn&#x27;t have thought
        possible. My biggest lesson so far is that{' '}
        <strong>
          there is much more I can learn and do, as long as I&#x27;m willing to
          put in the work.
        </strong>
      </p>
      <p>I blog about my challenges and experiences.</p>
      <button>Check it out!</button>
    </div>
  </AboutStyles>
);

export default About;
