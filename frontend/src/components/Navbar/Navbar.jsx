import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/events">
        <p>Events</p>
      </Link>
      <Link to="/schedule">
        <p>Schedule</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
      <Link to="/blog">
        <p>Blog</p>
      </Link>
      <Link to="/store">
        <p>Store</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  );
};
export default Navbar;
