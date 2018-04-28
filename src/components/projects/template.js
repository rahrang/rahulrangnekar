import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: project } = data;
  const {
    html,
    frontmatter: { title, tags }
  } = project;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>{tags.join(', ')}</div>
    </div>
  );
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        tags
      }
    }
  }
`;
