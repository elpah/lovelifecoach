"use client";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.scss";

export default function ContactSection() {
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
              <FaPhone className={styles.fa_icon} />
            </div>
            <p className={styles.card_text}>Phone</p>
          </div>
          <div className={styles.contact_card}>
            <div className={styles.fa_container}>
              <FaLinkedin className={styles.fa_icon} />
            </div>

            <p className={styles.card_text}>LinkedIn</p>
          </div>
          <div className={styles.contact_card}>
            <div className={styles.fa_container}>
              <FaEnvelope className={styles.fa_icon} />
            </div>

            <p className={styles.card_text}>Email</p>
          </div>
        </div>
        <p className={styles.sub_text}>
          If you would like some lorem ipsum test or more lorem ipsim dont
          hesitate to contact me for treatment. Please do not hesitate to
          contact me. <br />
          I'd love to hear from you.
        </p>
      </div>
      <div className={styles.contact_form_container}>
        <form className={styles.form}>
          <h1 className={styles.form_header}> Send me a message</h1>
          <input className={styles.form_input} placeholder="Your name" />
          <input className={styles.form_input} placeholder="Subject" />
          <input className={styles.form_input} placeholder="Email" />
          <input
            className={styles.form_input}
            placeholder="Your Phone Number"
          />
          <textarea className={styles.form_textarea} placeholder="Message" />
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
