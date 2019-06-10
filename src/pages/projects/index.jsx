import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

import Projects from '../../components/projects/Projects';

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Projects data={data} />
      </Layout>
    );
  }
}

export const projectQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            description
            status
            tags
            timespan
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
