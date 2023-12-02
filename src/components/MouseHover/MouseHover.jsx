import styles from "./MouseHover.module.css";

const MouseHover = () => {
  return (
    <div className={styles.mouseScroll}>
      <div className={styles.mouse}></div>
    </div>
  );
};

export default MouseHover;
