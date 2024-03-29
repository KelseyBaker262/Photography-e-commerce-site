import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles}>
        <img src="/smallerlogo.svg" alt="Lost in nostalgia logo" />
        <nav className={styles.navbuttons}>
          <img src="/Shop.svg" alt="Lost in nostalgia logo" />
          <img src="/About.svg" alt="About page button" />
          <img src="/Portfolio.svg" alt="Portfolio page button" />
          <img src="/Contact.svg" alt="Contact page button" />
          <img src="/Instagram.svg" alt="Instagram link button" />
          <img src="/Shoppingtrolley.svg" alt="Shopping cart" />
        </nav>
      </header>
    </>
  );
}
