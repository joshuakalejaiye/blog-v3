import ArticleSelector from "../components/ArticleSelector";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const pageTitle = "Home";

  return (
    <Layout flex title={pageTitle}>
      <main className={styles.main}>
        <div className={styles.homeSection}>
          <Hero />
        </div>
        <div id="blog" className={styles.blogSection}>
          <ArticleSelector />
        </div>
      </main>
    </Layout>
  );
}
