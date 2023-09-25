import "./Workshops.css";
import ServicesNavigation from "../ServicesNavigation";

const Workshops = () => {
  return (
    <section className="service">
      <div className="serviceHeader" id="yogaWorkshops">
        <h2 className="serviceTitle">Yoga and Mindfulness Workshops</h2>
        <p className="serviceIntro">
          {`At Yoga On Purpose's Yoga and Mindfulness Workshops, we
              invite you to embark on a transformative journey of self-discovery
              and well-being. Our workshops offer a diverse range of themes and
              skillsets designed to cater to all levels of yoga and meditation
              practitioners.`}
        </p>
      </div>
      <div className="serviceBody">
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
        <ServicesNavigation parent={"yogaWorkshops"} />
      </div>
    </section>
  );
};
export default Workshops;
