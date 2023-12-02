import SideNavList from "./SideNavList";
import styles from "./SideNavbar.module.css";

const SideNavbar = () => {
  return (
    <div className={styles.sideNavbar}>
        <ul>
            <SideNavList src="/public/profile-logos/linkedin.png" /> 
            <SideNavList src="/public/profile-logos/github.png" /> 
        </ul>
    </div>
  );
};

export default SideNavbar;
