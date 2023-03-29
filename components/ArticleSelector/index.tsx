import posts from "../../mocks/posts";
import ArticleCard from "../ArticleCard";
import styles from "./index.module.scss";

const ArticleSelector = () => {
  const lastThreePosts = [posts[1], posts[2], posts[3]];
  return (
    <div
      draggable="false"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      className={styles.container}
    >
      <div className={styles.cardsContainer}>
        {lastThreePosts.map((post) => (
          <ArticleCard
            key={`card-${post.title}`}
            id={post.id}
            title={post.title}
            subtitle={post.lastUpdated}
            imageSrc={post.imageSrc}
          />
        ))}
      </div>
      <div>
        <p className={styles.cardsTitle}>more posts</p>
      </div>
    </div>
  );
};

export default ArticleSelector;
