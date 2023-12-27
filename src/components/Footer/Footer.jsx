import styles from "./Footer.module.css";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.subContainerFooter}>
          <div className={styles.nameInfo}>
            <h2>TEJAL BANGALI</h2>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>

          <div className={styles.socials}>
            <h2>SOCIAL</h2>
            <ul>
              <FooterSocials
                appLink="https://www.linkedin.com/in/tejalbangali/"
                src="/public/profile-logos/linkedin-ico.png"
              />
              <FooterSocials
                appLink="https://github.com/tejalbangali"
                src="/public/profile-logos/github-ico.png"
              />
            </ul>
          </div>
        </div>

        <div className={styles.footerDescription}>
          <p>
            &copy; Copyright {new Date().getFullYear()}. Made by{" "}
            <a href="https://www.linkedin.com/in/tejalbangali/" target="_blank">
              Tejal Bangali
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
