import React from "react"
import Social from "./Social"
import footerStyles from "../styles/footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <Social />
      <p>
        Copyright {new Date().getFullYear()} {data.site.siteMetadata.author}.
        All rights reserved.
      </p>
      <p>
        The source code for this site can be found on {" "}
        <a
          className={footerStyles.link}
          href="https://github.com/zoliky/kingwebsolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>.
      </p>
    </footer>
  )
}

export default Footer