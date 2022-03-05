import React from 'react';
import { Home }from './features/home/Home';
import { Detail } from './features/detail/Detail';
import { Units } from './features/units/Units';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './features/navigation/Navigation';

export function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Units" element={<Units />} />
        <Route path="/Units/:unitId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
