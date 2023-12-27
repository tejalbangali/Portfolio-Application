import SideNavList from "./SideNavList";
import styles from "./SideNavbar.module.css";

const SideNavbar = () => {
  return (
    <div className={styles.sideNavbar}>
      <ul>
        <SideNavList
          src="/public/profile-logos/linkedin.png"
          appLink="https://www.linkedin.com/in/tejalbangali/"
        />
        <SideNavList
          src="/public/profile-logos/github.png"
          appLink="https://github.com/tejalbangali"
        />
      </ul>
    </div>
  );
};

export default SideNavbar;
