import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const imageTitles = [
  "CSS Modules & Sass Variables",
  "Framer Motion: Declarative CSS Animations for React Projects",
  "Trying out Svelte",
];

const imageUrls = [
  "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1496850574977-a4607106a874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
];

const ArticleSelector = () => {
  const imageRefs = useRef<any[]>([]);
  const articleTrack = useRef<any>();
  const MotionImage = motion(Image);

  return (
    <div
      draggable="false"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      ref={articleTrack}
      className={styles.container}
    >
      <div>
        <p className={styles.cardsTitle}>Latest posts</p>
      </div>
      <div className={styles.cardsContainer}>
        {imageUrls.map((url) => (
          <div className={styles.card} key={imageUrls.indexOf(url)}>
            <Link href={"/blog"}>
              <MotionImage
                draggable="false"
                src={url}
                width={1000}
                height={1000}
                ref={(el: any) =>
                  (imageRefs.current[imageUrls.indexOf(url)] = el)
                }
                className={styles.cardImage}
                alt="banner image"
              ></MotionImage>
              <p className={styles.cardTitle}>
                {imageTitles[imageUrls.indexOf(url)]}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSelector;
