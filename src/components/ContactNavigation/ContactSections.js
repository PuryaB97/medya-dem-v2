import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactSections.module.css";
import {
  AiFillTwitterCircle,
  AiOutlineCompass,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineFacebook,
} from "react-icons/ai";

const ContactSections = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ksqji6b",
        "template_pau8i19",
        form.current,
        "fbge5noF1p48IIoQb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Mailiniz başarılı bir şekilde gönderildi!");
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.title}>
        <h2>İletişime Geç</h2>
      </div>
      <div className={styles.box}>
        {/* Form */}
        <div className={`${styles.contact} ${styles.form}`}>
          <h3>İletişim Formu</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.formBox}>
              <div className={styles.row50}>
                <div className={styles.inputBox}>
                  <span>Ad</span>
                  <input
                    type="text"
                    placeholder="Adınız"
                    required
                    name="user_name"
                  />
                </div>
                <div className={styles.inputBox}>
                  <span>Soyad</span>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    required
                    name="last_name"
                  />
                </div>
              </div>

              <div className={styles.row50}>
                <div className={styles.inputBox}>
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="Email adresiniz"
                    required
                    name="user_email"
                  />
                </div>
                <div className={styles.inputBox}>
                  <span>Tel No</span>
                  <input
                    type="text"
                    placeholder="555 444 3322"
                    required
                    name="user_no"
                  />
                </div>
              </div>

              <div className={styles.row100}>
                <div className={styles.inputBox}>
                  <span>Mesaj</span>
                  <textarea
                    type="text"
                    placeholder="Mesajınızı yazın..."
                    name="message"
                  ></textarea>
                </div>
              </div>

              <div className={styles.row100}>
                <div className={styles.inputBox}>
                  <input type="submit" value="Gönder" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className={`${styles.contact} ${styles.info}`}>
          <h3>İletişim Bilgileri</h3>
          <div className={styles.infoBox}>
            <div className={styles.Information}>
              <span className={styles.icon}>
                <AiOutlineCompass />
              </span>
              <p className={styles.InfoP}>
                Ankara, Çankaya <br /> Türkiye
              </p>
            </div>
            <div className={styles.Information}>
              <span className={styles.icon}>
                <AiOutlineMail />
              </span>
              <a className={styles.InfoA} href="mailto:bilgi@demmedya.com">
                bilgi@demmedya.com
              </a>
            </div>
            <div className={styles.Information}>
              <span className={styles.icon}>
                <AiOutlinePhone />
              </span>
              <a className={styles.InfoA} href="tel:+090 532 716 2217">
                0 532 716 2217
              </a>
            </div>
            <ul className={styles.sci}>
              <li>
                <a
                  className={styles.InfoA}
                  href="https://www.facebook.com/demmedya/"
                  target={`_blank`}
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a
                  className={styles.InfoA}
                  href="https://www.instagram.com/accounts/login/?next=/medyadem/"
                  target={`_blank`}
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a className={styles.InfoA} href="#">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a
                  className={styles.InfoA}
                  href="https://www.linkedin.com/company/dem-medya/about/"
                  target={`_blank`}
                >
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className={`${styles.contact} ${styles.map}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.178391114865!2d32.825361315317075!3d39.892638095270115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345f59a658cd7%3A0x1b25cbf4cd9c3e50!2zQcWfYcSfxLEgw5Z2ZcOnbGVyLCAxMzI4LiBTay4gTm86MTQsIDA2NDYwIMOHYW5rYXlhL0Fua2FyYQ!5e0!3m2!1str!2str!4v1654586071169!5m2!1str!2str"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSections;
