"use client";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.scss";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>CONTACT ME</h2>
      <p className={styles.credentials}>
        Health Psychologist | Counsellor | Lovelife Coach | Therapist
      </p>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}></div>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <input className={styles.form_input} placeholder="Name" />
            <div className={styles.email_phone}>
              <input className={styles.form_input} placeholder="Email" />
              <input className={styles.form_input} placeholder="Phone Number" />
            </div>

            <input className={styles.form_input} placeholder="Subject" />

            <textarea
              className={styles.form_textarea}
              placeholder="Leave a message"
            />
            <button className={styles.submit}>Send</button>
          </form>
          <div className={styles.email_phone_container}>
            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="/images/email_icon.png"
                alt="email icon"
              />
              <div className={styles.label_details_container}>
                <p className={styles.label_name}>EMAIL</p>
                <p className={styles.label_value}>blessasiedu@gmail.com</p>
              </div>
            </div>
            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="images/phone_icon.png"
                alt="phone icon"
              />
              <div className={styles.label_details_container}>
                <p className={styles.label_name}>PHONE</p>
                <p className={styles.label_value}>+23324748293</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
