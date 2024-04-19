"use client";
import { useState } from "react";
// import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar({ sections }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.container}>
      <nav className={styles.nav_container}>
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="/images/nav_icons/lovelifelogo.png"
            alt="Logo"
          />
        </div>

        <ul className={styles.navlink_container}>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.navlink}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <div className={styles.button_container}>
          <button className={styles.button}>Book Appointment</button>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.icon_container}
        >
          <img
            src={
              isOpen
                ? "/images/nav_icons/navicon_opened.png"
                : "/images/nav_icons/navicon_closed.png"
            }
            className={styles.icon}
            alt="open close icon"
          />
        </div>
      </nav>

      {isOpen && (
        <ul className={styles.mobile_nav_container}>
          {sections.map((section) => (
            <li key={section.id} className={styles.mobile_navlink}>
              {section.title}
            </li>
          ))}
          <div className={styles.mobilebutton_container}>
            <button className={styles.mobile_button}>Book Appointment</button>
          </div>
        </ul>
      )}
    </header>
  );
}
