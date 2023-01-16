import Layout from "../components/Layout";
import styles from "../styles/pages/Blog.module.scss";

export default function Blog() {
  const pageTitle = "Blog";

  return (
    <Layout flex title={pageTitle}>
      <div>This is the blog page</div>
    </Layout>
  );
}
