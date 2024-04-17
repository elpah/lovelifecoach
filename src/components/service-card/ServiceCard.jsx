import React from "react";
import styles from "./serviceCard.module.scss";

const ServiceCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src="https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4="
          alt=""
        />
      </div>
      <div className={styles.card_name_container}>
        <p className={styles.card_name}>Individual Counselling</p>
      </div>
      <img
        className={styles.card_icon}
        src="/images/services/service_icon.png"
      />
    </div>
  );
};

export default ServiceCard;
