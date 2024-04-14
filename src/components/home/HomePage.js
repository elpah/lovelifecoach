import Image from "next/image";
import styles from "./homepage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.details_container}>
        <p className={styles.i_am}>I AM</p>
        <h2 className={styles.name}>BLESS KOFI ASIEDU</h2>
        <h3>
          A <span>PROFESSIONAL THERAPIST</span>
        </h3>
        <p>
          Direction is what you need when you are lost and NOT SPEED! The cost
          involved in dealing with the issues of life have to be prioritized and
          confronted.
        </p>
        <button>Book Appointment</button>
      </div>
      <div></div>
    </main>
  );
}
