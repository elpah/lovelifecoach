import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.cover}>
      <div className={styles.footer_container}>
        <div className={styles.logo_container}>
          <img src="/images/nav_icons/lovelifelogo.png" alt="Footer logo" />
        </div>
        <ul className={styles.navlist_container}>
          <li className={styles.list_item}>Home</li>
          <li className={styles.list_item}>About</li>
          <li className={styles.list_item}>Services</li>
          <li className={styles.list_item}>Contact</li>
        </ul>
        <div className={styles.socials_container}>
          <img
            className={styles.icon}
            src="/images/socials_icons/facebook.png"
            alt="facebook icon"
          />
          <img
            className={styles.icon}
            src="/images/socials_icons/instagram.png"
            alt="instagram icon"
          />
          <img
            className={styles.icon}
            src="/images/socials_icons/twitter.png"
            alt="twitter icon"
          />
          <img
            className={styles.icon}
            src="/images/socials_icons/linkedin.png"
            alt="linkedin icon"
          />
        </div>
        <span className={styles.bar} />
        <p className={styles.copyright}>©Copyright 2024, Lovelifecoach</p>
      </div>
    </div>
  );
}
