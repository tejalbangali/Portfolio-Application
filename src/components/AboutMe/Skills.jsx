import styles from "./AboutMe.module.css";

const Skills = (props) => {
  return (
    <li className={styles.skillsLi}>
      <button>{props.skill}</button>
    </li>
  );
};

export default Skills;
