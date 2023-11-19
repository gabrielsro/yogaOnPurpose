import "./Contact.css";
import messageSubmission from "./javascripts/messageSubmission";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import SuccessPage from "../SuccessPage";
import Externals from "../../components/Externals";
import Footer from "../../components/Footer";

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
              <Externals />
            </div>
            <div className="footerContainer">
              <Footer />
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
