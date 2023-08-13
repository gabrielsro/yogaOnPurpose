import "./Navbar.css";
import { Link } from "react-router-dom";
import home from "./icons/home.svg";
import schedule from "./icons/schedule.svg";
import store from "./icons/store.svg";
import blog from "./icons/blog.svg";
import events from "./icons/events.svg";
import about from "./icons/about.svg";
import contact from "./icons/contact.svg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={home} alt="Home icon" />
        <p>Home</p>
      </Link>
      <Link to="/events">
        <img src={events} alt="Events icon" />
        <p>Events</p>
      </Link>
      <Link to="/schedule">
        <img src={schedule} alt="Schedule icon" />
        <p>Schedule</p>
      </Link>
      <Link to="/contact">
        <img src={contact} alt="Home icon" />
        <p>Contact</p>
      </Link>
      <Link to="/blog">
        <img src={blog} alt="Blog icon" />
        <p>Blog</p>
      </Link>
      <Link to="/store">
        <img src={store} alt="Store icon" />
        <p>Store</p>
      </Link>
      <Link to="/about">
        <img src={about} alt="About icon" />
        <p>About</p>
      </Link>
    </nav>
  );
};
export default Navbar;
