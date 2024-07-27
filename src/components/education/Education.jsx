// src/components/Experience.js
import React from 'react';
import Timeline from './Timeline';

const Experience = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Software Developer",
      duration: "Jan 2019 - Mar 2021",
      description: "Worked on various projects using Java, JavaScript, MySQL, and IBM BPM."
    },
    {
      company: "Your Next Company",
      role: "Your Role",
      duration: "Apr 2021 - Present",
      description: "Your description"
    }
    // Add more experiences here
  ];

  return (
    <section className='education section' id='education'>
      <h2 className='section__title'>Education</h2>
      <Timeline experiences={experiences} />
    </section>
  );
};

export default Experience;
