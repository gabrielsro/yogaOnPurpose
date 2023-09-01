import "./Contact.css";
import youtube from "./icons/youtube.svg";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import phone from "./icons/phone.svg";
import email from "./icons/email.svg";

const Contact = () => {
  return (
    <div className="page">
      <div className="pageContent">
        <main id="contactMain">
          <div className="contactAnimation">
            <h2>Animation Here</h2>
          </div>
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
              </li>
              <li>
                <a href="">
                  <img src={facebook} alt="Youtube icon" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="Youtube icon" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={phone} alt="Youtube icon" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={email} alt="Youtube icon" />
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
