"use client";
import styles from "./services.module.scss";
import ServiceCard from "@/components/service-card/ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Services() {
  const { ref, inView } = useInView();

  const services = [
    {
      serviceName: "Individual Counselling",
      serviceImage: "/images/services/individual.png",
      serviceIcon: "/images/services/individual-icon.png",
    },
    {
      serviceName: "Group Counselling",
      serviceImage: "/images/services/group.png",
      serviceIcon: "/images/services/group-icon.png",
    },
    {
      serviceName: "Career Coaching",
      serviceImage: "/images/services/career.png",
      serviceIcon: "/images/services/career-icon.png",
    },
    {
      serviceName: "Conference Speaking",
      serviceImage: "/images/services/conference.png",
      serviceIcon: "/images/services/conference-icon.png",
    },
    {
      serviceName: "Facilitating",
      serviceImage: "/images/services/facilitating.png",
      serviceIcon: "/images/services/facilitating-icon.png",
    },
  ];
  return (
    <div id="services" className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={styles.header_shadow}
          >
            SERVICES
          </motion.h2>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={styles.name}
          >
            SERVICES
          </motion.h3>
        </div>
        <p className={styles.services_paragraph}>
          Explore the significance of counselling in promoting mental health,
          emotional well-being, and personal growth. Bless Kofi Asiedu helps you
          heal past hurts and equips you with the tools to build fulfilling,
          lasting relationships
        </p>

        <div className={styles.services_container}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              cardName={service.serviceName}
              cardImage={service.serviceImage}
              cardIcon={service.serviceIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
