import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <span>Copyright &copy; 2019 | Frida Rosengren</span>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/frida-rosengren-5440a311a/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/fridarosengren">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/fridarosengren/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <ScrollTopButton />
    </footer>
  );
};

export default Footer;
