import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import iconSet from "../images/selection.json"
import IcomoonReact from "icomoon-react"
import ContactForm from "./ContactForm"

import contactStyles from "../styles/contact.module.scss"
import profilepic from "../images/profilepic.png"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          address
          phone
        }
      }
    }
  `);

  return (
    <section className={contactStyles.contact}>
      <div className={contactStyles.contactContainer}>
        <h2
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="800"
          data-sal-easing="ease"
        >Contact</h2>
        <div className={contactStyles.contactInner}
             id="contact"
             data-sal="slide-right"
             data-sal-delay="600"
             data-sal-duration="800"
             data-sal-easing="ease"
        >
          <div className={contactStyles.colLeft}>
            <h3>{data.site.siteMetadata.author}</h3>
            <p>
              <IcomoonReact
                iconSet={iconSet}
                color="#666"
                size="20"
                icon="earth"
              />
              {data.site.siteMetadata.address}</p>
            <p>
              <IcomoonReact
                iconSet={iconSet}
                color="#666"
                size="20"
                icon="phone"
              />
              {data.site.siteMetadata.phone}
            </p>
            <div className={contactStyles.profilePic}>
              <img src={profilepic} alt="Profile" />
            </div>
          </div>
          <div className={contactStyles.colRight}>
            <h3>Start a Project</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact