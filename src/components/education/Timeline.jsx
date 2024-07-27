// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = ({ experiences }) => {
  return (
    <section className='timeline section' id='timeline'>
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">{exp.duration}</div>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Timeline;
