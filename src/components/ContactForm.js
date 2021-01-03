import React from "react";
import contactFormStyles from "../styles/contactform.module.scss"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = { status: "" };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={ this.submitForm }
        action="https://script.google.com/macros/s/AKfycbz578f8m6GoctZw5KerbK0Cqq8B84O73ZbjJtV6/exec"
        method="POST"
      >
        <div className={contactFormStyles.formGroup}>
          <div className={contactFormStyles.col50pct}>
            <label htmlFor="form-name">Your Name</label>
            <input className={contactFormStyles.formControl} type="text" name="name" id="form-name" required />
          </div>
            <div className={contactFormStyles.col50pct}>
              <label htmlFor="form-email">Your Email Address</label>
              <input className={contactFormStyles.formControl} type="email" name="email" id="form-email" required />
          </div>
        </div>

        <div className={contactFormStyles.formGroup}>
          <div className={contactFormStyles.col100pct}>
            <label htmlFor="form-message">Project Details</label>
            <textarea className={contactFormStyles.formControl} name="message" id="form-message" />
          </div>
        </div>

        <div className={contactFormStyles.formGroup}>
          <div className={contactFormStyles.col100pct}>
            {status === "SUCCESS" ? <p>Thank you. Your message has been sent and you will soon receive a response.</p> : <input className={contactFormStyles.button} type="submit" name="submit" value="Send Message" />}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </div>
      </form>
    );
  }
}