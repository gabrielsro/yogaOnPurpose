import "./Home.css";
import rain from "./javascripts/rain.js";
import carousel from "./javascripts/carousel.js";
import { useEffect } from "react";
import LogoSlogan from "./components/LogoSlogan/LogoSlogan.jsx";
import MainCarousel from "./components/MainCarousel/MainCarousel.jsx";
import Services from "./components/Services";
import Externals from "../../components/Externals/Externals.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  useEffect(() => {
    rain();
    carousel();
  }, []);
  return (
    <div className="page" id="home">
      <LogoSlogan />
      <MainCarousel />
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
      <Externals />
      <Footer />
    </div>
  );
};
export default Home;
