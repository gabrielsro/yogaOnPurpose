import "./Contact.css";
import youtube from "./icons/youtube.svg";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import phone from "./icons/phone.svg";
import email from "./icons/email.svg";
import messageSubmission from "./javascripts/messageSubmission";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import SuccessPage from "../SuccessPage";

const Contact = () => {
  const [contactState, setContactState] = useState({ status: "loaded" });
  useEffect(() => {
    messageSubmission(setContactState);
  }, []);
  return (
    <div className="page">
      {contactState.status == "loaded" && (
        <div className="pageContent">
          <main id="contactMain">
            <div className="contactAnimation"></div>
            <div className="contactForm">
              <div className="formTitle">
                <h2>{`Let's chat!`}</h2>
              </div>
              <form action="">
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName" />
                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName" />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
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
                  <a href="https://www.youtube.com/@YogaOnPurpose">
                    <img src={youtube} alt="Youtube icon" />
                  </a>
                  <p>@yogaonpurpose</p>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Yoga-On-Purpose/100026223651824">
                    <img src={facebook} alt="Facebook icon" />
                  </a>
                  <p>@yogaonpurpose</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/yogaonpurpose/">
                    <img src={instagram} alt="Instagram icon" />
                    <p>@yogaonpurpose</p>
                  </a>
                </li>
                <li>
                  <img src={phone} alt="Phone icon" />
                  <p>+1-812-664-8369</p>
                </li>
                <li>
                  <img src={email} alt="Email icon" />
                  <p>yogaonpurpose@gmail.com</p>
                </li>
              </ul>
            </div>
          </main>
        </div>
      )}
      {contactState.status == "loading" && <LoadingPage />}
      {contactState.status == "error" && (
        <ErrorPage
          message={`Couldn't send your message. Please try again later`}
        />
      )}
      {contactState.status == "success" && (
        <SuccessPage message={"Message successfully sent!"} />
      )}
    </div>
  );
};
export default Contact;
