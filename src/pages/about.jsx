import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/seo';
import About from 'components/about';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default AboutPage;
