import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function BlogPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#blog");
  }, [router]);

  return (
    <Layout title={"Blog"}>
      <div></div>
    </Layout>
  );
}
