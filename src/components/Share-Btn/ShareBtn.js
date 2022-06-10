import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./ShareBtnStyles.css";

const ShareBtn = () => {
  return (
    <div className="share-btn-container">
      <a
        target="_blank"
        href="https://www.facebook.com/demmedya/"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="facebook" icon={faFacebook} />
      </a>

      <a
        target="_blank"
        href="https://www.instagram.com/accounts/login/?next=/medyadem/"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="instagram" icon={faInstagram} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/dem-medya/about/"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
      <a target="_blank" href="https://wa.me/905327162217" rel="noreferrer">
        <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default ShareBtn;
