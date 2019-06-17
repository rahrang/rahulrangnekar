import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';

const MarkdownStyles = styled.div`
  code {
    background-color: ${props => props.theme.colors.textColor};
    color: ${props => props.theme.colors.bgColor};
    padding: 0.25rem;
  }
`;

export default function ProjectTemplate({ data }) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, tags }
    }
  } = data;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <MarkdownStyles
          className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const projectQuery = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
        tags
      }
    }
  }
`;
