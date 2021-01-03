import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import navbar from "../constants/navbar"
import navbarStyles from "../styles/navbar.module.scss"

const Navbar = () => {
  const [isOpen, setState] = useState(false)
  const [height, setHeight] = useState("0px")
  const ref = useRef(null)

  const handleClickMenu = () => {
    setState(!isOpen);
    (height === "0px") ? setHeight(ref.current.scrollHeight + "px") : setHeight('0px');
  }

  return (
    <nav className={`${navbarStyles.nav} ${isOpen ? navbarStyles.isOpen : ""}`}>
      <div className={navbarStyles.menuToggle} onClick={handleClickMenu}>
        <div className={navbarStyles.hamburger} />
      </div>
      
      <div className={`${navbarStyles.menuDropdown} `} ref={ref} style={{ height: height }}>
        <ul className={navbarStyles.navMenu}>
          {navbar.map((item, index) => {
            return (
              <li key={index}>
                <Link activeClassName={navbarStyles.active} to={item.path}>
                  {item.name}
                </Link>
              </li>
            )
          })}
          {/*<li>*/}
          {/*  <a href="https://gumroad.com/zoliky" target="_blank" rel="noreferrer">Store</a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar