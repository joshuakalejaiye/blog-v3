import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  const pageTitle = "About";

  return (
    <Layout flex title={pageTitle}>
      <main className={styles.main}>
        <section className={styles.mainContent}>
          <div className={styles.content}>
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                opacity: { duration: 0.2 },
              }}
              className={`${styles.title}`}
            >
              About Me
            </motion.h1>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                opacity: { duration: 0.2 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at
              atque consequuntur placeat facilis dolores repudiandae possimus et
              autem, magnam dolor! Repellendus velit, quisquam culpa id
              necessitatibus eum! Non magnam, amet quis et veniam deleniti modi
              eligendi quos, debitis laudantium placeat quia, voluptatibus atque
              cumque similique tenetur! Sapiente, ab veniam hic saepe omnis
              voluptatibus blanditiis. Dicta ipsam itaque officia tempore
              provident veniam ipsa ducimus iste obcaecati quia asperiores
              soluta aliquid recusandae est expedita consectetur laudantium
              rerum, laborum in cupiditate impedit doloribus dolores! Neque
              distinctio ut reiciendis, quisquam labore soluta commodi omnis vel
              facere odio, error qui odit earum voluptate non dolor delectus
              unde aut dolorum nesciunt. Consectetur perferendis officia culpa
              officiis alias commodi dolorum sit aliquid libero sequi nam modi
              reprehenderit, aspernatur repellat voluptas voluptatem quasi vel
              quas quaerat cum vero! Incidunt, eum eos. Fuga eum quidem, aliquid
              molestiae ea rerum quisquam asperiores officiis nulla blanditiis
              aperiam repellendus illo. Neque accusantium laborum eius omnis,
              hic ut unde nostrum ducimus praesentium? Recusandae aspernatur
              animi et maxime alias? Corporis quasi excepturi vel sequi atque
              deserunt? Tempore vero qui praesentium architecto, repellat itaque
              quod officiis, eum nisi ad libero. Quaerat accusamus labore
              voluptates, quas quasi earum assumenda consequatur quos cupiditate
              dolore nihil, voluptas aliquam placeat ab nesciunt sit totam eum?
              Quaerat illum esse tempore a nemo sunt nesciunt, delectus placeat
              suscipit debitis, quo ipsum accusantium! Placeat doloribus dolorem
              tempora.
            </motion.div>
            <br />
            {/* <motion.h2
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                opacity: { duration: 0.2 },
              }}
              className={`${styles.subtitle}`}
            >
              Hobbies
            </motion.h2> */}
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                opacity: { duration: 0.2 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at
              atque consequuntur placeat facilis dolores repudiandae possimus et
              autem, magnam dolor! Repellendus velit, quisquam culpa id
              necessitatibus eum! Non magnam, amet quis et veniam deleniti modi
              eligendi quos, debitis laudantium placeat quia, voluptatibus atque
              cumque similique tenetur! Sapiente, ab veniam hic saepe omnis
              voluptatibus blanditiis. Dicta ipsam itaque officia tempore
              provident veniam ipsa ducimus iste obcaecati quia asperiores
              soluta aliquid recusandae est expedita consectetur laudantium
              rerum, laborum in cupiditate impedit doloribus dolores! Neque
              distinctio ut reiciendis, quisquam labore soluta commodi omnis vel
              facere odio, error qui odit earum voluptate non dolor delectus
              unde aut dolorum nesciunt. Consectetur perferendis officia culpa
              officiis alias commodi dolorum sit aliquid libero sequi nam modi
              reprehenderit, aspernatur repellat voluptas voluptatem quasi vel
              quas quaerat cum vero! Incidunt, eum eos. Fuga eum quidem, aliquid
              molestiae ea rerum quisquam asperiores officiis nulla blanditiis
              tempora.
            </motion.div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={1000}
              height={1000}
              alt="image of me"
              src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className={styles.image}
            ></Image>
          </div>
        </section>
      </main>
    </Layout>
  );
}
