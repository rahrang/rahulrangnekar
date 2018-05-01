const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

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

    const component = path.resolve('src/components/projects/template.js');
    const { edges } = res.data.allMarkdownRemark;
    edges.forEach(({ node }) => {
      const { key } = node.frontmatter;
      const context = { key };
      const path = `/projects/${key}`;
      createPage({ path, component, context });
    });
  });
};
