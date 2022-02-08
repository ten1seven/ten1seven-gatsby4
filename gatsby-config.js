module.exports = {
  siteMetadata: {
      title: `Ten 1 Seven`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://ten1seven-gatsby.test/graphql"
    }
  }]
};