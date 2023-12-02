import React from "react";
import styles from './NavList.module.css'

const NavList = (props) => {
  return (
    <li className={styles.navListLi}>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

export default NavList;
