import Hero from "../components/Hero";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const pageTitle = "Home";

  return (
    <Layout flex title={pageTitle}>
      <main className={styles.main}>
        <Hero />
      </main>
    </Layout>
  );
}
