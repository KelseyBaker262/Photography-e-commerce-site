"use client"
import 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {

  return (
       <header className={styles.header} >
        <img className={styles.logoOne} src="/smallerlogo.png" alt="Lost in nostalgia logo" />
        <nav className={styles.navBtns} >
          <img className={styles.shop} src="/Shop.png" alt="Shop page button" />
          <img className={styles.about}src="/About.png" alt="About page button" />
          <img className={styles.portfolio}src="/Portfolio.png" alt="Portfolio page button" />
          <img className={styles.contact}src="/Contact.png" alt="Contact page button" />
          {/* <img className={styles.instagram} src="/Instagram.svg" alt="Instagram link button" />
          <img className={styles.shoppingTrolley} src="/shoppingcart.png" alt="Shopping cart" /> */}
        </nav>
      </header>
  );
}

// className={styles}
// className={styles.navbuttons}
