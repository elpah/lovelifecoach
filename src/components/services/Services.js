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
    <div className={styles.main_container}>
      <h1 className={styles.header}>
        What do you do when there seem to be nothing to do?
      </h1>
      <p className={styles.paragraph}>
        Explore the significance of counseling in promoting mental health,
        emotional well-being, and personal growth.
      </p>

      <section className={styles.why_section}>
        <div className={styles.why_image_container}>
          <img
            className={styles.why_image}
            src="https://media.istockphoto.com/id/961556200/photo/smiling-african-american-psychiatrist-talking-to-young-couple.jpg?s=612x612&w=0&k=20&c=-rdM2vWMyJzOz_iG88iu1lpBkmobihfr8iRZXc3iXB4="
          />
        </div>
        <div className={styles.why_text_div}>
          <div className={styles.small_header_container}>
            <FaQuestion className={styles.icon} />
            <p className={styles.small_header}>Why you need Counseling</p>
          </div>
          <h2 className={styles.why_header}>
            Your Journey to Wellness Begins Here
          </h2>
          <p className={styles.why_text}>
            We're here to support your personal growth and empower you to find
            lasting peace in a welcoming, friendly atmosphere.
          </p>
          <div className={styles.why_badge_container}>
            <div className={styles.why_badge}>
              <FaCheck className={styles.badge_check} />
              <p className={styles.badge_text}>Counseling since 2005</p>
            </div>
            <div className={styles.why_badge}>
              <FaCheck className={styles.badge_check} />
              <p className={styles.badge_text}>Expertise in Relationships</p>
            </div>
          </div>
        </div>
      </section>
      <h2 className={styles.service_header}>What I do.</h2>

      <div className={styles.service_container}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            cardName={service.serviceName}
            cardImage={service.serviceImage}
          />
        ))}
      </div>
    </div>
  );
}
