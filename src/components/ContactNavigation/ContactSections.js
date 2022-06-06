import React from "react";

import styles from "./ContactSections.module.css";
import {
  AiFillTwitterCircle,
  AiOutlineCompass,
  AiOutlineDownSquare,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineFacebook,
} from "react-icons/ai";

const ContactSections = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.title}>
        <h2>İletişime Geç</h2>
      </div>
      <div className={styles.box}>
        {/* Form */}
        <div className={`${styles.contact} ${styles.form}`}>
          <h3>İletişim Formu</h3>
          <form>
            <div className={styles.formBox}>
              <div className={styles.row50}>
                <div className={styles.inputBox}>
                  <span>Ad</span>
                  <input type="text" placeholder="Adınız" />
                </div>
                <div className={styles.inputBox}>
                  <span>Soyad</span>
                  <input type="text" placeholder="Soyadınız" />
                </div>
              </div>

              <div className={styles.row50}>
                <div className={styles.inputBox}>
                  <span>Email</span>
                  <input type="text" placeholder="Email adresiniz" />
                </div>
                <div className={styles.inputBox}>
                  <span>Tel No</span>
                  <input type="text" placeholder="555 444 3322" />
                </div>
              </div>

              <div className={styles.row100}>
                <div className={styles.inputBox}>
                  <span>Mesaj</span>
                  <textarea placeholder="Mesajınızı yazın..."></textarea>
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
                <a className={styles.InfoA} href="#">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a className={styles.InfoA} href="#">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a className={styles.InfoA} href="#">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a className={styles.InfoA} href="#">
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className={`${styles.contact} ${styles.map}`}></div>
      </div>
    </div>
  );
};

export default ContactSections;
