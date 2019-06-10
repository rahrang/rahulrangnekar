const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const component = path.resolve('src/templates/project.jsx');
    const { edges } = res.data.allMarkdownRemark;
    edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      const context = { slug };
      const path = `/projects/${slug}`;
      createPage({ path, component, context });
    });
  });
};
