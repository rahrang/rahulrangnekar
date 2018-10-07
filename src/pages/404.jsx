import React from 'react';
import { Link } from 'gatsby';

// TODO: make this your own
import Layout from '../components/layouts/';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>Oh no! How'd you get here?!</h1>
      <p>
        Let's get you back
        <span>
          <Link to="/">
            <span>home</span>
            <span>
              <i className="fa fa-chevron-right" />
            </span>
          </Link>.
        </span>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
