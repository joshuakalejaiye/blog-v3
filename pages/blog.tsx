import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "../components/Layout";
import { articleData } from "../mocks/articleData";
import styles from "../styles/pages/Blog.module.scss";

const data = {
  author: "ME",
  lastUpdated: "12:18 BST",
  timeToRead: "5 min read",
};

export default function BlogPage() {
  const pageTitle = "BlogPage";

  const { author, lastUpdated, timeToRead } = data;

  return (
    <Layout flex title={pageTitle}>
      <section className={styles.mainContent}>
        <div className={styles.leftContentContainer}>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.4,
              opacity: { duration: 0.2 },
            }}
            className={styles.imageContainer}
          >
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.8,
                opacity: { duration: 0.2 },
              }}
              className={`${styles.title}`}
            >
              Microsoft President Is Carrying That Giant Sony Call of Duty Deal
              In Pocket, Weirdly
            </motion.h1>
            <Image
              width={1000}
              height={1000}
              alt="image of me"
              src="https://images.unsplash.com/photo-1676968986443-7f47aad7d993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              className={styles.image}
            ></Image>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.8,
              opacity: { duration: 0.2 },
            }}
            className={styles.dataItemContainer}
          >
            <motion.p className={styles.dataItem}>{author}</motion.p>
            <motion.p className={styles.dataItem}>{lastUpdated}</motion.p>
            <motion.p className={styles.dataItem}>{timeToRead}</motion.p>
          </motion.div>
        </div>
        <div className={styles.rightContentContainer}>
          <motion.div
            className={styles.content}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.5,
              opacity: { duration: 0.2 },
            }}
          >
            {articleData.body}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
