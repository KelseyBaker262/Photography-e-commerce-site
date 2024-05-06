import styles from "./page.module.css";
import "./globals.css";
import MainLogo from "./logo/logo.jsx";

export default function Home() {
  return (
    <main className={styles.backgroundImage}>
      <div className={styles.mainLogoWrapper}>
        <MainLogo width="300" />
      </div>
    </main>
  );
}
