import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
`;

class Projects extends React.Component {
  renderProjectCards = () => {
    const { data } = this.props;
    return data.allMarkdownRemark.edges.map(({ node }) => (
      <ProjectCard {...node.frontmatter} />
    ));
  };

  render() {
    return <ProjectsWrapper>{this.renderProjectCards()}</ProjectsWrapper>;
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

export default Projects;
