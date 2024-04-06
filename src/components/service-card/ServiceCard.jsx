import React from "react";
import styles from "./serviceCard.module.scss";

const ServiceCard = ({ cardName, cardImage }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={cardImage} alt="" />
      <p className={styles.service}>{cardName}</p>
    </div>
  );
};

export default ServiceCard;
