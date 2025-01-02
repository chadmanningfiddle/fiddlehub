import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PrivateLessons from './components/PrivateLessons';
import GroupClasses from './components/GroupClasses';
import FiddleShack from './components/FiddleShack';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private-lessons" element={<PrivateLessons />} />
        <Route path="/group-classes" element={<GroupClasses />} />
        <Route path="/fiddle-shack" element={<FiddleShack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
