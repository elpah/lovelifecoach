"use client";
import styles from "./homepage.module.scss";
import { Typewriter } from "nextjs-simple-typewriter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function HomePage() {
  const [experience, setExperience] = useState(0);
  const [client, setClient] = useState(0);
  const [awards, setAwards] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (experience > 0 && !inView) {
      setExperience(0);
    }
    const experienceIntervalId = setInterval(() => {
      if (experience < 5 && inView) {
        setExperience((prevYears) => prevYears + 1);
      }
    }, 100);

    return () => {
      clearInterval(experienceIntervalId);
    };
  }, [experience, inView]);

  useEffect(() => {
    if (client > 0 && !inView) {
      setClient(0);
    }
    const clientIntervalId = setInterval(() => {
      if (client < 50 && inView) {
        setClient((prevAge) => prevAge + 1);
      }
    }, 10);

    return () => {
      clearInterval(clientIntervalId);
    };
  }, [client, inView]);

  useEffect(() => {
    if (awards > 0 && !inView) {
      setAwards(0);
    }
    const awardsIntervalId = setInterval(() => {
      if (awards < 4 && inView) {
        setAwards((prevExperience) => prevExperience + 1);
      }
    }, 150);

    return () => {
      clearInterval(awardsIntervalId);
    };
  }, [awards, inView]);

  return (
    <main id="home" className={styles.main}>
      <section className={styles.cover_container}>
        <div className={styles.image_container_wrapper}>
          <div className={styles.image_container_bg}>
            <motion.img
              ref={ref}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.ceo_img}
              src="/images/ceo/bka.png"
            />
          </div>
        </div>
        <div className={styles.details_container}>
          <motion.p
            ref={ref}
            animate={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={styles.i_am}
          >
            I AM
          </motion.p>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.name}
          >
            BLESS KOFI ASIEDU
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.title}
          >
            <span className={styles.title_tag}>
              <Typewriter
                words={[
                  "COUNSELLOR",
                  "PROFESSIONAL THERAPIST",
                  "LOVELIFE COACH",
                  "CONFERENCE SPEAKER",
                  "CAREER COACH",
                ]}
                loop={5}
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className={styles.blinking_cursor}></span>
            </span>
          </motion.h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.paragraph}
          >
            Find Direction, Not Speed: Save Time, Money & Resources with
            Professional Guidance and Support
          </motion.p>
          <Link
            href="https://calendar.app.google/jBKqaycA9oxfgCq88"
            target="blank"
          >
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.button}
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>
      </section>
      <div className={styles.experience_section}>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number} ref={ref}>
            0{experience}
          </h2>
          <p className={styles.ex_card_text}>YEARS OF EXPERIENCE</p>
        </div>
        <div className={styles.ex_card}>
          <h2
            className={`${styles.ex_card_number} ${styles.special}`}
            ref={ref}
          >
            {client}+
          </h2>
          <p className={styles.ex_card_text}>SATISFIED CLIENTS</p>
        </div>
        <div className={styles.ex_card}>
          <h2 className={styles.ex_card_number}>0{awards}</h2>
          <p className={styles.ex_card_text}>AWARDS WON</p>
        </div>
      </div>
    </main>
  );
}
