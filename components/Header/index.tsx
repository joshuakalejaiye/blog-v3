import Link from "next/link";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";

const Header = () => {
  const [navItemHovered, setNavItemHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const [pathInfo, setPathInfo] = useState<{
    route: string;
    buttonText: string;
    underlineWidth: any;
  }>();

  const destinations: {
    [x in string]: { route: string; buttonText: string; underlineWidth: any };
  } = {
    "/": {
      route: "/about",
      buttonText: "ABOUT",
      underlineWidth: "55px",
    },
    fallback: {
      route: "/",
      buttonText: "BACK",
      underlineWidth: "45px",
    },
  };

  useEffect(() => {
    setPathInfo(
      destinations[
        "/" === router.pathname ? String(router.pathname) : "fallback"
      ]
    );
  }, []);

  console.log(pathInfo);
  const headerStyle = `${styles.nav} ${
    "/" !== router.pathname && styles.contentMode
  }`;
  return (
    <nav className={headerStyle}>
      <Link className={styles.navItem} href={pathInfo?.route ?? "/"}>
        <>
          <motion.p
            onMouseEnter={() => setNavItemHovered(true)}
            onMouseLeave={() => setNavItemHovered(false)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            className={styles.navItem}
            style={{ margin: 0, marginTop: "15px", padding: 0 }}
          >
            {pathInfo?.buttonText}
          </motion.p>
          <motion.div
            className={styles.underline}
            layoutId="underline"
            initial={{ x: 2, y: 2, opacity: 0 }}
            style={{ margin: 0, padding: 0 }}
            animate={
              navItemHovered
                ? { width: pathInfo?.underlineWidth, opacity: 1 }
                : { width: shouldReduceMotion ? "55px" : "0%", opacity: 0 }
            }
          />
        </>
      </Link>
    </nav>
  );
};

export default Header;
