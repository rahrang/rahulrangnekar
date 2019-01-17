import React, { Component } from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

export default class ProjectsPage extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   debugger;
  // }

  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <div>Projects Page</div>
      </Layout>
    );
  }
}
