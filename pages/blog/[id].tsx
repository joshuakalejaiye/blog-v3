import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import useScrollProgress from "../../hooks/useScrollProgress";
import { articleData } from "../../mocks/articleData";
import posts from "../../mocks/posts";
import styles from "../../styles/pages/Blog.module.scss";

const data = {
  body: articleData.body,
  author: "me",
  lastUpdated: "12:18 BST",
  timeToRead: "5 min read",
};

export default function BlogPage() {
  const {
    query: { id },
    push,
  } = useRouter();

  const pageTitle = "BlogPage";
  const readingTime = require("reading-time/lib/reading-time");
  const shouldReduceMotion = useReducedMotion();
  const layoutRef = useRef<any>(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const { dec, scrollProgress, scrollMax } = useScrollProgress();

  useEffect(() => {
    if (!posts?.[Number(id)]) push("/#blog");
  }, []);

  useEffect(() => {
    console.log(dec, scrollProgress, scrollMax);
  }, [dec, scrollProgress, scrollMax]);

  if (posts?.[Number(id)]) {
    const { title, author, lastUpdated, body } = posts?.[Number(id)];
    const timeToRead = readingTime(body).text;

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
                {title}
              </motion.h1>
              <Image
                width={1000}
                height={1000}
                onLoad={() => setImageLoaded(true)}
                alt="image of me"
                src={posts[Number(id)].imageSrc}
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
              {body}
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return <></>;
}
