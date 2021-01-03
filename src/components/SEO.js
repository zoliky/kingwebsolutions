import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, author, description, image, article }) => {
  const { location } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultAuthor,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    author: author || defaultAuthor,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${location}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="author" content={seo.author} />
      <meta name="designer" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;800&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
      
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      
      {twitterUsername && (
        <meta name="twitter:site" content={twitterUsername} />
      )}

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  article: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  image: null,
  author: null,
  article: false,
  description: null,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultAuthor: author
      }
    }
  }
`