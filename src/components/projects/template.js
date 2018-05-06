import React from "react";
import styled from "styled-components";

import { Tag } from "components/projects/Tags";
import { ColumnContainer, RowContainer } from "components/reusable/Containers";
import BackButton from "components/reusable/buttons/BackButton";

export default function Template({ data }) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, tags }
    }
  } = data;

  return (
    <div>
      <BackButton text="projects" to="/projects" />
      <ColumnContainer ai="flex-start" className="m-v-1">
        <h1>{title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        <RowContainer>
          {tags.map((t, i) => <Tag key={`project-tag-${i}`} text={t} />)}
        </RowContainer>
      </ColumnContainer>
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
