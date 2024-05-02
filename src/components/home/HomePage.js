"use client";
import Image from "next/image";
import styles from "./homepage.module.scss";
import { Typewriter } from "nextjs-simple-typewriter";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [experience, setExperience] = useState(0);
  const [client, setClient] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const experienceIntervalId = setInterval(() => {
      if (experience < 5) {
        setExperience((prevYears) => prevYears + 1);
      }
    }, 100);

    return () => {
      clearInterval(experienceIntervalId);
    };
  }, [experience]);

  useEffect(() => {
    const clientIntervalId = setInterval(() => {
      if (client < 50) {
        setClient((prevAge) => prevAge + 1);
      }
    }, 10);

    return () => {
      clearInterval(clientIntervalId);
    };
  }, [client]);

  useEffect(() => {
    const awardsIntervalId = setInterval(() => {
      if (awards < 4) {
        setAwards((prevExperience) => prevExperience + 1);
      }
    }, 150);

    return () => {
      clearInterval(awardsIntervalId);
    };
  }, [awards]);

  return (
    <main id="home" className={styles.main}>
      <section className={styles.cover_container}>
        <div className={styles.details_container}>
          <p className={styles.i_am}>I AM</p>
          <h2 className={styles.name}>BLESS KOFI ASIEDU</h2>
          <h3 className={styles.title}>
            A{" "}
            <span className={styles.title_tag}>
              <Typewriter
                words={[
                  "COUNSELLOR",
                  "PROFESSIONAL THERAPIST",
                  "LOVELIFE COACH",
                  "CAREER COACH",
                  "CONFERENCE SPEAKER",
                ]}
                loop={5}
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className={styles.blinking_cursor}></span>
            </span>
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
          <h2 className={styles.ex_card_number}>0{experience}</h2>
          <p className={styles.ex_card_text}>YEARS OF EXPERIENCE</p>
        </div>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>{client}+</h2>
          <p className={styles.ex_card_text}>SATISFIED CLIENTS</p>
        </div>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>0{awards}</h2>
          <p className={styles.ex_card_text}>AWARDS WON</p>
        </div>
      </section>
    </main>
  );
}
