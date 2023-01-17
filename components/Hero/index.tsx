/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";

const Hero = () => {
  const { width } = useScreenSize();
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className={styles.container}>
      {/* <div className={styles.splash}></div> */}
      <div draggable="false" className={styles.textSection}>
        <img
          draggable="false"
          src="https://images.unsplash.com/photo-1670854747451-73701f3fdc79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="MUST BE REPLACED"
        ></img>
        <motion.div
          animate={
            width < 800 || shouldReduceMotion
              ? { x: 0, y: 0, opacity: 1 }
              : { y: 0, opacity: 1 }
          }
          initial={
            width < 800
              ? { y: 0, x: 0, opacity: 0 }
              : shouldReduceMotion
              ? { y: 680, opacity: 1 }
              : { y: -670, opacity: 0 }
          }
          transition={{
            delay: 0.5,
            opacity: { duration: 0.2 },
            y: { duration: 0.3, type: "spring" },
          }}
        >
          {" "}
          <h1 className={`${styles.title} ${styles.text} ${styles.firstname}`}>
            Joshua
          </h1>
          <h1 className={`${styles.title} ${styles.text} ${styles.surname}`}>
            Kalejaiye
          </h1>
        </motion.div>

        <motion.div
          animate={width < 800 ? { opacity: 1 } : { opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            opacity: { duration: 0.2 },
          }}
        >
          <p className={`${styles.subtitle} ${styles.text}`}>
            software engineer
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
