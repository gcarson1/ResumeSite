import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img src="/menu-burger(1).png" alt="Menu" />
        </div>
        <div className={`${styles.menuItems} ${isOpen ? styles.showMenu : ''}`}>
          <Link className={styles.logo} href="/">Gabriel</Link>
          <Link className={styles.ctaBtn} href="/">Home</Link>
          <Link className={styles.ctaBtn} href="/">Resume</Link>
          <Link className={styles.ctaBtn} href="/">Projects</Link>
          <Link className={styles.ctaBtn} href="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
