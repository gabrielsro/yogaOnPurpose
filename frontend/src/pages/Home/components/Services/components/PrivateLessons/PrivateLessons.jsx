import "./PrivateLessons.css";
import ServicesNavigation from "../ServicesNavigation";

const PrivateLessons = () => {
  return (
    <section className="service">
      <div className="serviceHeader" id="privateLessons">
        <h2 className="serviceTitle">Private Lessons</h2>
        <div className="serviceIntroContainer">
          <p className="serviceIntro">
            At Yoga On Purpose we believe that yoga is a personal journey, and
            your practice should reflect your individual needs and goals. Our
            one-on-one private yoga classes are designed to provide you with a
            customized yoga experience that meets you where you are and guides
            you toward your desired outcomes.
          </p>
        </div>
      </div>
      <div className="serviceBody">
        <h3>What to Expect</h3>
        <ol>
          <li>
            <p>Personalized Attention:</p>
            <p>
              When you choose a private yoga class with us, you are embarking on
              a journey that is entirely your own. Our experienced and dedicated
              yoga instructor will work closely with you to understand your
              specific goals, challenges, and preferences.
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
              We prioritize proper alignment and technique to ensure your safety
              and maximize the benefits of each pose. Our instructor will
              provide hands-on guidance and adjustments to help you find your
              best alignment.
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
              sessions. This flexibility ensures that yoga can seamlessly fit
              into your lifestyle.
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
              Beyond the physical postures, our private yoga classes encompass
              the holistic essence of yoga, including its philosophy and
              lifestyle principles. We aim to help you find balance on and off
              the mat.
            </p>
          </li>
        </ol>
        <ServicesNavigation parent={"privateLessons"} />
      </div>
    </section>
  );
};
export default PrivateLessons;
