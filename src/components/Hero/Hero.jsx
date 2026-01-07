import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const name = "Kamaleshwaran E";
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeout = setTimeout(() => {
        setTypedName((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }, 250);
      return () => clearTimeout(timeout);
    }else {
      setTimeout(() => {
        setTypedName("");
        setIndex(0);
      }, 8000); // Wait 5 seconds before restarting
    }
  }, [index, name]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I&apos;m {typedName}</h1>
        <p className={styles.description}>
          A passionate Full-Stack Developer with a strong interest in building scalable web applications and real world AI solutions. 
          Enthusiastic about solving real-world problems using technology and continuously learning new skills.
        </p>
        <div>
          <a href="mailto:kamaleshw046@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a target="new" href="https://drive.google.com/file/d/188s0AjJB76d7Nvqq44tcocNjEA-shIgH/view?usp=sharing" className={styles.contactBtn}>
            CV
          </a>
        </div>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
