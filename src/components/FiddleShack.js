import React from 'react';
import './FiddleShack.css';

function FiddleShack() {
  return (
    <div className="fiddle-shack">
      <h1>Welcome to the Fiddle Shack</h1>
      <div className="content">
        <h2>Learn Traditional Fiddle Music</h2>
        <p>Join us for an authentic fiddle learning experience</p>
        <div className="features">
          <h3>What We Offer</h3>
          <ul>
            <li>One-on-one instruction</li>
            <li>Traditional repertoire</li>
            <li>Technique development</li>
            <li>Music theory basics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FiddleShack;
