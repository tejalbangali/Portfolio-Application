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
              src="/projects-images/1.jpeg"
              // appLink="https://github.com/tejalbangali" -> ADD LINKS
              heading="Dopefolio"
              description="Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally"
              buttonName="PROJECT LINK"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
