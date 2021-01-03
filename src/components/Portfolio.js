/* ----------------------------------------------------------------------------
           FILE: PortfolioCardsList.js
    DESCRIPTION: Portfolio cards list component
         AUTHOR: Zoltán Király <zoliky@gmail.com>
-----------------------------------------------------------------------------*/

import React from "react"
import PortfolioCard from "./PortfolioCard"
import portfolioStyles from "../styles/portfolio.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioCardsList = () => {

  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "smbcjm.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      second: file(relativePath: { eq: "curbsidemeals.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      defaultImg: file(relativePath: { eq: "default.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={portfolioStyles.portfolio}>
      <div
        className={portfolioStyles.cardsContainer}
      >
        <h2 id="portfolio"
            data-sal="fade"
            data-sal-delay="600"
            data-sal-duration="800"
            data-sal-easing="ease"
        >Portfolio</h2>
        <div className={portfolioStyles.cards}
             data-sal="slide-up"
             data-sal-delay="600"
             data-sal-duration="800"
             data-sal-easing="ease"
        >
          <PortfolioCard
            Image={data.first.childImageSharp.fluid}
            Name="Spring Mountain Benefit Corp."
            LinkWebsite="https://www.smbcjm.org">
            <p>
              I develop and maintain the website for
              Spring Mountain Benefit Corp., a nonprofit
              corporation organized and operated exclusively
              for charitable purposes to assist people in Jamaica.
            </p>
          </PortfolioCard>

          <PortfolioCard
            Image={data.defaultImg.childImageSharp.fluid}
            Name="Project Name"
            LinkWebsite="">
            <p>This project is work in progress.</p>
          </PortfolioCard>

          <PortfolioCard
            Image={data.defaultImg.childImageSharp.fluid}
            Name="Project Name">
            <p>This project is work in progress.</p>
          </PortfolioCard>

        </div>
      </div>
    </section>
  )
}

export default PortfolioCardsList
