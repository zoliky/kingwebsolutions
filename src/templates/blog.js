import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import blogStyles from "../styles/blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={blogStyles.blog}>
        <div className={blogStyles.blogContainer}>
          <h3 className={blogStyles.title}>{props.data.markdownRemark.frontmatter.title}</h3>
          <p className={blogStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog