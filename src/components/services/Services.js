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
      serviceImage: "/images/services/individual.webp",
      serviceIcon: "/images/services/individual-icon.svg",
    },
    {
      serviceName: "Group Counselling",
      serviceImage: "/images/services/group.webp",
      serviceIcon: "/images/services/group-icon.svg",
    },
    {
      serviceName: "Career Coaching",
      serviceImage: "/images/services/career.webp",
      serviceIcon: "/images/services/career-icon.svg",
    },
    {
      serviceName: "Conference Speaking",
      serviceImage: "/images/services/conference.webp",
      serviceIcon: "/images/services/conference-icon.svg",
    },
    {
      serviceName: "Facilitating",
      serviceImage: "/images/services/facilitating.webp",
      serviceIcon: "/images/services/facilitating-icon.svg",
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
