import SideNavList from "./SideNavList";
import styles from "./SideNavbar.module.css";

const SideNavbar = () => {
  return (
    <div className={styles.sideNavbar}>
      <ul>
        <SideNavList
          src="/profile-logos/linkedin.png"
          appLink="https://www.linkedin.com/in/tejalbangali/"
        />
        <SideNavList
          src="/profile-logos/github.png"
          appLink="https://github.com/tejalbangali"
        />

        <SideNavList
          src="/profile-logos/gmail-logo.png"
          appLink="mailto:tejal.bangali@gmail.com"
        />
      </ul>
    </div>
  );
};

export default SideNavbar;
