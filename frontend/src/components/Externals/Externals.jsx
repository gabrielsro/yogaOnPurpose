import "./Externals.css";
import youtube from "./icons/youtube.svg";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";

const Externals = () => {
  return (
    <section className="homeExternals">
      <ul>
        <li className="homeExternal">
          <a href="https://www.youtube.com/@YogaOnPurpose">
            <img src={youtube} alt="Youtube icon" />
          </a>
        </li>
        <li className="homeExternal">
          <a href="https://www.facebook.com/people/Yoga-On-Purpose/100026223651824">
            <img src={facebook} alt="Facebook icon" />
          </a>
        </li>
        <li className="homeExternal">
          <a href="https://www.instagram.com/yogaonpurpose/">
            <img src={instagram} alt="Instagram icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Externals;
