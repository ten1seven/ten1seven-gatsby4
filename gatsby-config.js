const graphQLRoute =
  process.env.NODE_ENV === "development"
    ? "http://ten1seven-gatsby.test/graphql"
    : "https://cms.ten1seven.com/graphql"

module.exports = {
  siteMetadata: {
    siteUrl: "https://ten1seven.com",
    title: "Ten 1 Seven Studio",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: graphQLRoute,
      },
    },
    {
      resolve: `@imgix/gatsby`,
      options: {
        domain: "ten1seven.imgix.net",
        defaultImgixParams: { auto: ["compress", "format"] },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
