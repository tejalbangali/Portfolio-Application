import styles from "./SideNavbar.module.css";

const SideNavList = (props) => {
  return (
    <li className={styles.sideNavListLi}>
      <a href={props.appLink} target="_blank">
        <img className={styles.img} src={props.src} alt="profile-logos" />
      </a>
    </li>
  );
};

export default SideNavList;
