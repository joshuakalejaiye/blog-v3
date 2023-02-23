import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import useScrollProgress from "../hooks/useScrollProgress";
import { articleData } from "../mocks/articleData";
import styles from "../styles/pages/Blog.module.scss";

const data = {
  body: articleData.body,
  author: "ME",
  lastUpdated: "12:18 BST",
  timeToRead: "5 min read",
};

export default function BlogPage() {
  const pageTitle = "BlogPage";
  const readingTime = require("reading-time/lib/reading-time");
  const { author, lastUpdated, body } = data;
  const timeToRead = readingTime(body).text;
  const shouldReduceMotion = useReducedMotion();
  const layoutRef = useRef<any>(null);

  const [imageLoaded, setImageLoaded] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1676968986443-7f47aad7d993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    "https://images.unsplash.com/photo-1677146444363-582be6341115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1642743039034-e2c3149b71a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  ];
  const [imageIndex, setImageIndex] = useState<any>(1);
  const { dec, scrollProgress, scrollMax } = useScrollProgress();
  // POC for changing banner image on scroll
  const changeImage = () => {
    if (imageIndex + 1 < images.length) {
      setImageIndex(imageIndex + 1);
      return;
    }
    setImageIndex(0);
  };

  useEffect(() => {
    console.log(dec, scrollProgress, scrollMax);
  }, [dec, scrollProgress, scrollMax]);

  return (
    <Layout title={pageTitle}>
      <section className={styles.mainContent}>
        <div className={styles.leftContentContainer}>
          <motion.div
            animate={imageLoaded && { opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                    delay: 0.4,
                    opacity: { duration: 0.2 },
                  }
            }
            className={styles.imageContainer}
          >
            <motion.h1
              animate={imageLoaded && { opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      delay: 1.1,
                      opacity: { duration: 0.2 },
                    }
              }
              className={`${styles.title}`}
            >
              Microsoft President Is Carrying That Giant Sony Call of Duty Deal
              In Pocket, Weirdly
            </motion.h1>
            <Image
              width={1000}
              height={1000}
              onClick={changeImage}
              onLoad={() => setImageLoaded(true)}
              alt="image of me"
              src={images[imageIndex]}
              className={styles.image}
              loading="eager"
            ></Image>
          </motion.div>
          <motion.div
            animate={imageLoaded && { opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                    delay: 1.1,
                    opacity: { duration: 0.2 },
                  }
            }
            className={styles.dataItemContainer}
          >
            <motion.p className={styles.dataItem}>{author}</motion.p>
            <motion.p className={styles.dataItem}>{lastUpdated}</motion.p>
            <motion.p className={styles.dataItem}>{timeToRead}</motion.p>
          </motion.div>
        </div>
        <div className={styles.rightContentContainer}>
          <motion.div
            ref={layoutRef}
            className={styles.content}
            animate={imageLoaded && { opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                    delay: 1.65,
                    opacity: { duration: 0.2 },
                  }
            }
          >
            {data.body}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
