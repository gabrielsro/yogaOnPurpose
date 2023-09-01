import "./Contact.css";
import youtube from "./icons/youtube.svg";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import phone from "./icons/phone.svg";
import email from "./icons/email.svg";
import messageSubmission from "./javascripts/messageSubmission";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    messageSubmission();
  }, []);
  return (
    <div className="page">
      <div className="pageContent">
        <main id="contactMain">
          <div className="contactAnimation"></div>
          <div className="contactForm">
            <form action="">
              <label htmlFor="firstName">First name:</label>
              <input type="text" id="firstName" />
              <label htmlFor="lastName">Last name:</label>
              <input type="text" id="lastName" />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" />
              <label htmlFor="message" id="messageLabel">
                Your Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <div className="contactOptions">
            <ul className="contactLinks">
              <li>
                <a href="">
                  <img src={youtube} alt="Youtube icon" />
                </a>
                <p>@yogaonpurpose</p>
              </li>
              <li>
                <a href="">
                  <img src={facebook} alt="Facebook icon" />
                </a>
                <p>@yogaonpurpose</p>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="Instagram icon" />
                  <p>@yogaonpurpose</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={phone} alt="Phone icon" />
                  <p>+1-812-664-8369</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={email} alt="Email icon" />
                  <p>yogaonpurpose@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Contact;
