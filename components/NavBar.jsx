// components/Navbar.jsx

import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <Link className={styles.description} href="/">
          Gabe's Portfolio 
        </Link>
      </div>
      <div>
        <Link href='/' className={styles.tab}> Resume</Link>

      </div>
    </div>
  )
}

export default Navbar;