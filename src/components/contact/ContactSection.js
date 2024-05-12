"use client";
import styles from "./contact.module.scss";
import { FieldValues, useForm } from "react-hook-form";

export default function ContactSection() {
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
      <h2 className={styles.header}>CONTACT ME</h2>
      <p className={styles.credentials}>
        Counselling Psychologist | Lovelife Coach | Therapist | Lecturer
      </p>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}></div>
        <div className={styles.form_container}>
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
        </div>
      </div>
    </div>
  );
}
