import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.subHeroSection}>
        <h1>HEY, I'M TEJAL BANGALI</h1>

        <div className={styles.heroInfo}>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>

        <a href="./#projects">
          <button>Projects</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
