import "./Contact.css";
import youtubeIcon from "./icons/youtube.svg";
import instagramIcon from "./icons/instagram.svg";
import facebookIcon from "./icons/facebook.svg";
import phoneIcon from "./icons/phone.svg";
import emailIcon from "./icons/email.svg";

const Contact = () => {
  return (
    <div className="page">
      <div className="pageTitle">
        <h1>Contact</h1>
      </div>
      <div className="pageContent">
        <main id="contactMain">
          <div className="socialMedia">
            <div className="socialMediaCard">
              <img src={youtubeIcon} alt="Youtube icon" />
              <p>@yogaonpurpose</p>
            </div>
            <div className="socialMediaCard">
              <img src={instagramIcon} alt="Instagram icon" />
              <p>@yogaonpurpose</p>
            </div>
            <div className="socialMediaCard">
              <img src={facebookIcon} alt="Facebook icon" />
              <p>@yogaonpurpose</p>
            </div>
            <div className="socialMediaCard">
              <img src={phoneIcon} alt="Phone icon" />
              <p>+314-325-2674</p>
            </div>
            <div className="socialMediaCard">
              <img src={emailIcon} alt="Email icon" />
              <p>yougaonpurpose@gmail.com</p>
            </div>
          </div>
          <div className="text">
            <form action="" className="contactForm">
              <div>
                <label htmlFor="contactEmail">Email: </label>
                <input type="text" id="contactEmail" />
              </div>
              <div>
                <label htmlFor="contactMessage">Message: </label>
                <textarea
                  name="userMessage"
                  id="contactMessage"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Contact;
