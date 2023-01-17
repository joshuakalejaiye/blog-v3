import Link from "next/link";
import styles from "./index.module.scss";
import useScreenSize from "../../hooks/useScreenSize";
import { motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";

const Header = () => {
  const [navItemHovered, setNavItemHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className={styles.nav}>
      {/* {!mobile && (
        <Link className={styles.navItem} href="/#blog">
          Blog
        </Link>
      )} */}

      <Link href="/about">
        <>
          <motion.p
            onMouseEnter={() => setNavItemHovered(true)}
            onMouseLeave={() => setNavItemHovered(false)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            className={styles.navItem}
            style={{ margin: 0, marginTop: "15px", padding: 0 }}
          >
            ABOUT
          </motion.p>
          <motion.div
            className={styles.underline}
            layoutId="underline"
            initial={{ x: 2, y: 2, opacity: 0 }}
            style={{ margin: 0, padding: 0 }}
            animate={
              navItemHovered
                ? { width: "55px", opacity: 1 }
                : { width: shouldReduceMotion ? "55px" : "0%", opacity: 0 }
            }
          />
        </>
      </Link>
    </nav>
  );
};

export default Header;
