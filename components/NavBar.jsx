import Hamburger from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = [true, true];

  const toggleMenu = () => {
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Image className={styles.menuIcon} src='menu-burger-horizontal-svgrepo-com.svg' width={30} height={30} alt="Menu"/>
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
