import styles from "./Projects.module.css";

const ProjectList = (props) => {
  return (
    <div className={styles.projectListImages}>
      <li>
        <img src={props.src} alt="project-images" />

        <div className={styles.projectListImagesSubContainer}>
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
          <a href={props.appLink} target="_blank">
            <button>{props.buttonName} </button>
          </a>
        </div>
      </li>
    </div>
  );
};

export default ProjectList;
