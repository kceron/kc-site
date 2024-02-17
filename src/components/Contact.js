import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import LinkedinIcon from "../images/linkedin-black.svg";
import InstagramIcon from "../images/instagram-black.svg";
import GithubIcon from "../images/github-black.svg";
import { ImSpinner10 } from "react-icons/im";

import { Alert } from "antd";
import { Input } from "antd";

const Contact = ({ navMobileOpen }) => {
  const { TextArea } = Input;
  const contactFormRef = useRef();
  const [loadSubmit, setLoadSubmit] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  console.log("navMobileOpen-", navMobileOpen);

  useEffect(() => {
    contactFormRef.current.user_name.value = null;
    contactFormRef.current.user_email.value = null;
    contactFormRef.current.business.value = null;
    contactFormRef.current.subject.value = null;
    contactFormRef.current.message.value = null;
  }, [loadSubmit]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadSubmit(true);

    emailjs
      .sendForm("service_r1yw2pv", "template_94yqqvr", contactFormRef.current, {
        publicKey: "sNz_wJqUTTHJlrl0f",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          setLoadSubmit(false);
          setDisplayAlert(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="padding-wrapper contact-wrapper">
      <div className="form-wrapper">
        {displayAlert ? (
          <div className="alert-container">
            <Alert message="Success! Message sent." type="success" closable />
          </div>
        ) : null}
        <p className="section-subheader">
          If you have a project in mind or just want to connect, please complete
          the form below to contact me.
        </p>

        {/* {loadSubmit ? (
          <div className="loading-icon-container">
            <ImSpinner10 icon="spinner10" size={44} className="loading-icon" />
          </div>
        ) : ( */}
        <form
          className={`contact-form ${loadSubmit ? "" : ""} ${
            navMobileOpen ? "mobile-nav-open" : ""
          }`}
          ref={contactFormRef}
          onSubmit={(e) => sendEmail(e)}
        >
          <label htmlFor="user_name" className="contact-label">
            Name
          </label>
          <Input
            id="user_name"
            name="user_name"
            className="contact-input"
            required
            disabled={loadSubmit ? true : false}
          />

          <label htmlFor="user_email" className="contact-label">
            Email
          </label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            className="contact-input"
            required
            disabled={loadSubmit ? true : false}
          />

          <label htmlFor="business" className="contact-label">
            Business Name
          </label>
          <Input
            id="business"
            name="business"
            type="text"
            placeholder="Optional"
            className="contact-input"
            disabled={loadSubmit ? true : false}
          />

          <label htmlFor="subject" className="contact-label">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            className="contact-input"
            required
            disabled={loadSubmit ? true : false}
          />

          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <TextArea
            id="message"
            name="message"
            className="contact-input"
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            placeholder="100 chars max :)"
            required
            disabled={loadSubmit ? true : false}
          />
          <div className="contact-btn-wrapper">
            <button
              className={`main-btn ${loadSubmit ? "disabled-btn" : ""}`}
              type="submit"
              disabled={loadSubmit ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
        {/* )} */}
      </div>

      <div className="social-media-wrapper">
        <a
          href="https://www.linkedin.com/in/karem-ceron/"
          target="_blank"
          className="social-media-link"
        >
          <img src={LinkedinIcon} alt="LinkedIn Link" />
        </a>
        <a
          href="https://github.com/kceron"
          target="_blank"
          className="social-media-link"
        >
          <img src={GithubIcon} alt="Github Link" />
        </a>
        {/* <a href="https://www.instagram.com/karemmm_/" target="_blank" className="social-media-link">
          <img src={InstagramIcon} alt="Instagram Link" />
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
