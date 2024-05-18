"use client";
import Link from "next/link";
import styles from "./aboutme.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({ once: true });
  return (
    <div id="about" className={styles.container}>
      <div className={styles.about_container}>
        <div className={styles.header_container}>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={styles.header_shadow}
          >
            ABOUT ME
          </motion.h2>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={styles.name}
          >
            BLESS KOFI ASIEDU
          </motion.h3>
        </div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={styles.text}
        >
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
        </motion.p>
        <Link
          href="https://www.linkedin.com/in/bless-kofi-asiedu-ba-pgde-mphil-b16240b5/"
          target="blank"
        >
          <motion.button
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={styles.button}
          >
            LINKEDIN
          </motion.button>
        </Link>
      </div>
      <div className={styles.ex_container}>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.ex_number}
        >
          05
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.ex_text}
        >
          YEARS OF EXPERIENCE
        </motion.p>
      </div>
    </div>
  );
}
