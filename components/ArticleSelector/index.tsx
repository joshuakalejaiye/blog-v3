import ArticleCard from "../ArticleCard";
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

const imageTimes = ["12:03 BST", "18 FEB", "3 HOURS AGO"];

const ArticleSelector = () => {
  const cardIndexes = [0, 1, 2];
  return (
    <div
      draggable="false"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      className={styles.container}
    >
      <div>
        <p className={styles.cardsTitle}>Latest posts</p>
      </div>
      <div className={styles.cardsContainer}>
        {cardIndexes.map((index) => (
          <ArticleCard
            key={`card-${index}`}
            title={imageTitles[index]}
            subtitle={imageTimes[index]}
            imageSrc={imageUrls[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleSelector;
