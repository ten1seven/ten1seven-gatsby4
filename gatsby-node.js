// gatsby-node.js

const path = require(`path`)

exports.createPages = async ({ graphql, useStaticQuery, actions }) => {
  const { createPage } = actions

  const WorkTemplate = path.resolve("./src/templates/WorkDetail.js")
  const TagTemplate = path.resolve("./src/templates/Tag.js")

  const result = await graphql(`
    query WpPosts {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            uri
            slug
            title
            id
          }
        }
      }
      allWpWork(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            id
            title
            uri
          }
        }
      }
      allWpTag {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const Portfolio = result.data.allWpWork.edges
  Portfolio.forEach(work => {
    createPage({
      path: `${work.node.uri}`,
      component: WorkTemplate,
      context: {
        id: work.node.id,
      },
    })
  })

  const Tag = result.data.allWpTag.edges
  Tag.forEach(tag => {
    createPage({
      path: `/work${tag.node.uri}`,
      component: TagTemplate,
      context: {
        id: tag.node.id,
      },
    })
  })
}
