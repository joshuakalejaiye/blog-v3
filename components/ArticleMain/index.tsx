import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posts from "../../mocks/posts";
import styles from "./index.module.scss";

const ArticleMain = () => {
  const MotionImage = motion(Image);
  const { id, imageSrc, title, lastUpdated, previewText } = posts[0];
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/${id}`}>
        <div className={styles.imageContainer}>
          <MotionImage
            draggable="false"
            src={imageSrc}
            loading="eager"
            width={1000}
            height={1000}
            className={styles.mainImage}
            alt="banner image"
          ></MotionImage>
          <h3 className={styles.mainTitle}>{title}</h3>
        </div>
        <p className={styles.mainPreviewText}>{previewText}</p>
      </Link>
    </div>
  );
};

export default ArticleMain;
