import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import blogStyles from "../styles/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={blogStyles.blog}>
        <div className={blogStyles.blogContainer}>
          <h2>Blog</h2>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <article className={blogStyles.blogPost}>
                <Link
                  className={blogStyles.link}
                  to={`/blog/${edge.node.fields.slug}`}
                >
                  <h3 className={blogStyles.title}>
                    {edge.node.frontmatter.title}
                  </h3>
                  <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                  <p className={blogStyles.content}>{edge.node.excerpt}</p>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
