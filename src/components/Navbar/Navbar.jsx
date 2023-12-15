import { useState } from "react";
import styles from "./Navbar.module.css";
import NavList from "./NavList";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  const setMediaIcon = () => {
    setShowMediaIcon(!showMediaIcon);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoName}>
        <a href="/">
          <img src="/public/logo.png" alt="" /> Tejal Bangali
        </a>
      </div>

      <div
        className={showMediaIcon ? styles.viewMobNavList :  styles.mobNavList}
      >
        <ul>
          <NavList text="HOME" link="#" />
          <NavList text="ABOUT" link="#" />
          <NavList text="PROJECTS" link="#" />
          <NavList text="CONTACT" link="#" />
        </ul>
      </div>

      <div className={styles.hamburger}>
        <a href="#" onClick={() => setMediaIcon()}>
          {showMediaIcon ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
