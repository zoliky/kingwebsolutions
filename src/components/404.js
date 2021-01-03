import React from "react"
import page404styles from "../styles/404.module.scss"
import errorSVG from "../images/404.svg"

const Page404 = () => {
  return (
    <section className={page404styles.page404}>
      <div className={page404styles.page404Container}>
        <img src={errorSVG} alt="Page Not Found" />
        <h2>Page not found</h2>
        <p>The page you're looking for does not exist</p>
        <p><a className="button" role="button" href="/">Go to homepage</a></p>
      </div>
    </section>
  )
}

export default Page404