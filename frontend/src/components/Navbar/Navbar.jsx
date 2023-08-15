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
import { detectResizing, menuClick, linkClick } from "./javascripts";

const Navbar = (props) => {
  detectResizing();
  const { page, setPage } = props;
  return (
    <nav>
      <button id="menu" onClick={() => menuClick()}>
        <img src={menu} alt="Menu icon" />
      </button>
      <div className="links">
        <Link to="/" onClick={() => linkClick("home", setPage)}>
          <img src={home} alt="Home icon" />
          <p className={page == "home" ? "selected" : "unselected"}>Home</p>
        </Link>
        <Link to="/events" onClick={() => linkClick("events", setPage)}>
          <img src={events} alt="Events icon" />
          <p className={page == "events" ? "selected" : "unselected"}>Events</p>
        </Link>
        <Link to="/schedule" onClick={() => linkClick("schedule", setPage)}>
          <img src={schedule} alt="Schedule icon" />
          <p className={page == "schedule" ? "selected" : "unselected"}>
            Schedule
          </p>
        </Link>
        <Link to="/contact" onClick={() => linkClick("contact", setPage)}>
          <img src={contact} alt="Home icon" />
          <p className={page == "contact" ? "selected" : "unselected"}>
            Contact
          </p>
        </Link>
        <Link to="/blog" onClick={() => linkClick("blog", setPage)}>
          <img src={blog} alt="Blog icon" />
          <p className={page == "blog" ? "selected" : "unselected"}>Blog</p>
        </Link>
        <Link to="/store" onClick={() => linkClick("store", setPage)}>
          <img src={store} alt="Store icon" />
          <p className={page == "store" ? "selected" : "unselected"}>Store</p>
        </Link>
        <Link to="/about" onClick={() => linkClick("about", setPage)}>
          <img src={about} alt="About icon" />
          <p className={page == "about" ? "selected" : "unselected"}>About</p>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
