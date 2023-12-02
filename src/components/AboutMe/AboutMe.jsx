import styles from "./AboutMe.module.css";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeSection}>
        <h2>ABOUT ME</h2>
        <hr />
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.knowMeSection}>
          <h2>Get to know me!</h2>
          <p>
            I'm a <strong>Frontend Web Developer</strong> building the Front-end
            of Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the{" "}
            <strong>Projects</strong> section.
            <br /> <br />I also like sharing content related to the stuff that I
            have learned over the years in <strong>Web Development</strong> so
            it can help other people of the Dev Community. Feel free to Connect
            or Follow me on my
            <a href="#">
              {" "}
              <u>Linkedin</u>{" "}
            </a>
            where I post useful content related to Web Development and
            Programming <br /> <br />
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{" "}
            <strong>contact</strong> me.
          </p>
          <button>CONTACT</button>
        </div>

        <div className={styles.skills}>
          <h2>My Skills</h2>
          <ul>
            <div className={styles.frontend}>
              <h3>Frontend</h3>
              <Skills skill="HTML" />
              <Skills skill="CSS" />
              <Skills skill="React" />
              <Skills skill="Javascript" />
            </div>

            <div className={styles.backend}>
              <h3>Backend & Database</h3>
              <Skills skill="Nodejs" />
              <Skills skill="Typescript" />
              <Skills skill="MySql" />
              <Skills skill="MongoDb" />
            </div>

            <div className={styles.db}>
              <h3>Tools</h3>
              <Skills skill="Git" />
              <Skills skill="Postman" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;