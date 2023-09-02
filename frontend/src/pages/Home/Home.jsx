import "./Home.css";
import Logo from "./images/YOPLogo.png";
import rain from "./javascripts/rain.js";
import carousel from "./javascripts/carousel.js";
import img1 from "./images/yoga11.jpg";
import img2 from "./images/yoga10.jpg";
import img4 from "./images/yoga4.jpg";
import img5 from "./images/yoga5.jpg";
import img6 from "./images/yoga6.jpg";
import img9 from "./images/yoga9.jpg";
import retreat from "./images/retreat1.jpg";
import soundBath from "./images/soundBath1.jpg";
import meditation from "./images/meditation1.jpg";
import privateLesson from "./images/privateLesson.jpg";
import yogaWorkshop from "./images/yogaWorkshops.jpg";
import youtube from "./icons/youtube.svg";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import email from "./icons/email.svg";
import phone from "./icons/phone.svg";
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
          <h1>Purpose fuels passion</h1>
        </div>
      </div>
      <div className="valueProposition">
        <div id="valuePropositionText">
          <h2>Making Yoga accessible to everyone!</h2>
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
      <section className="homeServices">
        <div className="homeService">
          <div className="homeServiceText">
            <h2>Yoga Retreats</h2>
            <p>
              Et temporibus reiciendis et sapiente distinctio in voluptates
              internos ex voluptas doloribus quo deserunt aliquam quo nesciunt
              inventore eos molestiae sint? Qui error expedita vel corporis
              laborum qui fugiat magnam in tempore aspernatur sed pariatur nihil
              hic voluptate ullam. Ut minima facere sed assumenda exercitationem
              in eligendi minima et neque ipsa. Qui nobis tempora vel doloribus
              quis qui earum velit id eius quidem ea omnis asperiores et
              perferendis distinctio et illum dolore!
            </p>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in our Yoga Retreat?</h2>
            <p>Reach out to us!</p>
            <form action="">
              <label htmlFor="yogaRetreatEmail">Email:</label>
              <input type="text" id="yogaRetreatEmail" />
              <label htmlFor="yogaRetreatMessage" className="messageLabel">
                Message:
              </label>
              <textarea
                name="yogaRetreatMessage"
                id="yogaRetreatMessage"
                cols="35"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <img src={retreat} alt="Yoga retreat" />
        </div>
        <div className="homeService">
          <div className="homeServiceText">
            <h2>Private Lessons</h2>
            <p>
              Et temporibus reiciendis et sapiente distinctio in voluptates
              internos ex voluptas doloribus quo deserunt aliquam quo nesciunt
              inventore eos molestiae sint? Qui error expedita vel corporis
              laborum qui fugiat magnam in tempore aspernatur sed pariatur nihil
              hic voluptate ullam. Ut minima facere sed assumenda exercitationem
              in eligendi minima et neque ipsa. Qui nobis tempora vel doloribus
              quis qui earum velit id eius quidem ea omnis asperiores et
              perferendis distinctio et illum dolore!
            </p>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in Private Lessons?</h2>
            <p>Reach out to us!</p>
            <form action="">
              <label htmlFor="yogaRetreatEmail">Email:</label>
              <input type="text" id="yogaRetreatEmail" />
              <label htmlFor="yogaRetreatMessage" className="messageLabel">
                Message:
              </label>
              <textarea
                name="yogaRetreatMessage"
                id="yogaRetreatMessage"
                cols="35"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <img src={privateLesson} alt="Private lesson" />
        </div>
        <div className="homeService">
          <div className="homeServiceText">
            <h2>Sound Baths</h2>
            <p>
              Immerse yourself in a deeply rejuvenating and transformative
              experience with our Sound Bath Services. Our sessions are designed
              to provide a serene and harmonious space for you to unwind, relax,
              and reconnect with your inner self.
            </p>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in Sound Baths?</h2>
            <p>Reach out to us!</p>
            <form action="">
              <label htmlFor="yogaRetreatEmail">Email:</label>
              <input type="text" id="yogaRetreatEmail" />
              <label htmlFor="yogaRetreatMessage" className="messageLabel">
                Message:
              </label>
              <textarea
                name="yogaRetreatMessage"
                id="yogaRetreatMessage"
                cols="35"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <img src={soundBath} alt="Sound Bath" />
        </div>
        <div className="homeService">
          <div className="homeServiceText">
            <h2>Meditation</h2>
            <p>
              Et temporibus reiciendis et sapiente distinctio in voluptates
              internos ex voluptas doloribus quo deserunt aliquam quo nesciunt
              inventore eos molestiae sint? Qui error expedita vel corporis
              laborum qui fugiat magnam in tempore aspernatur sed pariatur nihil
              hic voluptate ullam. Ut minima facere sed assumenda exercitationem
              in eligendi minima et neque ipsa. Qui nobis tempora vel doloribus
              quis qui earum velit id eius quidem ea omnis asperiores et
              perferendis distinctio et illum dolore!
            </p>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in Meditation?</h2>
            <p>Reach out to us!</p>
            <form action="">
              <label htmlFor="yogaRetreatEmail">Email:</label>
              <input type="text" id="yogaRetreatEmail" />
              <label htmlFor="yogaRetreatMessage" className="messageLabel">
                Message:
              </label>
              <textarea
                name="yogaRetreatMessage"
                id="yogaRetreatMessage"
                cols="35"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <img src={meditation} alt="Meditation" />
        </div>
        <div className="homeService">
          <div className="homeServiceText">
            <h2>Yoga Workshops</h2>
            <p>
              Et temporibus reiciendis et sapiente distinctio in voluptates
              internos ex voluptas doloribus quo deserunt aliquam quo nesciunt
              inventore eos molestiae sint? Qui error expedita vel corporis
              laborum qui fugiat magnam in tempore aspernatur sed pariatur nihil
              hic voluptate ullam. Ut minima facere sed assumenda exercitationem
              in eligendi minima et neque ipsa. Qui nobis tempora vel doloribus
              quis qui earum velit id eius quidem ea omnis asperiores et
              perferendis distinctio et illum dolore!
            </p>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in our Yoga Workshops?</h2>
            <p>Reach out to us!</p>
            <form action="">
              <label htmlFor="yogaRetreatEmail">Email:</label>
              <input type="text" id="yogaRetreatEmail" />
              <label htmlFor="yogaRetreatMessage" className="messageLabel">
                Message:
              </label>
              <textarea
                name="yogaRetreatMessage"
                id="yogaRetreatMessage"
                cols="35"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <img src={yogaWorkshop} alt="Meditation" />
        </div>
      </section>
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
