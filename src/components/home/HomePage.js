import Image from "next/image";
import styles from "./homepage.module.scss";

export default function HomePage(id) {
  return (
    <main id={id} className={styles.main}>
      <section className={styles.cover_container}>
        <div className={styles.details_container}>
          <p className={styles.i_am}>I AM</p>
          <h2 className={styles.name}>BLESS KOFI ASIEDU</h2>
          <h3 className={styles.title}>
            A <span className={styles.title_tag}>PROFESSIONAL THERAPIST</span>
          </h3>
          <p className={styles.paragraph}>
            Direction is what you need when you are lost and NOT SPEED! The cost
            involved in dealing with the issues of life have to be prioritized
            and confronted.
          </p>
          <button className={styles.button}>Book Appointment</button>
        </div>
        <div className={styles.image_container_bg}>
          <img className={styles.ceo_img} src="/images/ceo/bka.png" />
        </div>
      </section>
      <section className={styles.experience_section}>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>05</h2>
          <p className={styles.ex_card_text}>YEARS OF EXPERIENCE</p>
        </div>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>50+</h2>
          <p className={styles.ex_card_text}>SATISFIED CLIENTS</p>
        </div>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>04</h2>
          <p className={styles.ex_card_text}>AWARDS WON</p>
        </div>
      </section>
    </main>
  );
}
