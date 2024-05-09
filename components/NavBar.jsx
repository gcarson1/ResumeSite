// components/Navbar.jsx

import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link className={styles.logo } href="/">Gabriel</Link>
        <Link className={styles.ctaBtn } href="/">Home</Link>
        <Link href='/' className={styles.ctaBtn}>Resume</Link>
        <Link href='/' className={styles.ctaBtn}>Projects</Link>
        <Link href='/' className={styles.ctaBtn}>Contact</Link>

      </div>
    </div>
  )
}

export default Navbar;