import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/seo';

export default class BlogPageRedirect extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <div>Blog Page</div>
        <h4>This should redirect to blog.rahulrangnekar.com when ready</h4>
      </Layout>
    );
  }
}
