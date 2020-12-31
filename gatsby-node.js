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
            data {
              heading {
                text
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  result.data.allPrismicArticles.edges.forEach(({ node }) => {
    // Create a page for each blog post
    createPage({
      path: `/detail/${node.slugs}`,
      component: blogTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
