import styles from "./index.module.scss";

const ArticleSelector = () => {
  return (
    <div className={styles.container}>
      <div className={styles.articleCard}></div>
      <div className={styles.articleCard}></div>
      <div className={styles.articleCard}></div>
      <div className={styles.articleCard}></div>
    </div>
  );
};

export default ArticleSelector;
