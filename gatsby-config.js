const dotenv = require('dotenv');

dotenv.config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: 'http://localhost:8000',
    keywords: [''],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@hooks': './hooks',
          '@templates': './templates',
          '@assets': './assets',
          '@pages': './pages',
          '@src': '../src',
        },
      },
    },
    `gatsby-plugin-typegen`,
    {
      resolve: `jamify-source-ghost`,
      options: {
        ghostConfig: {
          apiUrl: 'https://rcherry-blog.youronetruebabe.com',
          contentApiKey: 'ad04d29048f3f64ced0cbbe6bb',
        },
      },
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        // An array of node types and image fields per node
        // Image fields must contain a valid absolute path to the image to be downloaded
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostTag`,
            imgTags: [`feature_image`],
          },
        ],
        // Additional condition to exclude nodes
        // Takes precedence over lookup
        exclude: (node) => node.ghostId === undefined,
        // Additional information messages useful for debugging
        verbose: true,
        // Option to disable the module (default: false)
        disable: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
