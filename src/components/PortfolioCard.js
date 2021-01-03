import React, { useState } from "react"
import portfolioStyles from "../styles/portfolio.module.scss"
import Img from "gatsby-image/withIEPolyfill"

const PortfolioCard = props => {
  const [isOpen, setState] = useState(false)
  const toggleCard = () => setState(!isOpen)

  return (
    <div className={portfolioStyles.card}>
      <div className={`${portfolioStyles.item} ${isOpen ? `${portfolioStyles.active}` : ''}`} onClick={toggleCard}>
        <div className={`${portfolioStyles.itemSide} ${portfolioStyles.itemSideFront}`}>
          <div className={portfolioStyles.itemImage}>
            <Img
              fluid={props.Image}
              alt=""
            />
            {/*<p>1</p>*/}
            {/*<p>2</p>*/}
            {/*<p>3</p>*/}
            {/*<p>4</p>*/}
          </div>
          {/*<div className={portfolioStyles.itemTitle}>{props.Name}</div>*/}
        </div>

        <div className={`${portfolioStyles.itemSide} ${portfolioStyles.itemSideBack}`}>
          <div className={portfolioStyles.itemBackDescr}>
            {props.children}
          </div>
          <a className={portfolioStyles.button} href={props.LinkWebsite} role="button">Visit the website</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
