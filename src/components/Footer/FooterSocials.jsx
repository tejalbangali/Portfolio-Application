import styles from "./Footer.module.css";

const FooterSocials = (props) => {
  return (
    <li className={styles.socialImgs}>
      <a href={props.appLink} target="_blank">
        <img src={props.src} alt="social-logos" />
      </a>
    </li>
  );
};

export default FooterSocials;
