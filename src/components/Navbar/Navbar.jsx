import styles from "./Navbar.module.css";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoName}>
        <a href="/">
          <img src="/public/logo.png" alt="" /> Tejal Bangali
        </a>
      </div>
      <div className={styles.navList}>
        <ul>
          <NavList text="HOME" link="#" />
          <NavList text="ABOUT" link="#" />
          <NavList text="PROJECTS" link="#" />
          <NavList text="CONTACT" link="#" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
