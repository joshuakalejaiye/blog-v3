import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.splash}></div> */}
      <div draggable="false" className={styles.textSection}>
        <img
          draggable="false"
          src="https://images.unsplash.com/photo-1670854747451-73701f3fdc79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        ></img>
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
