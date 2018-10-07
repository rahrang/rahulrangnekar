import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts/';
import { FadeIn } from '../components/reusable/ui/';

const About = ({ location }) => (
  <Layout location={location}>
    <FadeIn>
      <div className="flex flex-col items-start p-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-around">
          <div className="text-center max-w-full">
            <img
              className="m-0 max-w-full"
              src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best,c_scale,w_400/website/about/rahul-coffee"
              alt="coffee"
            />
          </div>
          <div className="px-4 w-full lg:w-1/2 my-4">
            <h3 className="mb-4 xl:text-2xl">Hi, I’m Rahul.</h3>
            <p className="leading-loose text-sm md:text-md">
              I work as a software developer at
              <span>
                {' '}
                <ExtLink to="https://channelmeter.com">
                  ChannelMeter
                </ExtLink>{' '}
              </span>
              in San Francisco, where I build a customer relationship management
              dashboard for brands and agencies to connect with social media
              content creators. I contribute to all aspects of our product
              throughout the stack, but my speciality is front-end design and
              development. My current project has me automating the onboarding
              process for new clients. I'm designing an intuitive user
              interface, writing instructional copy, and validating and
              processing CSV files to update our databases, freeing up time and
              energy for our engineers to build new features and our salespeople
              to find new leads. I’ve learned a lot on the job and accomplished
              features I previously wouldn't have thought possible. My biggest
              lesson so far is that{' '}
              <strong>
                there is much more I can learn and do, as long as I'm willing to
                put in the work.
              </strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-around">
          <div className="px-4 w-full lg:w-1/2 my-4">
            <p className="leading-loose text-sm md:text-md">
              I graduated from University of California, Berkeley in May 2018
              with B.A. degrees in Computer Science and Economics. In my time at
              Cal, I created{' '}
              <IntLink to="/projects?start=00-2016&end=08-2018">
                several side projects
              </IntLink>
              , especially in my final two years, and was an active member in my
              business/marketing fraternity. My studies and extracurriculars
              taught me to work well with teammates, empathize with product
              users and consumers, and motivate myself to follow my passions.
            </p>
            <br />
            <p className="leading-loose text-sm md:text-md">
              Outside of work, I’m passionate about helping others. I write
              reviews on Yelp, articles on Medium, and advice on Quora. In the
              next year, I hope to build out a YouTube channel to teach and
              guide others in designing and developing software. I also hope to
              build more robust and extensive side projects. I enjoy honing my
              craft and pushing my boundaries to become better.
            </p>
          </div>
          <div className="text-center max-w-full">
            <img
              className="m-0 max-w-full"
              src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best,c_scale/website/about/rahul-grad-2"
              alt="graduation"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-around">
          <div className="text-center max-w-full">
            <img
              className="m-0 max-w-full"
              src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best,c_scale/website/about/rahul-scenery"
              alt="graduation"
            />
          </div>
          <div className="px-4 w-full lg:w-1/2 my-4">
            <p className="leading-loose text-sm md:text-md">
              More recently, I'm exploring the worlds of climbing, coffee, and
              chai. My morning workouts are bouldering or weightlifting at the
              local climbing gym, my pre-work ritual is brewing coffee in my
              French Press (or leaving it in the fridge for overnight cold
              brew), and on the weekends I opt to make masala chai instead. I'm
              training for the Berkeley Half Marathon in November!
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  </Layout>
);

const ExtLink = ({ to, children }) => (
  <a
    className="text-blue-lighter hover:text-blue-dark active:text-yellow transition no-underline uppercase text-xs"
    href={to}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const IntLink = ({ to, children }) => (
  <Link
    className="text-blue-lighter hover:text-blue-dark active:text-yellow transition no-underline uppercase text-xs"
    to={to}
  >
    {children}
  </Link>
);

export default About;
