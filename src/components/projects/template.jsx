import React from 'react';

import { Tag } from 'components/projects/Tags';
import BackButton from 'components/reusable/buttons/BackButton';

export default function Template({ data }) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, tags }
    }
  } = data;

  return (
    <div className="p-4">
      <BackButton text="projects" to="/projects" />
      <div className="flex flex-row flex-wrap items-start justify-center my-4">
        <h1>{title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="flex flex-row flex-wrap items-center justify-center">
          {tags.map((t, i) => <Tag key={`project-tag-${i}`} text={t} />)}
        </div>
      </div>
      <BackButton text="projects" to="/projects" />
    </div>
  );
}

export const projectQuery = graphql`
  query ProjectByKey($key: String!) {
    markdownRemark(frontmatter: { key: { eq: $key } }) {
      html
      frontmatter {
        title
        key
        description
        tags
      }
    }
  }
`;
