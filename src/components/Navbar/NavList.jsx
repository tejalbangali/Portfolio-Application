import React from "react";
import styles from './Navbar.module.css'

const NavList = (props) => {
  return (
    <li className={styles.navListLi}>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

export default NavList;
