import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Popup } from '../../components';
import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>Work Experience</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list"
        >
          {skills.map((skill, index) => (
            <div
              // key={skill.name}
              key={`${skill.name}_${index}`}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <motion.img src={urlFor(skill.icon)} alt={skill.name}
                  whileInView={{
                    scale: [0, 1.5,1]}} //, rotate: [0, 360]
                    transition={{duration:5, ease: [0.4, 0, 0.6, 1]}} //, repeat:Infinity
                
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              // key={experience.year}
              key={`${experience.name}_${index}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tip
                      // data-for={work.name}
                      key={`${work.name}+${index}`}
                    >
                      <Popup title={work.name} workDescription={work.desc}/>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, 'app__skills'),
  'experience',
  'app__whitebg',
);