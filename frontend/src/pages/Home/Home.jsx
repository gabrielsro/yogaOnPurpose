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
      <section className="homeServices">
        <div className="homeService" id="yogaRetreats">
          <div className="homeServiceText">
            <h2>Yoga Retreats</h2>
            <p>
              {`When you embark on a yoga retreat, you can look forward to a
            holistic and rejuvenating experience that goes beyond traditional
            yoga classes. Here's what you can generally expect from a yoga
            retreat:`}
            </p>
            <ol>
              <li>
                <p>Immersive Yoga Practice:</p>
                <ul>
                  <li>
                    Daily yoga sessions tailored to various skill levels, from
                    beginners to advanced practitioners.
                  </li>
                  <li>
                    {`Exploration of different yoga styles such as Hatha, Vinyasa, Ashtanga, Yin, or Kundalini, depending on the retreat's focus.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Experienced Instructors:</p>
                <ul>
                  <li>{`Knowledgeable and experienced yoga instructors who guide you through your practice with care and expertise.`}</li>
                  <li>
                    {`Personalized attention and adjustments to help you refine your poses and deepen your practice.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Beautiful Natural Settings:</p>
                <ul>
                  <li>
                    {`Retreats often take place in picturesque locations like serene beaches, lush forests, tranquil mountains, or charming countryside settings.`}
                  </li>
                  <li>
                    {`The opportunity to connect with nature through outdoor yoga sessions and meditative walks.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Mindfulness and Meditation:</p>
                <ul>
                  <li>
                    {`Integration of mindfulness and meditation practices to enhance your mental and emotional well-being.`}
                  </li>
                  <li>
                    {`Guided meditation sessions that promote relaxation, self-awareness, and inner peace.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Holistic Wellness:</p>
                <ul>
                  <li>{`Nutritious, often vegetarian or vegan meals that nourish your body and support your yoga practice.`}</li>
                  <li>
                    {`Workshops or classes on holistic practices such as Ayurveda, nutrition, and bodywork.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Personal Growth and Healing:</p>
                <ul>
                  <li>
                    {`A focus on self-discovery, self-care, and personal growth.`}
                  </li>
                  <li>
                    {`Opportunities to address physical, emotional, or mental challenges through yoga, meditation, and therapeutic activities.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Free Time and Exploration:</p>
                <ul>
                  <li>
                    {`Time for personal reflection, leisure activities, or exploring the local culture and attractions.`}
                  </li>
                  <li>
                    {`Optional excursions and adventures in the surrounding area.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Connection and Community:</p>
                <ul>
                  <li>
                    {`A welcoming and inclusive community of like-minded individuals who share your passion for yoga and wellness.`}
                  </li>
                  <li>
                    {`Opportunities to form meaningful connections with fellow retreat participants.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Relaxation and Rejuvenation:</p>
                <ul>
                  <li>
                    {`Plenty of downtime for rest and relaxation, whether it's by the pool, in a spa, or simply in a quiet corner of the retreat center.`}
                  </li>
                  <li>
                    {`Spa treatments, sauna, or other relaxation amenities (depending on the retreat).`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Transformation and Renewal:</p>
                <ul>
                  <li>
                    {`A chance to disconnect from the stresses of daily life, recharge your energy, and gain a fresh perspective.`}
                  </li>
                  <li>
                    {`The potential for profound personal transformation, leaving you feeling rejuvenated and inspired.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Yoga Philosophy and Lifestyle:</p>
                <ul>
                  <li>{`Workshops or discussions on yoga philosophy, ethics, and how to integrate yoga principles into your everyday life.`}</li>
                  <li>
                    {`The opportunity to develop a deeper understanding of the holistic aspects of yoga.`}
                  </li>
                </ul>
              </li>
              <li>
                <p>Supportive Environment:</p>
                <ul>
                  <li>{`A supportive and non-judgmental environment that encourages you to explore your practice at your own pace and comfort level.`}</li>
                  <li>
                    {`Guidance and support for any physical or emotional challenges you may encounter during the retreat.`}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="homeServiceContact">
            <h2>Interested in our Yoga Retreat?</h2>
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
        </div>
        <div className="homeService" id="privateLessons">
          <div className="homeServiceText">
            <h2>Private Lessons</h2>
            <p>
              At Yoga On Purpose Private Yoga, we believe that yoga is a
              personal journey, and your practice should reflect your individual
              needs and goals. Our one-on-one private yoga classes are designed
              to provide you with a customized yoga experience that meets you
              where you are and guides you toward your desired outcomes.
            </p>
            <h3>What to Expect</h3>
            <ol>
              <li>
                <p>Personalized Attention:</p>
                <p>
                  When you choose a private yoga class with us, you are
                  embarking on a journey that is entirely your own. Our
                  experienced and dedicated yoga instructor will work closely
                  with you to understand your specific goals, challenges, and
                  preferences.
                </p>
              </li>
              <li>
                <p>Customized Practice:</p>
                <p>
                  {`Each session is meticulously tailored to your unique needs.
                  Whether you're a beginner looking to establish a strong
                  foundation, an athlete seeking to enhance flexibility, or
                  someone in need of therapeutic support for specific concerns,
                  we adapt our practice to you.`}
                </p>
              </li>
              <li>
                <p>Alignment and Technique:</p>
                <p>
                  We prioritize proper alignment and technique to ensure your
                  safety and maximize the benefits of each pose. Our instructor
                  will provide hands-on guidance and adjustments to help you
                  find your best alignment.
                </p>
              </li>
              <li>
                <p>Progressive Growth:</p>
                <p>
                  {`As you progress in your practice, our instructor will adapt
                  and evolve the sessions to keep you challenged and inspired.
                  We're here to support your growth and evolution as a yogi.`}
                </p>
              </li>
              <li>
                <p>Mindful Breathwork:</p>
                <p>
                  {`Breath is at the heart of yoga practice. You'll learn the art
                  of mindful breathwork, which enhances your awareness, reduces
                  stress, and deepens your connection to each movement.`}
                </p>
              </li>
              <li>
                <p>Balanced Practice:</p>
                <p>
                  {`Whether your focus is on strength, flexibility, balance, or relaxation, we create a balanced practice that aligns with your objectives. We also integrate meditation and mindfulness techniques to nurture your mental well-being.`}
                </p>
              </li>
              <li>
                <p>Stress Relief:</p>
                <p>
                  {`Our private sessions offer a sanctuary of tranquility, allowing you to unwind and de-stress. You'll leave each class feeling rejuvenated and equipped with tools to manage the demands of daily life.`}
                </p>
              </li>
              <li>
                <p>Convenience and Flexibility:</p>
                <p>
                  You choose the time, location, and frequency of your private
                  sessions. This flexibility ensures that yoga can seamlessly
                  fit into your lifestyle.
                </p>
              </li>
              <li>
                <p>Empowerment and Self-Discovery:</p>
                <p>
                  {`Our aim is to empower you on your yoga journey, fostering
                  self-discovery and self-acceptance. You'll gain a deeper
                  understanding of your body and mind, fostering holistic
                  well-being.`}
                </p>
              </li>
              <li>
                <p>A Holistic Approach:</p>
                <p>
                  Beyond the physical postures, our private yoga classes
                  encompass the holistic essence of yoga, including its
                  philosophy and lifestyle principles. We aim to help you find
                  balance on and off the mat.
                </p>
              </li>
            </ol>
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
        </div>
        <div className="homeService" id="soundBaths">
          <div className="homeServiceText">
            <h2>Sound Baths</h2>
            <p>
              Immerse yourself in a deeply rejuvenating and transformative
              experience with our Sound Bath Services. Our sessions are designed
              to provide a serene and harmonious space for you to unwind, relax,
              and reconnect with your inner self.
            </p>
            <h3>What to Expect:</h3>
            <p>
              {`During a sound bath, you'll be comfortably lying down or seated
              while our skilled sound therapist uses a variety of soothing and
              resonant instruments, such as crystal singing bowls, Tibetan
              singing bowls, chimes, gongs, and more. These instruments are
              meticulously selected for their healing frequencies and unique
              properties, creating a symphony of sound that washes over you.`}
            </p>
            <h3>Benefits of Our Sound Bath Services:</h3>
            <ol>
              <li>
                <p>Stress Reduction:</p>
                <p>
                  The gentle vibrations and harmonious sounds generated during a
                  sound bath induce a profound sense of relaxation, helping to
                  reduce stress and anxiety. As you listen to the soothing
                  tones, your mind naturally quiets, allowing you to let go of
                  worries and tension.
                </p>
              </li>
              <li>
                <p>Balanced Energy:</p>
                <p>
                  Sound baths can help balance your energy centers, also known
                  as chakras, promoting a sense of equilibrium within your body
                  and mind. This can leave you feeling more grounded and
                  centered.
                </p>
              </li>
              <li>
                <p>Enhanced Meditation:</p>
                <p>
                  Sound baths are an excellent complement to meditation
                  practices. The sound waves guide your mind into a meditative
                  state, making it easier to achieve deep mindfulness and inner
                  clarity.
                </p>
              </li>
              <li>
                <p>Improved Sleep:</p>
                <p>
                  Regular sound bath sessions can improve the quality of your
                  sleep. The calming vibrations help release physical and mental
                  tension, making it easier to fall asleep and stay asleep
                  throughout the night.
                </p>
              </li>
              <li>
                <p>Emotional Healing:</p>
                <p>
                  Sound baths can facilitate emotional release and healing. They
                  provide a safe space for you to process and let go of pent-up
                  emotions, helping you move towards emotional well-being.
                </p>
              </li>
              <li>
                <p>Enhanced Creativity:</p>
                <p>
                  Many participants find that sound baths unlock their creative
                  potential. After a session, you may experience heightened
                  creativity and inspiration.
                </p>
              </li>
              <li>
                <p>Pain Relief:</p>
                <p>
                  {`The vibrations from sound instruments can ease physical discomfort and pain. It's not uncommon for participants to report relief from headaches, muscle tension, and chronic pain after a sound bath.`}
                </p>
              </li>
              <li>
                <p>Increased Self-Awareness</p>
                <p>
                  Sound baths promote self-reflection and self-awareness. They
                  allow you to explore your inner world, gain insights, and
                  develop a deeper connection with yourself.
                </p>
              </li>
              <li>
                <p>Community and Connection:</p>
                <p>
                  Our sound bath sessions often create a sense of community and
                  connection among participants. Sharing this unique experience
                  with others can foster a sense of belonging and support.
                </p>
              </li>
              <li>
                <p>Holistic Healing:</p>
                <p>
                  Sound baths are a holistic approach to well-being, addressing
                  physical, mental, and emotional aspects of health. They can be
                  a valuable addition to your self-care routine.
                </p>
              </li>
            </ol>
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
        </div>
        <div className="homeService" id="meditation">
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
          <h3>What to Expect</h3>
          <p>
            {`When you participate in our guided meditation sessions focused on
            presence, gratitude, and inner peace, you can expect a deeply
            enriching and transformative experience. Here's what you can
            anticipate from our meditation sessions:`}
          </p>
          <ol>
            <li>
              <p>Mindful Guidance:</p>
              <p>
                {`Our experienced meditation instructors will gently guide you through each session, creating a safe and nurturing space for your practice. They will provide clear and soothing instructions to help you navigate your inner landscape.`}
              </p>
            </li>
            <li>
              <p>Relaxation and Stress Reduction:</p>
              <p>
                {`As you settle into the meditation, you'll immediately begin to feel a sense of relaxation. The guided meditation will lead you to release tension, both physically and mentally, allowing stress and anxiety to melt away.`}
              </p>
            </li>
            <li>
              <p>Deepening Presence:</p>
              <p>
                {`The meditations are designed to bring your attention to the present moment. Through focused breathing and mindfulness techniques, you will learn to let go of distractions and fully immerse yourself in the here and now.`}
              </p>
            </li>
            <li>
              <p>Gratitude Cultivation:</p>
              <p>
                {`During gratitude-focused meditations, you will be encouraged to reflect on the positive aspects of your life. You'll explore feelings of thankfulness for the small and significant blessings that surround you, fostering a sense of contentment and abundance.`}
              </p>
            </li>
            <li>
              <p>Inner Peace Exploration:</p>
              <p>
                {`Inner peace meditations will take you on a journey to discover the serene reservoir of calm within yourself. These sessions will teach you techniques to quiet the mind, release inner turmoil, and connect with your inner source of tranquility.`}
              </p>
            </li>
            <li>
              <p>Enhanced Self-Awareness:</p>
              <p>
                {`Through regular meditation practice, you will gain a deeper understanding of your thoughts, emotions, and inner workings. This increased self-awareness can lead to personal growth, emotional resilience, and improved relationships.`}
              </p>
            </li>
            <li>
              <p>Community Connection:</p>
              <p>
                {`Our meditation sessions provide a sense of belonging and community. You'll have the opportunity to connect with like-minded individuals who share a passion for mindfulness, gratitude, and inner peace. Sharing experiences and insights with the group can be enriching and inspiring.`}
              </p>
            </li>
            <li>
              <p>Practical Takeaways:</p>
              <p>{`Each meditation session is designed to offer practical tools and techniques that you can incorporate into your daily life. These mindfulness practices will help you maintain a sense of presence, gratitude, and inner peace beyond the session.`}</p>
            </li>
            <li>
              <p>Positive Impact:</p>
              <p>
                {`Over time, consistent participation in our meditation sessions can lead to positive changes in your overall well-being. Many participants report reduced stress, increased happiness, improved focus, and a greater sense of inner harmony.`}
              </p>
            </li>
            <li>
              <p>A Lifelong Journey:</p>
              <p>
                {`Meditation is not a one-time event; it's a lifelong journey of
                self-discovery and growth. Our sessions are here to support you
                on this journey, providing a place to return to whenever you
                seek moments of peace and clarity.`}
              </p>
            </li>
          </ol>
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
        </div>
        <div className="homeService" id="yogaWorkshops">
          <div className="homeServiceText">
            <h2>Yoga and Mindfulness Workshops</h2>
            <p>
              {`At Yoga On Purpose's Yoga and Mindfulness Workshops, we
              invite you to embark on a transformative journey of self-discovery
              and well-being. Our workshops offer a diverse range of themes and
              skillsets designed to cater to all levels of yoga and meditation
              practitioners.`}
            </p>
            <h3>Workshop Offerings</h3>
            <ol>
              <li>
                <p>Flexibility:</p>
                <p>
                  {`Our flexibility workshops focus on enhancing your range of motion, stretching safely, and improving overall flexibility. Whether you're a beginner or an experienced yogi, these workshops provide valuable insights and techniques for a more supple body.`}
                </p>
              </li>
              <li>
                <p>Meditation and Mindfulness:</p>
                <p>
                  {`Dive into the world of inner peace and mental clarity with our meditation and mindfulness workshops. Learn practical techniques to calm your mind, reduce stress, and cultivate mindfulness in your everyday life.`}
                </p>
              </li>
              <li>
                <p>Arm Balance:</p>
                <p>
                  {`Ready to take your practice to new heights? Our arm balance workshops offer step-by-step guidance and drills to help you master inversions, arm balances, and transitions. Develop strength, balance, and confidence in your practice.`}
                </p>
              </li>
              <li>
                <p>Skillset:</p>
                <p>
                  {`Explore a variety of skillset workshops that cover a wide range of yoga and meditation practices. From deepening your pranayama (breath control) to refining your yoga postures and exploring advanced meditation techniques, our workshops cater to diverse interests and levels of experience.`}
                </p>
              </li>
            </ol>
            <h3>What to Expect</h3>
            <ol>
              <li>
                <p>Expert Guidance:</p>
                <p>
                  {`Our workshops are led by experienced and knowledgeable instructors who are passionate about sharing their expertise. You'll receive expert guidance and personalized attention to help you progress in your practice.`}
                </p>
              </li>
              <li>
                <p>Safe and Inclusive Environment:</p>
                <p>
                  {`We create a safe and inclusive space where all participants, regardless of their background or experience, feel welcome and supported. Yoga and mindfulness are for everyone.
`}
                </p>
              </li>
              <li>
                <p>Interactive Learning:</p>
                <p>
                  {`Our workshops are interactive and engaging. You'll have the opportunity to ask questions, practice alongside your peers, and receive constructive feedback.`}
                </p>
              </li>
              <li>
                <p>Practical Takeaways:</p>
                <p>
                  {`Each workshop provides practical takeaways that you can integrate into your daily life and yoga practice. Whether it's a new sequence, a breathing exercise, or a mindfulness technique, you'll leave with valuable tools.`}
                </p>
              </li>
              <li>
                <p>Community and Connection:</p>
                <p>
                  {`Our workshops often foster a sense of community and connection among participants. You'll have the opportunity to connect with like-minded individuals who share your passion for yoga and mindfulness.`}
                </p>
              </li>
              <li>
                <p>Holistic Well-Being:</p>
                <p>
                  {`Beyond the physical postures, our workshops emphasize the holistic aspects of yoga and meditation, including their mental, emotional, and spiritual dimensions. You'll leave feeling nourished on all levels.`}
                </p>
              </li>
              <li>
                <p>Empowerment:</p>
                <p>
                  {`Our goal is to empower you on your journey of self-improvement and self-discovery. Whether you're seeking physical strength, mental clarity, or a deeper connection to yourself, our workshops provide the tools you need to succeed.`}
                </p>
              </li>
            </ol>
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
