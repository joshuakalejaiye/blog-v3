import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.splash}></div> */}
      <div className={styles.textSection}>
        <h1 className={`${styles.title} ${styles.text} ${styles.firstname}`}>
          Joshua
        </h1>
        <h1 className={`${styles.title} ${styles.text} ${styles.surname}`}>
          Kalejaiye
        </h1>
        <p className={`${styles.subtitle} ${styles.text}`}>software engineer</p>
      </div>
    </div>
  );
};

export default Hero;
