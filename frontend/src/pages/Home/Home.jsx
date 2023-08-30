import "./Home.css";
import Logo from "./YOPLogo.png";
import rain from "./rain";
import carousel from "./carousel";
import img1 from "./images/yoga11.jpg";
import img2 from "./images/yoga10.jpg";
import img4 from "./images/yoga4.jpg";
import img5 from "./images/yoga5.jpg";
import img6 from "./images/yoga6.jpg";
import img9 from "./images/yoga9.jpg";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    rain();
    carousel();
  }, []);
  return (
    <div className="page" id="home">
      <div className="logoSection">
        <div className="logoContainer">
          <img src={Logo} alt="Yoga on Purpose logo" id="logo" />
        </div>
        <div className="logoGradient"></div>
        <div className="slogan">
          <h1>Slogan goes here</h1>
        </div>
      </div>
      <div className="valueProposition">
        <div id="valuePropositionText">
          <h2>Value Proposition Goes Here</h2>
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
    </div>
  );
};
export default Home;
