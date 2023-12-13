import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import VideoPage from './components/VideoPage';
import Homepage from './components/Homepage';
import FeelLucky from './components/FeelLucky';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/lucky" element={<FeelLucky />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
