import ProjectList from "./ProjectList";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectContainer} id="projects">
      <div className={styles.projectAbout}>
        <h2>PROJECTS</h2>
        <hr />
        <p>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own description
        </p>
      </div>

      <div className={styles.projectList}>
        <div className={styles.projectListSubContainer}>
          <ul>

          <ProjectList
              src="/projects-images/contact-form.png"
              appLink="https://static-contactus-form.netlify.app/"
              heading="Contact Us Page"
              description="Created this static contact us page using Reactjs."
              buttonName="PROJECT LINK"
            />


            <ProjectList
              src="/projects-images/dice-game.png"
              appLink="https://tejalbangali.github.io/Dice_Roll_Rush/"
              heading="Dice Game"
              description="Created this Fun Dice Game using Javascript, Html and Css. Have fun playing with a Robot."
              buttonName="PROJECT LINK"
            />

            <ProjectList
              src="/projects-images/drum-game.png"
              appLink="https://tejalbangali.github.io/Drum-kit-beat/"
              heading="Dice Game"
              description="Created this Fun Drum Playing Game which plays Audio just like a real one, using Javascript, Html and Css. Have fun playing with the Drums."
              buttonName="PROJECT LINK"
            />

            <ProjectList
              src="/projects-images/flodesk-card.png"
              appLink="https://tejalbangali.github.io/Flodesk-Login-Screen---Clone/"
              heading="Flodesk Login Screen"
              description="Created this Flodesk login screen clone using Html and Css."
              buttonName="PROJECT LINK"
            />

            <ProjectList
              src="/projects-images/gphotos-card.png"
              appLink="https://tejalbangali.github.io/Google-photos-card---Clone/"
              heading="Google Photos Card"
              description="Created this Google Photos card screen clone using Html and Css."
              buttonName="PROJECT LINK"
            />

            <ProjectList
              src="/projects-images/linkedin-card.png"
              appLink="https://tejalbangali.github.io/Linkedin-Profile-card---Clone/"
              heading="Linkedin Profile Card"
              description="Created this Profile card clone of Linkedin using Html and Css."
              buttonName="PROJECT LINK"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
