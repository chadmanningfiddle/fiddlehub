import React from 'react';
import './PrivateLessons.css';

function PrivateLessons() {
  return (
    <div className="private-lessons">
      <h1>Private Fiddle Lessons</h1>
      <div className="content">
        <h2>One-on-One Instruction</h2>
        <p>Personalized fiddle instruction tailored to your goals and skill level</p>
        
        <div className="lesson-info">
          <h3>Lesson Details</h3>
          <div className="lesson-features">
            <ul>
              <li>30 or 60-minute sessions</li>
              <li>Customized learning path</li>
              <li>Flexible scheduling</li>
              <li>All skill levels welcome</li>
            </ul>
          </div>
          
          <div className="lesson-focus">
            <h4>Areas of Focus</h4>
            <ul>
              <li>Traditional fiddle techniques</li>
              <li>Music theory</li>
              <li>Ear training</li>
              <li>Performance skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateLessons;
