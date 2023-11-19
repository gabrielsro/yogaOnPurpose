import "./Footer.css";
import email from "./icons/email.svg";
import phone from "./icons/phone.svg";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div className="footerContact">
          <div>
            <img src={email} alt="Email icon" />
            <p>yogaonpurpose@gmail.com</p>
          </div>
          <div>
            <img src={phone} alt="Phone icon" />
            <p>+1-314-325-2674</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
