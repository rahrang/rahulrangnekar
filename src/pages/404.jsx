import React from 'react';

// TODO: make this your own
import Layout from '../components/layouts/';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
