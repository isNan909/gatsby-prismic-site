/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ reporter, actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/pages/detail.js")

  // Query our blog posts
  const result = await graphql(`
    query MyQuery {
      allPrismicArticles {
        edges {
          node {
            id
            slugs
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }
  const articles = result.data.allPrismicArticles.edges
  articles.forEach(({ node }) => {
    createPage({
      path: `/detail/${node.slugs[0]}/`,
      component: blogTemplate,
      context: {
        slug: node.id,
      },
    })
  })
}
