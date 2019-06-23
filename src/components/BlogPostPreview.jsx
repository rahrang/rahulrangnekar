import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogPostPreviewWrapper = styled.div`
  background-color: ${props => props.theme.colors.offBgColor};
  border-radius: ${props => props.theme.br};
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

const BackgroundImage = styled.div`
  background-image: ${props => `url('${props.image}')`};
  border-top-left-radius: ${props => props.theme.br};
  border-top-right-radius: ${props => props.theme.br};
  height: 200px;
  width: 300px;
  background-position: center;
  background-size: cover;
`;

const BlogPostPreview = ({
  title,
  subtitle,
  slug,
  publishedAt,
  backgroundImage
}) => (
  <BlogPostPreviewWrapper>
    <BackgroundImage image={backgroundImage.file.url} />
    <h4 className="title my-h p-h">
      <a href={`https://blog.rahulrangnekar.com/${slug}`}>{title}</a>
    </h4>
  </BlogPostPreviewWrapper>
);

export default BlogPostPreview;
