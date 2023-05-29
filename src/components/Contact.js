import LinkedinIcon from "../images/linkedin-black.svg";
import InstagramIcon from "../images/instagram-black.svg"
import GithubIcon from "../images/github-black.svg"

import { Input } from "antd";

const Contact = () => {
  const { TextArea } = Input;
  return (
    <div className="padding-wrapper contact-wrapper">
      <div className="form-wrapper">
        <p>
          If you have a project in mind or just want to connect, please complete
          the form below to contact me.
        </p>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <Input id="name" className="contact-input" />

          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <Input id="email" type="email" className="contact-input" />

          <label htmlFor="business" className="contact-label">
            Business Name
          </label>
          <Input id="business" type="text" className="contact-input" />

          <label htmlFor="comments" className="contact-label">
            Additional comments?
          </label>
          <TextArea
            id="comments"
            className="contact-input"
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            // onChange={onChange}
            placeholder=":)"
          />
          <div className="contact-btn-wrapper">
            <button className="main-btn">Submit</button>
          </div>
        </form>
      </div>

      <div className="social-media-wrapper">
        {/* <a href=”https://codingbeautydev.com“ target="_blank"> <img src={LinkedinIcon} alt="LinkedIn Link" />
        </a>
         */}
        <a href="https://www.linkedin.com/in/karem-ceron/" target="_blank" className="social-media-link">
          <img src={LinkedinIcon} alt="LinkedIn Link" />
        </a>
        <a href="https://github.com/kceron" target="_blank" className="social-media-link">
          <img src={GithubIcon} alt="Github Link" />
        </a>
        <a href="https://www.instagram.com/karemmm_/" target="_blank" className="social-media-link">
          <img src={InstagramIcon} alt="Instagram Link" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
