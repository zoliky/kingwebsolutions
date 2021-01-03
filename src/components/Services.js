import React from "react"
import servicesStyles from "../styles/services.module.scss"

import responsiveSVG from "../images/responsive.svg"
import maintenanceSVG from "../images/maintenance.svg"
import webSVG from "../images/web.svg"

const Services = () => {
  return (
    <section className={servicesStyles.services} id="services"
    >
      <div className={servicesStyles.servicesContainer}>
        <h2
          data-sal="fade"
          data-sal-delay="600"
          data-sal-duration="800"
          data-sal-easing="ease"
        >Services</h2>
        <div className={servicesStyles.cards}>

          <div className={servicesStyles.card}
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            <div className="card-img">
              <img src={responsiveSVG} alt="Web Design"/>
            </div>
            <div className={servicesStyles.cardBody}>
              <h3>Web Design</h3>
              <p>
                I design mobile-friendly websites that are
                reasonably priced and look great on any device.
              </p>
            </div>
          </div>

          <div className={servicesStyles.card}
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            <div className="card-img">
              <img src={maintenanceSVG} alt="Maintenance"/>
            </div>
            <div className={servicesStyles.cardBody}>
              <h3>Website Maintenance</h3>
              <p>
                I can help ensure your website stays up to date,
                secure, and optimized for search engines.
              </p>
            </div>
          </div>

          <div className={servicesStyles.card}
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            <div className="card-img">
              <img src={webSVG} alt="Personalized Services"/>
            </div>
            <div className={servicesStyles.cardBody}>
              <h3>Personalized Services</h3>
              <p>
                Whatever your needs may be, think of me as your
                go-to for all things web development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
