import React from 'react';
import { graphql } from 'gatsby';

export default function ProjectTemplate({ data }) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, tags }
    }
  } = data;

  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap items-start justify-center my-4">
        <h1>{title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="flex flex-row flex-wrap items-center justify-center" />
      </div>
    </div>
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
