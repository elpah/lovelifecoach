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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.header_shadow}
          >
            ABOUT ME
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.name}
          >
            BLESS KOFI ASIEDU
          </motion.h3>
        </div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          Bless Kofi Asiedu is a seasoned counselling professional, licensed
          with the Ghana Psychology Council, with several years of experience in
          counselling. He has achieved remarkable results and earned numerous
          referrals.
          <br />
          <br />
          Bless serves as CEO of Kissel Group and COO of Express Group. As a
          lecturer, he teaches Counselling, Psychology, and Education courses at
          two universities in Ghana.
          <br />
          <br />
          His natural passion for counselling, combined with his expertise and
          experience, makes him a sought-after professional. Combining
          therapeutic techniques with love coaching expertise, Bless Kofi
          empowers you to build healthy relationships and create the fulfilling
          love life you deserve.
        </motion.p>
        <Link
          href="https://www.linkedin.com/in/bless-kofi-asiedu-ba-pgde-mphil-b16240b5/"
          target="blank"
        >
          <motion.button
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
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
          12
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
