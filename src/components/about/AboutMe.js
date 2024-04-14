import styles from "./aboutme.module.scss";
export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h2 className={styles.about_me_header}>About.</h2>
      <section className={styles.about_section_container}>
        <div className={styles.about_text_container}>
          <h2 className={styles.about_header}>
            Building Trust, Nurturing Hope.
          </h2>
          <p className={styles.about_text}>
            Bless Kofi Asiedu LOREM IPSUM Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt molli
          </p>
          <p className={styles.signature}>Bless Kofi Asiedu</p>
        </div>
        <div className={styles.about_image_container}>
          <img
            className={styles.about_image}
            src="/images/bka.jpg"
            alt="counsellor's Photo"
          />
        </div>
      </section>
    </div>
  );
}
