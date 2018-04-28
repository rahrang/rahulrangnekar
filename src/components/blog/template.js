import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const {
    html,
    frontmatter: { title, tags }
  } = post;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>{tags.join(', ')}</div>
    </div>
  );
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
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
