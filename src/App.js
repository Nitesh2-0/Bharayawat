import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer className="bg-gray-800" />
    </BrowserRouter>
  );

};

export default App;
