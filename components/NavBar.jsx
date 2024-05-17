import Hamburger from 'react';
import { useState } from 'react';
import Image from 'next/image';
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
          <Image className={styles.menuIcon} src='menu-burger-horizontal-svgrepo-com.svg' width={30} height={30} alt="Menu"/>
        </div>
        <div className={isOpen ? styles.showMenu : ''}>
          <Link className={styles.menuItems} href="/">Gabriel</Link>
          <Link className={styles.menuItems} href="/">Home</Link>
          <Link className={styles.menuItems} href="/">Resume</Link>
          <Link className={styles.menuItems} href="/">Projects</Link>
          <Link className={styles.menuItems} href="/">Contact</Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
