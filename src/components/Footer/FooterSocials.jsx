import styles from "./Footer.module.css";

const FooterSocials = (props) => {
  return (
    <li className={styles.socialImgs}>
      <a href="#">
        <img src={props.src} alt="social-logos" />
      </a>
    </li>
  );
};

export default FooterSocials;
