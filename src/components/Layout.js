import React from 'react';
import './Layout.css';

function Layout() {
  return (
    <div className="container">
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

export default Layout;
