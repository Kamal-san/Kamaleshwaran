import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from "./emailIcon.png";
import linkedin from "./linkedinIcon.png";
import github from "./githubIcon.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="email" />
          <a href="mailto:kamaleshw046@gmail.com">kamaleshw046@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src= {linkedin} alt="linkedin logo" />
          <a target="new" href="https://www.linkedin.com/in/kamaleshwaran-e-57433721a?trk=contact-info">Kamaleshwaran</a>
        </li>

        <li className={styles.link}>
          <img src= {github} alt="gitHub logo" />
          <a target="new" href="https://github.com/Kamal-san">Kamal-san</a>
        </li>
        
        
      </ul>
    </footer>
  );
};
