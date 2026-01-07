import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

import loanApproval from "./Loan_Approval.png";
import trendChoice from "./trendChoice.png";
import gym from "./gym.png";
import blog from "./blog.jpg";
import chatBot from "./chatBot.png";

const imageMap = {
  "projects/Loan_Approval.png": loanApproval,
  "projects/trendChoice.png": trendChoice,
  "projects/blogspace.png": blog,
  "projects/gym.png": gym,
  "projects/chatBot.png": chatBot
};

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo } = project;

  return (
    <div className={styles.container}>
      
      <div className={styles.imageWrapper}>
        <img
          src={imageMap[imageSrc]}
          alt={`Image of ${title}`}
          className={styles.image}
        />

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demoLink}
        >
          Demo ↗
        </a>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard;
