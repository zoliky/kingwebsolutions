import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"

import headerStyles from "../styles/header.module.scss"
import Navbar from "./Navbar.js"

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const { pathName } = useLocation();

  useEffect(() => {
    if (pathName === "/") {
      window.addEventListener("scroll", event => {
        (event.target.documentElement.scrollTop > 100) ? setBgColor("#1695a3") : setBgColor("transparent");
      });
    } else {
      setBgColor("#1695a3");
    }
  });
  
  return (
    <header className={headerStyles.header} style={{ background: bgColor }}>
      <div className={headerStyles.headerContainer}>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
