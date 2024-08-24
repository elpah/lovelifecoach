"use client";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer({ sections }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = section.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.cover}>
      <div className={styles.footer_container}>
        <div className={styles.logo_container}>
          <img src="/images/nav_icons/lovelifelogo.png" alt="Footer logo" />
        </div>
        <ul className={styles.navlist_container}>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.list_item}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <div className={styles.socials_container}>
          <Link href="https://www.facebook.com/bless.asiedu86" target="blank">
            <img
              className={styles.icon}
              src="/images/socials_icons/facebook.png"
              alt="facebook icon"
            />
          </Link>
          <Link href="https://www.instagram.com/lovelife_coach/" target="blank">
            <img
              className={styles.icon}
              src="/images/socials_icons/instagram.png"
              alt="instagram icon"
            />
          </Link>

          <Link href="https://x.com/_lovelifecoach" target="blank">
            <img
              className={styles.icon}
              src="/images/socials_icons/twitter.png"
              alt="twitter icon"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bless-kofi-asiedu-ba-pgde-mphil-b16240b5/"
            target="blank"
          >
            <img
              className={styles.icon}
              src="/images/socials_icons/linkedin.png"
              alt="linkedin icon"
            />
          </Link>
        </div>
        <span className={styles.bar} />
        <p className={styles.copyright}>©Copyright 2024, Lovelifecoach</p>
      </div>
    </div>
  );
}
