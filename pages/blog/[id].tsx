import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import useScrollProgress from "../../hooks/useScrollProgress";
import { articleData } from "../../mocks/articleData";
import posts from "../../mocks/posts";
import styles from "../../styles/pages/Blog.module.scss";

export default function BlogPage() {
  let {
    query: { id: idFromNext },
    push,
  } = useRouter();

  const id = Array.isArray(idFromNext) ? -1 : Number(idFromNext);

  const pageTitle = "BlogPage";
  const readingTime = require("reading-time/lib/reading-time");
  const shouldReduceMotion = useReducedMotion();
  const layoutRef = useRef<any>(null);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { dec, scrollProgress, scrollMax } = useScrollProgress();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(id, isNaN(id), id < 0, id > posts.length);
    if (mounted && (isNaN(id) || id < 0 || id > posts.length)) push("/#blog");
  }, [id, push]);

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
                      delay: 0.2,
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
                        delay: 0.55,
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
                      delay: 0.55,
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
                      delay: 0.825,
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

  return <div></div>;
}
