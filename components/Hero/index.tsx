/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../assets/ebun_oluwole_max.webp";
import { useState } from "react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.container}>
      {/* <div className={styles.splash}></div> */}
      <div draggable="false" className={styles.textSection}>
        <motion.div
          animate={imageLoaded && { opacity: 1 }}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: 0.4,
            opacity: { duration: 0.2 },
          }}
          className={styles.imageCropper}
        >
          <Image
            className={styles.image}
            draggable="false"
            onLoad={() => setImageLoaded(true)}
            src={heroImage}
            fill
            alt="Image of a bustling city (Nottingham) in the daytime"
          ></Image>
        </motion.div>
        <motion.div
          animate={imageLoaded && { y: 0, opacity: 1 }}
          initial={
            shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -670, opacity: 0 }
          }
          transition={{
            delay: 1,
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
          animate={imageLoaded && { opacity: 1 }}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: 1.5,
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
