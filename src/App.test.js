import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
