import Link from "next/link";
import styles from "./index.module.scss";
import useScreenSize from "../../hooks/useScreenSize";

const Header = () => {
  return (
    <nav className={styles.nav}>
      {
        <Link className={styles.navItem} href="/#blog">
          Blog
        </Link>
      }
      <Link className={styles.navItem} href="/about">
        About
      </Link>
    </nav>
  );
};

export default Header;
