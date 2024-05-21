"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";

export default function Navbar({ sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = navbarRef.current.offsetHeight;

    if (section) {
      const offset = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbarHeight}px`
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.container}>
      <nav ref={navbarRef} className={styles.nav_container}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 360 }}
          transition={{ duration: 1 }}
          className={styles.logo_container}
        >
          <img
            className={styles.logo}
            src="/images/nav_icons/lovelifelogo.png"
            alt="Logo"
          />
        </motion.div>

        <ul className={styles.navlink_container}>
          {sections.map((section) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1 }}
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.navlink}
            >
              {section.title}
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.button_container}
        >
          <button className={styles.button}>Book Appointment</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -360 }}
          transition={{ duration: 1 }}
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
        </motion.div>
      </nav>

      {isOpen && (
        <ul className={styles.mobile_nav_container}>
          {sections.map((section) => (
            <li
              key={section.id}
              className={styles.mobile_navlink}
              onClick={() => {
                setIsOpen(!isOpen);
                scrollToSection(section.id);
              }}
            >
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
