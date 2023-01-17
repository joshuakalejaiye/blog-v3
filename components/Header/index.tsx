import Link from "next/link";
import styles from "./index.module.scss";
import useScreenSize from "../../hooks/useScreenSize";

const Header = () => {
  const { mobile } = useScreenSize();
  return (
    <nav className={styles.nav}>
      {/* {!mobile && (
        <Link className={styles.navItem} href="/#blog">
          Blog
        </Link>
      )} */}
      <Link className={styles.navItem} href="/about">
        ABOUT
      </Link>
    </nav>
  );
};

export default Header;
