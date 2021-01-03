import React from "react"
import { useLocation } from "@reach/router"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

import "../styles/global.scss"

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <SEO />
      <div className="layout-container">
        <div className="layout-content">
          <Header />
          {(pathname !== "/") ? <div className="spacer"></div> : "" }
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
