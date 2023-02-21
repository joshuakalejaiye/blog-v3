import ArticleSelector from "../components/ArticleSelector";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const pageTitle = "Home";

  return (
    <Layout flex title={pageTitle}>
      <main className={styles.main}>
        <section className={styles.homeSection}>
          <Hero />
        </section>
        <section draggable="false" id="blog" className={styles.blogSection}>
          <ArticleSelector />
          <ArticleSelector />
        </section>
      </main>
    </Layout>
  );
}
