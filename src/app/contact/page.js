"use client";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.scss";

export default function page() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_info}>
        <h2 className={styles.header}>Contact</h2>
        <p className={styles.name}>BLESS KOFI ASIEDU</p>
        <p className={styles.credentials}>
          Health Psychologist | Counsellor | Lovelife Coach | Therapist
        </p>
        <div className={styles.card_container}>
          <div className={styles.contact_card}>
            <div className={styles.fa_container}>
              {" "}
              <FaPhone className={styles.fa_icon} />
            </div>
            <p className={styles.card_text}>+233 23 2930293</p>
          </div>
          <div className={styles.contact_card}>
            <div className={styles.fa_container}>
              <FaLinkedin className={styles.fa_icon} />
            </div>

            <p className={styles.card_text}>BKA</p>
          </div>
          <div className={styles.contact_card}>
            <div className={styles.fa_container}>
              <FaEnvelope className={styles.fa_icon} />
            </div>

            <p className={styles.card_text}>BKA@fiQEAFD.COM</p>
          </div>
        </div>
        <p className={styles.sub_text}>
          If you would like some lorem ipsum test or more lorem ipsim dont
          hesitate to contact me
        </p>
      </div>
      <div className={styles.contact_form}>
        <form>
          <label>Name</label>
        </form>
      </div>
    </div>
  );
}
