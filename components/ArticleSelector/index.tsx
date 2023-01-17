/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const imageTitles = [
  "The first image",
  "The second image",
  "The third image",
  "The fourth image",
  "The fifth image",
  "The sixth image",
];

const imageUrls = [
  "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
  "https://images.unsplash.com/photo-1673118121742-13425ba31701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1671243396019-a47f031d20e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1652752447765-fca5252ad00a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1642438057301-2767dce84963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2928&q=80",
  "https://images.unsplash.com/photo-1673861561475-e0415df68554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
];

const ArticleSelector = () => {
  const imageRefs = useRef<any[]>([]);
  const articleTrack = useRef<any>();

  return (
    <div
      draggable="false"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      ref={articleTrack}
      className={styles.container}
    >
      {imageUrls.map((url) => (
        <div className={styles.cardContainer} key={imageUrls.indexOf(url)}>
          <img
            draggable="false"
            src={url}
            ref={(el) => (imageRefs.current[imageUrls.indexOf(url)] = el)}
            className={styles.cardImage}
            alt="banner image"
          ></img>
          <h1 className={styles.CardTitle}>
            {imageTitles[imageUrls.indexOf(url)].toUpperCase()}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ArticleSelector;
