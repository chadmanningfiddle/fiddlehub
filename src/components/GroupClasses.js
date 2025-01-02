import React from 'react';
import './GroupClasses.css';

function GroupClasses() {
  return (
    <div className="group-classes">
      <h1>Group Fiddle Classes</h1>
      <div className="content">
        <h2>Learn Together, Play Together</h2>
        <p>Join our community of fiddle enthusiasts in group learning sessions</p>
        
        <div className="class-options">
          <h3>Available Classes</h3>
          <div className="class-type">
            <h4>Beginner Group</h4>
            <p>Perfect for those just starting their fiddle journey</p>
            <ul>
              <li>Basic bow techniques</li>
              <li>First position notes</li>
              <li>Simple tunes and rhythms</li>
            </ul>
          </div>
          
          <div className="class-type">
            <h4>Intermediate Ensemble</h4>
            <p>For players ready to explore traditional tunes</p>
            <ul>
              <li>Traditional repertoire</li>
              <li>Group performance skills</li>
              <li>Music theory fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupClasses;
