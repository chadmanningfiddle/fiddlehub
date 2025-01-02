import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="home">
      <img src="/images/wooden-fiddle.jpg" alt="Wooden Fiddle" className="fiddle-logo" />
      <h1>My Fiddle Hub</h1>
      <nav>
        <a href="/private-lessons" className="nav-button">Private Lessons</a>
        <a href="/group-classes" className="nav-button">Group Classes</a>
        <a href="/history" className="nav-button">My History</a>
      </nav>
    </div>
  );
}

export default Home;
