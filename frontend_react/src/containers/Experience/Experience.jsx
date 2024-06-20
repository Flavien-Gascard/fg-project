import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Popup } from '../../components';
import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

  }, []);

  return (
    <>
      <h2 className="head-text"><span>Work Experience</span></h2>

      <div className="experience_container">
        <div className="experience">
          {experiences.map((experience, index) => (
            <motion.div
              className="experience_item"
              // key={experience.year}
              key={`${experience.name}_${index}`}
            >
              <div className="experience_year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="experience_works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="experience_work"
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
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__whitebg',
);