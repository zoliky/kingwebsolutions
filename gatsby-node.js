/* ----------------------------------------------------------------------------
           FILE: gatsby-node.js
    DESCRIPTION: Gatsby Node APIs
         AUTHOR: Zoltán Király <zoliky@gmail.com>
-----------------------------------------------------------------------------*/

const path = require("path")

// Generate a slug for each blog post
module.exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Generate a new page for each blog post
module.exports.createPages = async ({ graphql, actions }) => {
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    actions.createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}