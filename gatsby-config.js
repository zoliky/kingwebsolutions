module.exports = {
  siteMetadata: {
    title: "King Web Solutions",
    titleTemplate: "%s",
    author: "Zoltán Király",
    address: "Arad, Romania",
    phone: "+40 73 092 0970",
    description:
      "King Web Solutions",
    url: "https://kingwebsolutions.onrender.com",
    image: "/orchid.jpg",
    twitterUsername: "@zoliky",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        disable: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images/` }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e400c0`,
        showSpinner: false,
      },
    },
  ],
}
