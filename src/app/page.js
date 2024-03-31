import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cover_container}>
        <div className={styles.header_container}>
          <div className={styles.header_div}>
            <p className={styles.intro_paragraph}>
              Talk to a professional Therapist...
            </p>
            <h1 className={styles.header}>
              BLESS KOFI ASIEDU
              <br />
              The <span className={styles.header_span}>LoveLife Coach</span>
            </h1>
            <p className={styles.sub}>
              Direction is what you need when you are lost <br />
              Not SPEED! The Cost involved in dealing with the...
            </p>
            <div className={styles.button_container}>
              <button className={`${styles.button} ${styles.button_lorem}`}>
                Email
              </button>
              <button className={`${styles.button} ${styles.button_ipsum}`}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <div className={styles.image_container}>
          <img src="/images/bka.jpg" />
        </div>
      </div>
    </main>
  );
}
