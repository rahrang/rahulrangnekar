require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Rahul Rangnekar`,
    description: `Software Developer. Writer. Enthusiast.`,
    author: `@rahrang`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900
            }
          },
          'gatsby-remark-external-links'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rahul Rangnekar`,
        short_name: `Rahul Rangnekar`,
        start_url: `/`,
        background_color: `#FAFAED`,
        theme_color: `#4B75B9`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
