import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

type ArticleCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

const ArticleCard = ({ imageSrc, title, subtitle }: ArticleCardProps) => {
  const MotionImage = motion(Image);
  return (
    <div className={styles.card}>
      <Link href={"/blog"}>
        <MotionImage
          draggable="false"
          src={imageSrc}
          width={1000}
          height={1000}
          className={styles.cardImage}
          alt="banner image"
        ></MotionImage>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{subtitle}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
