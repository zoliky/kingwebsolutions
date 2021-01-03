import React, { useState, useRef } from "react"
import faqStyles from "../styles/faq.module.scss"

const FAQ = () => {
  const [isOpen, setState] = useState({ divNum: "" });
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  console.log(isOpen)

  const handleClick = divNum => {
    // setState(divName)
    // console.log(divNum);

    // setState(!isOpen);
    // (ref.current.nextElementSibling.clientHeight) ? setHeight(0) : setHeight(ref.current.nextElementSibling.scrollHeight + "px");
  }

  return (
    <section className={faqStyles.faq}>
      <div className={faqStyles.faqContainer}>
        <h2>Common Questions</h2>

        <div className={faqStyles.panelContainer}>
          <div className={`${faqStyles.panel} ${isOpen ? faqStyles.isOpen : ""}`}>
            <div className={faqStyles.panelHeader} onClick={() => setState("1")} ref={ref}>
              <h4>
                <a href="#">My business already has a Facebook page, so why would I need a website?</a>
              </h4>
              <div className={faqStyles.arrow}></div>
            </div>

            <div className={faqStyles.panelBody} style={{ height: height }}>
              <div className={faqStyles.panelBodyContainer}>
                <p>
                  Your website is part of your business landscape while Facebook, and the data on Facebook, remains part of Facebook. You do not, technically, own the data you host on Facebook and your Facebook page can be closed- sometimes for no reason. 
                </p>
              </div>
            </div>
          </div>

          <div className={`${faqStyles.panel} ${isOpen ? faqStyles.isOpen : ""}`}>
            <div className={faqStyles.panelHeader} onClick={() => setState("2")}>
              <h4>
                <a href="#">Second Question</a>
              </h4>
              <div className={faqStyles.arrow}></div>
            </div>

            <div className={faqStyles.panelBody} style={{ height: height }}>
              <div className={faqStyles.panelBodyContainer}>
                <p>
                </p>
              </div>
            </div>
          </div>

          <div className={`${faqStyles.panel} ${isOpen ? faqStyles.isOpen : ""}`}>
            <div className={faqStyles.panelHeader} onClick={() => setState("3")}>
              <h4>
                <a href="#">How much do you charge?</a>
              </h4>
              <div className={faqStyles.arrow}></div>
            </div>

            <div className={faqStyles.panelBody} style={{ height: height }}>
              <div className={faqStyles.panelBodyContainer}>
                <p>
                  That depends solely on the size and complexity of the project. Usually I don't charge per hour, but per project. I think it's fairer this way towards the client, because sometimes I work on multiple projects at the same time, and it can be difficult to keep track of the time I really spend on a project. You can always ask me for free quote before I start working, though.
                </p>
              </div>
            </div>
          </div>

          <div className={`${faqStyles.panel} ${isOpen ? faqStyles.isOpen : ""}`}>
            <div className={faqStyles.panelHeader} onClick={() => setState("4")}>
              <h4>
                <a href="#">Fourth Question</a>
              </h4>
              <div className={faqStyles.arrow}></div>
            </div>

            <div className={faqStyles.panelBody} style={{ height: height }}>
              <div className={faqStyles.panelBodyContainer}>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default FAQ