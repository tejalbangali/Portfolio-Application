import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.nameInfo}>
          <h2>Tejal Bangali</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className={styles.socials}>
        <h2>Social</h2>
          <ul>
            <li>
              <a href="#"> img </a>
            </li>
            <li>
              <a href="#"> img </a>
            </li>
            <li>
              <a href="#"> img </a>
            </li>
          </ul>
        </div>
        <hr />
        <p className="footerDescription">
          © Copyright 2023. Made by <a href="#">Tejal Bangali</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
