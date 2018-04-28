const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const projectTemplate = path.resolve('src/components/projects/template.js');
  const postTemplate = path.resolve('src/components/blog/template.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              subtitle
              description
              type
              path
              tags
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const { edges } = res.data.allMarkdownRemark;

    const projects = getType(edges, 'project');
    projects.forEach(({ node }) => makePage(node, projectTemplate, createPage));

    const blogPosts = getType(edges, 'blog');
    blogPosts.forEach(({ node }) => makePage(node, postTemplate, createPage));
  });
};

const getType = (edges, t) => {
  return edges.filter(
    ({
      node: {
        frontmatter: { type }
      }
    }) => type === t
  );
};

const makePage = (node, component, createPage) => {
  return createPage({ path: node.frontmatter.path, component });
};
