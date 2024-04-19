"use client";
import { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.scss";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <li className={styles.navlink}>Home</li>
          <li className={styles.navlink}>About</li>
          <li className={styles.navlink}>Services</li>
          <li className={styles.navlink}>Contact</li>
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
          <li className={styles.mobile_navlink}>Home</li>
          <li className={styles.mobile_navlink}>About</li>
          <li className={styles.mobile_navlink}>Services</li>
          <li className={styles.mobile_navlink}>Contact</li>

          <div className={styles.mobilebutton_container}>
            <button className={styles.mobile_button}>Book Appointment</button>
          </div>
        </ul>
      )}
    </header>
  );
}
