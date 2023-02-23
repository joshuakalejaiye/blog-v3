import { useEffect } from "react";
import ArticleMain from "../components/ArticleMain";
import ArticleSelector from "../components/ArticleSelector";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import useScrollProgress from "../hooks/useScrollProgress";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const pageTitle = "Home";
  const { dec, scrollProgress, scrollMax } = useScrollProgress();

  useEffect(() => {
    console.log(dec, scrollProgress, scrollMax);
  }, [dec, scrollProgress, scrollMax]);

  return (
    <Layout title={pageTitle}>
      <main className={styles.main}>
        <section className={styles.homeSection}>
          <Hero />
        </section>
        <section draggable="false" id="blog" className={styles.blogSection}>
          <div className={styles.blogTitle}>Recent Posts</div>
          <div className={styles.blogPostsContainer}>
            <ArticleMain />
            <ArticleSelector />
          </div>
        </section>
      </main>
    </Layout>
  );
}
