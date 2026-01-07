import styles from "./About.module.css";
import aboutImage from "./undraw_in-the-zone_07y7.svg"; // Importing the SVG

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Left Side - Text Content */}
        <div className={styles.textSection}>
          <div className={styles.education}>
            <h3>Education</h3>
            <p><strong>• Master Of Computer Applications (MCA)</strong></p>
            <p><em>Vellore Institute of Technology, Vellore</em></p>
            <p>2023 – 2025 | <strong>CGPA:</strong> 8.43</p>

            <p><strong>• Bachelor Of Computer Applications (BCA)</strong></p>
            <p><em>Vellore Institute of Technology, Vellore</em></p>
            <p>2020 – 2023 | <strong>CGPA:</strong> 7.59</p>
          </div>

          <div className={styles.certifications}>
            <h3>Certifications</h3>
           <p><strong>• Prompt Engineering: The Complete AI Guide </strong> – Udemy</p>
            <p><strong>• Complete Generative AI course with Langchain and Hugging Face</strong> – Udemy</p>
          </div>
        </div>

        {/* Right Side - SVG Image */}
        <div className={styles.imageSection}>
          <img src={aboutImage} alt="Working in the zone" className={styles.aboutImage} />
        </div>
      </div>
    </section>
  );
};
