import "./Home.css";
import rain from "./javascripts/rain.js";
import carousel from "./javascripts/carousel.js";
import img1 from "./images/yoga11.jpg";
import img2 from "./images/yoga10.jpg";
import img4 from "./images/yoga4.jpg";
import img5 from "./images/yoga5.jpg";
import img6 from "./images/yoga6.jpg";
import img9 from "./images/yoga9.jpg";
import youtube from "./icons/youtube.svg";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import email from "./icons/email.svg";
import phone from "./icons/phone.svg";
import { useEffect } from "react";
import Services from "./components/Services";

const Home = () => {
  useEffect(() => {
    rain();
    carousel();
  }, []);
  return (
    <div className="page" id="home">
      <div className="logoSection">
        <div className="logoContainer">
          <img
            src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700402117/mainLogo_sd22kf.png"
            alt="Yoga on Purpose logo"
            id="logo"
          />
        </div>
        <div className="slogan">
          <h1>Purpose fuels passion</h1>
        </div>
      </div>
      <div className="valueProposition">
        <div id="valuePropositionText">
          <h2>Making Yoga and Mindfulness accessible to everyone!</h2>
          <h2>In-person, online and outdoors</h2>
          <h2>RYI 275 hr</h2>
        </div>
        <div id="valuePropositionCarousel">
          <ul>
            <li className="slide activeSlide">
              <img src={img6} alt="Yoga #6" />
            </li>
            <li className="slide">
              <img src={img9} alt="Yoga #9" />
            </li>
            <li className="slide">
              <img src={img4} alt="Yoga #4" />
            </li>
            <li className="slide">
              <img src={img1} alt="Yoga #1" />
            </li>
            <li className="slide">
              <img src={img2} alt="Yoga #2" />
            </li>
            <li className="slide">
              <img src={img5} alt="Yoga #5" />
            </li>
          </ul>
        </div>
      </div>
      <div className="servicesNavigation">
        <Services.ServicesNavigation parent={"home"} />
      </div>
      <div className="services">
        <Services.PrivateLessons />
        <Services.Meditation />
        <Services.Retreats />
        <Services.SoundBaths />
        <Services.Workshops />
      </div>
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
export default Home;
