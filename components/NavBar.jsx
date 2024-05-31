import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 915 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Image className={styles.menuIcon} src='menu-burger-horizontal-svgrepo-com.svg' width={30} height={30} alt="Menu"/>
        </div>
        <div className={`${isOpen ? styles.showMenu : ''} ${isOpen ? styles.menuItemsVisible : styles.menuItems}`}>
          <Link className={styles.navButton} href="../" >Gabriel</Link>
          <a> </a>
          <Link className={styles.navButton} href="../resume" >Resume</Link>
          <a> </a>
          <Link className={styles.navButton} href="../projects" >Projects</Link>
          <a> </a>
          <Link className={styles.navButton} href="../contact" >Contact</Link>
          <a> </a>
          <Link className={styles.navButton} href="../hobbies" >Hobbies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
