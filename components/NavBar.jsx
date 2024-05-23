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
        <div className={`${isOpen ? styles.showMenu : ''} ${isOpen ? styles.menuItemsVisible : styles.menuItems}`}>
          <Link class={styles.navButton} href="../" onClick={toggleMenu}>Gabriel</Link>
          <a> </a>
          <Link class={styles.navButton} href="../resume" onClick={toggleMenu}>Resume</Link>
          <a> </a>
          <Link class={styles.navButton} href="../projects" onClick={toggleMenu}>Projects</Link>
          <a> </a>
          <Link class={styles.navButton} href="../contact" onClick={toggleMenu}>Contact</Link>
          <a> </a>
          <Link class={styles.navButton} href="../hobbies" onClick={toggleMenu}>Hobbies</Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
