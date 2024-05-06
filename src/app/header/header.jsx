"use client"
import 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {

  return (
    <header className={styles.header}>
       <nav className={styles.navbar} >
        <a href="#" className={styles.navbranding}>Logo</a>

        <ul className={styles.navmenu}>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>Shop</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>About</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>Work</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>Contact</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>Socials</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navlink}>Cart</a>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

// Smalllogo
// Shop
// About
// Work
// Contact
// Socials
// Cart
