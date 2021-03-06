const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              key
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const component = path.resolve('src/components/projects/template.jsx');
    const { edges } = res.data.allMarkdownRemark;
    edges.forEach(({ node }) => {
      const { key } = node.frontmatter;
      const context = { key };
      const path = `/projects/${key}`;
      createPage({ path, component, context });
    });
  });
};
