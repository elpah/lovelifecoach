"use client";
import styles from "./contact.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const { ref, inView } = useInView({ once: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      await emailjs
        .send("service_hu5emdb", "template_cgezxxo", data, "uZUcPqeRan5awHad7")
        .then(() => {
          reset();
          notify();
        });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }

  return (
    <div id="contact" className={styles.container}>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={styles.header}
      >
        CONTACT ME
      </motion.h2>

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={styles.credentials}
      >
        Counselling Psychologist | Lovelife Coach | Therapist | Lecturer
      </motion.p>

      <div className={styles.contact_container}>
        <motion.div className={styles.form_container}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={styles.form_input}
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <p className={styles.error}>The name field is required</p>
            )}
            <div className={styles.email_phone}>
              <input
                className={styles.form_input}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "invalid format",
                  },
                })}
                placeholder="Email"
              />
              <input
                className={styles.form_input}
                {...register("phone")}
                placeholder="Phone Number"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className={styles.error}>The email field is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className={styles.error}>Invalid email format</p>
            )}

            <input
              className={styles.form_input}
              placeholder="Subject"
              {...register("subject")}
            />

            <textarea
              className={styles.form_textarea}
              placeholder="Leave a message"
              {...register("message", {
                required: true,
                minLength: 5,
              })}
            />
            {errors.message?.type === "required" && (
              <p className={styles.error}>The message field is required</p>
            )}
            {errors.message?.type === "minLength" && (
              <p className={styles.error}>
                Minimum lenght should be 5 characters
              </p>
            )}
            <button className={styles.submit}>Send</button>
          </form>
          <div className={styles.email_phone_container}>
            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="/images/email_icon.png"
                alt="email icon"
              />
              <div className={styles.label_details_container}>
                <p className={styles.label_name}>EMAIL</p>
                <p className={styles.label_value}>blessasiedu@gmail.com</p>
              </div>
            </div>
            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="images/phone_icon.png"
                alt="phone icon"
              />
              <div className={styles.label_details_container}>
                <p className={styles.label_name}>PHONE</p>
                <p className={styles.label_value}>+23324748293</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={styles.contact_img}>
          <img
            className={styles.img}
            src="/images/ceo/contactimg.png"
            alt="contact image"
          />
        </div>
      </div>
    </div>
  );
}
