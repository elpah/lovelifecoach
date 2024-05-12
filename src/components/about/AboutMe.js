import Link from "next/link";
import styles from "./aboutme.module.scss";
export default function AboutMe() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.about_container}>
        <div className={styles.header_container}>
          <h2 className={styles.header_shadow}>ABOUT ME</h2>
          <h3 className={styles.name}>BLESS KOFI ASIEDU</h3>
        </div>
        <p className={styles.text}>
          Struggling to find love or reignite the spark? Bless Kofi Asiedu,
          therapist and love coach, can help.
          <br />
          <br />
          Combining therapeutic techniques with love coaching expertise, Bless
          Kofi empowers you to build healthy relationships and create the
          fulfilling love life you deserve.
          <br />
          <br />
          Contact Bless Kofi today and start your journey towards lasting love.
        </p>
        <Link
          href="https://www.linkedin.com/in/bless-kofi-asiedu-ba-pgde-mphil-b16240b5/"
          target="blank"
        >
          <button className={styles.button}>LINKEDIN</button>
        </Link>
      </div>
      <div className={styles.ex_container}>
        <h2 className={styles.ex_number}>05</h2>
        <p className={styles.ex_text}>YEARS OF EXPERIENCE</p>
      </div>
    </div>
  );
}
