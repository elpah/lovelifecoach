import React from "react";
import styles from "./serviceCard.module.scss";

const ServiceCard = ({ cardName, cardImage, cardIcon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img className={styles.image} src={cardImage} alt="" />
      </div>
      <div className={styles.card_name_container}>
        <p className={styles.card_name}>{cardName}</p>
      </div>
      <img className={styles.card_icon} src={cardIcon} />
    </div>
  );
};

export default ServiceCard;
