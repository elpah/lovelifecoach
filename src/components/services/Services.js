import styles from "./services.module.scss";
import ServiceCard from "@/components/service-card/ServiceCard";
import { FaCheck, FaQuestion } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      serviceName: "Individual and Group Counselling",
      serviceImage:
        "https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4=",
    },
    {
      serviceName: "Relationship Counselling",
      serviceImage:
        "https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4=",
    },
    {
      serviceName: "Career Guidance and counselling",
      serviceImage:
        "https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4=",
    },
    {
      serviceName: "Pre-marital Counselling",
      serviceImage:
        "https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4=",
    },
  ];
  return (
    <div id="services" className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <h2 className={styles.header_shadow}>SERVICES</h2>
          <h3 className={styles.name}>SERVICES</h3>
        </div>
        <p className={styles.services_paragraph}>
          Explore the significance of counselling in promoting mental health,
          emotional well-being, and personal growth. Bless Kofi Asiedu helps you
          heal past hurts and equips you with the tools to build fulfilling,
          lasting relationships
        </p>
        {/* //Individual Counselling 
        group coinselling
         carrear coaching conference
        speaking and Facilitating */}
        <div className={styles.services_container}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}
