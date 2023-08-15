import "./Navbar.css";
import { Link } from "react-router-dom";
import home from "./icons/home.svg";
import schedule from "./icons/schedule.svg";
import store from "./icons/store.svg";
import blog from "./icons/blog.svg";
import events from "./icons/events.svg";
import about from "./icons/about.svg";
import contact from "./icons/contact.svg";
import menu from "./icons/menu.svg";
import MenuIconRotation from "./javascripts/MenuIconRotation";
import toggleMobileMenu from "./javascripts/toggleMobileMenu";
import checkLinkClick from "./javascripts/checkLinkClick";
import detectResizing from "./javascripts/detectResizing";

const Navbar = () => {
  detectResizing();
  return (
    <nav>
      <button
        id="menu"
        onClick={() => {
          MenuIconRotation();
          toggleMobileMenu();
        }}
      >
        <img src={menu} alt="Menu icon" />
      </button>
      <div className="links">
        <Link to="/" onClick={() => checkLinkClick()}>
          <img src={home} alt="Home icon" />
          <p>Home</p>
        </Link>
        <Link to="/events" onClick={() => checkLinkClick()}>
          <img src={events} alt="Events icon" />
          <p>Events</p>
        </Link>
        <Link to="/schedule" onClick={() => checkLinkClick()}>
          <img src={schedule} alt="Schedule icon" />
          <p>Schedule</p>
        </Link>
        <Link to="/contact" onClick={() => checkLinkClick()}>
          <img src={contact} alt="Home icon" />
          <p>Contact</p>
        </Link>
        <Link to="/blog" onClick={() => checkLinkClick()}>
          <img src={blog} alt="Blog icon" />
          <p>Blog</p>
        </Link>
        <Link to="/store" onClick={() => checkLinkClick()}>
          <img src={store} alt="Store icon" />
          <p>Store</p>
        </Link>
        <Link to="/about" onClick={() => checkLinkClick()}>
          <img src={about} alt="About icon" />
          <p>About</p>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
