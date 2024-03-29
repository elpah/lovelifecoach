import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header_div}>
        <p className={styles.intro_paragraph}>FREE INTRODUCTORY MINI SECTION</p>
        <h1 className={styles.header}>
          Creating Calm Lorem Ipsum
          <br /> Amidst Life'storm
        </h1>
        <p className={styles.sub}>
          Discover how our therapeutic approach can help you find inner peace
          and <br />
          resilience, even in the midst of life's challenges.
        </p>
        <div className={styles.button_container}>
          <button className={`${styles.button} ${styles.button_lorem}`}>
            Lorem
          </button>
          <button className={`${styles.button} ${styles.button_ipsum}`}>
            Ipsum
          </button>
        </div>
      </div>
    </main>
  );
}
