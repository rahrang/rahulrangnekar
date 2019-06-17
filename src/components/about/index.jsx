import React from 'react';
import { Link } from 'gatsby';
import { ExternalLinkButton } from '@rahrang/frame';

import AboutStyles from './styles';
import CoffeeImage from './CoffeeImage';
import GradImage from './GradImage';
import PortlandImage from './PortlandImage';

const About = () => (
  <AboutStyles>
    <div className="wrapper">
      <CoffeeImage />
      <p>
        I am an engineer, caffeine and cheese enthusiast, and amateur athlete. I
        love to run outdoors with my girlfriend Kimi or boulder indoors solo
        daily. I enjoy a strong cup of homemade chai or coffee every morning,
        and strive to cook new recipes and foods for my meals. I am engrossed in
        modern web technologies, specifically JavaScript and React, so much so
        that a majority of my free time is devoted to{' '}
        <Link to="/projects">creating new projects</Link> and writing about my
        experiences on <a href="https://blog.rahulrangnekar.com">my blog</a>.
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
      <GradImage />
    </div>
    <div className="wrapper">
      <PortlandImage />
      <p>
        I work as a Full Stack Software Engineer at
        <span>
          {' '}
          <a
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
        and important features. I&#x27;ve learned a lot on the job and
        accomplished tasks I previously wouldn&#x27;t have thought possible. My
        biggest lesson so far is that{' '}
        <strong>
          there is much more I can learn and do, as long as I&#x27;m willing to
          put in the work.
        </strong>
      </p>
    </div>
    <div className="actions flex-row items-baseline">
      <p>I blog about my challenges and experiences.</p>
      <ExternalLinkButton
        className="link-btn"
        href="https://blog.rahulrangnekar.com"
        alternate
      >
        Read My Blog!
      </ExternalLinkButton>
    </div>
  </AboutStyles>
);

export default About;
