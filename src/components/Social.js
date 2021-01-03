import React from "react"
import social from "../constants/social"
import iconSet from "../images/selection.json"
import IcomoonReact from "icomoon-react"
import footerStyles from "../styles/footer.module.scss"

const Social = () => {
  return (
    <>
      <ul className={footerStyles.social}>
        {social.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                <IcomoonReact
                  iconSet={iconSet}
                  color="#fff"
                  size="30"
                  icon={item.icon}
                />
                <span className={footerStyles.tooltip}>{item.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Social
