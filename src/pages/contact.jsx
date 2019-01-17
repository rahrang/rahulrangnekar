import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <div>Contact Page</div>
      </Layout>
    );
  }
}
