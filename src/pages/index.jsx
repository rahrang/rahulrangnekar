import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/seo';
import BlogPostPreview from 'components/BlogPostPreview';

const IndexPage = () => {
  const blogPostsPreviewQuery = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedAt, order: DESC }
        filter: { isHidden: { eq: false } }
      ) {
        edges {
          node {
            id
            title
            subtitle
            slug
            publishedAt(formatString: "MMMM Do, YYYY")
            backgroundImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Home</h1>
      <div className="flex-row flex-wrap">
        {blogPostsPreviewQuery.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogPostPreview {...node} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
