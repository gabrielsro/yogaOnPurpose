import "./About.css";
import jamieProfile from "./images/jamieProfile.jpg";
import namaste from "./icons/namaste.svg";

const About = () => {
  return (
    <div className="page" id="about">
      <section className="mainAbout">
        <div className="mainPicture">
          <img src={jamieProfile} alt="Jamie Dewig" />
        </div>
        <div className="mainDescription">
          <p>
            {`Yoga is not just a physical exercise; it's a path to a more vibrant,
            focused, and purposeful life. I am a 275-Hour Registered Yoga
            Teacher (RYT) certified by Yoga Alliance, dedicated to sharing the
            profound benefits of yoga with others. With a regular practice, I've
            witnessed how yoga has transformed my body and mind, bringing
            strength, flexibility, and clarity to my life.`}
          </p>
          <p>
            {`Now, I'm on a mission to extend the transformative power of yoga to a broader community. Through online classes and local events in Fishers, Carmel, and Zionsville, I invite yogis of all levels to embark on a journey of self-discovery and purpose. My classes go beyond the physical postures, delving into the rich tapestry of yoga's mental, emotional, and spiritual dimensions.`}
          </p>
          <p>
            {`I believe that finding purpose can change the way you experience life, just as it has for me. Let's explore the ancient practice of yoga together, rekindling your love for it and uncovering your true passion for a more fulfilling life.`}
          </p>
          <p>
            {`Join me on this transformative journey, and together, we'll unlock the boundless potential that yoga offers. Your path to a purposeful and passionate life starts here. Namaste.`}
          </p>
          <img src={namaste} alt="Namaste icon" />
        </div>
      </section>
    </div>
  );
};
export default About;
