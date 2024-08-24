"use client";
import styles from "./contact.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { ref, inView } = useInView({ once: true });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const getStatusMessage = () => {
    switch (submissionStatus) {
      case "sending":
        return "Sending...";
      case "success":
        return "Email successfully sent!";
      case "error":
        return "Failed to send email. Please try again.";
      default:
        return null;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    setSubmissionStatus("sending");
    try {
      await emailjs.send(
        "service_b31n8mg",
        "template_fd086f8",
        data,
        "uZUcPqeRan5awHad7"
      );
      reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmissionStatus("error");
    }
  }

  const handleChange = () => {
    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

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
              onChange={handleChange}
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
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className={styles.form_input}
                {...register("phone")}
                placeholder="Phone Number"
                onChange={handleChange}
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
              onChange={handleChange}
            />

            <textarea
              className={styles.form_textarea}
              placeholder="Leave a message"
              {...register("message", {
                required: true,
                minLength: 5,
              })}
              onChange={handleChange}
            />
            {errors.message?.type === "required" && (
              <p className={styles.error}>The message field is required</p>
            )}
            {errors.message?.type === "minLength" && (
              <p className={styles.error}>
                Minimum length should be 5 characters
              </p>
            )}
            <button
              className={styles.submit}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
            {submissionStatus && (
              <p
                className={`${styles.status} ${
                  submissionStatus === "success"
                    ? styles.success
                    : submissionStatus === "error"
                    ? styles.error
                    : ""
                }`}
              >
                {getStatusMessage()}
              </p>
            )}
          </form>
          <div className={styles.email_phone_container}>
            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="/images/email_icon.png"
                alt="email icon"
              />
              <a href="mailto:wkasiedu@gmail.com">
                <div className={styles.label_details_container}>
                  <p className={styles.label_name}>EMAIL</p>
                  <p className={styles.label_value}>wkasiedu@gmail.com</p>
                </div>
              </a>
            </div>

            <div className={styles.lable_container}>
              <img
                className={styles.label_icon}
                src="/images/phone_icon.png"
                alt="phone icon"
              />
              <a href="tel:+233242750713">
                <div className={styles.label_details_container}>
                  <p className={styles.label_name}>PHONE</p>
                  <p className={styles.label_value}>+233242750713</p>
                </div>
              </a>
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
