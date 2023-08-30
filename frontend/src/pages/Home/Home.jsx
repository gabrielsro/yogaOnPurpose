import "./Home.css";
import Logo from "./YOPLogo.png";
import rain from "./rain";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    rain();
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
    </div>
  );
};
export default Home;
