import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const data = {
  imageSrc:
    "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  title: "CSS Modules & Sass Variables",
  subtitle: "20 FEB",
  previewText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at atque consequuntur placeat facilis dolores repudiandae possimus et autem, magnam dolor! Repellendus velit, quisquam culpa id necessitatibus eum! Non magnam, amet quis et veniam deleniti modi eligendi quos.",
};

const ArticleMain = () => {
  const MotionImage = motion(Image);
  const { imageSrc, title, subtitle, previewText } = data;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Link href={"/blog"}>
          <MotionImage
            draggable="false"
            src={imageSrc}
            width={1000}
            height={1000}
            className={styles.mainImage}
            alt="banner image"
          ></MotionImage>
          <h3 className={styles.mainTitle}>{title}</h3>
        </Link>
      </div>
      <p className={styles.mainSubtitle}>{subtitle}</p>
      <p className={styles.mainPreviewText}>{previewText}</p>
    </div>
  );
};

export default ArticleMain;
