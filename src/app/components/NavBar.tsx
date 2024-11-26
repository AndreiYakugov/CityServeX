import Link from 'next/link';
import Image from "next/image";
import styles from '../css/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
        <Image
          src="/images/homepage_logo.png"
          alt="Logo"
          width={238}
          height={40}
        />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/pages/xinbox">
            <p className={styles.itemText}>X IN A BOX</p>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/pages/process">
            <p className={styles.itemText}>PROCESS</p>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/pages/about">
            <p className={styles.itemText}>ABOUT</p>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/pages/contact">
            <p className={styles.itemText}>CONTACT</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
