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
      <div className={styles.menuWrapper}>

        <div className={styles.desktopMenu}>
          <Link className={styles.navButton} href="#skills">skills</Link>
          <Link className={styles.navButton} href="#projects">projects</Link>
          <Link className={styles.navButton} href="#experience">experience</Link>
          <Link className={styles.navButton} href="#resume">resume</Link>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Image src="/menu-burger-horizontal-svgrepo-com.svg" width={30} height={30} alt="Menu" />
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link className={styles.navButton} href="/">gabe</Link>
          <Link className={styles.navButton} href="#skills">skills</Link>
          <Link className={styles.navButton} href="#projects">projects</Link>
          <Link className={styles.navButton} href="#experience">experience</Link>
          <Link className={styles.navButton} href="#resume">resume</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
