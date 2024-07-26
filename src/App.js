import React, { useState } from 'react';
import { About, Contact, Education, Experience, Home, NavBar, NotFound, Skills } from './index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState({
    mode: 'light',
    className: 'bx bxs-moon',
    dataLabel: 'Switch to Dark Mode'
  });
  const toggleTheme = () => {
    const style = document.documentElement.style;
    if (theme.mode === 'light') {
      setTheme({
        mode: 'dark',
        className: 'bx bxs-sun',
        dataLabel: 'Switch to Light Mode'
      });
      style.setProperty('--background-page-color', '#131313');
      style.setProperty('--navbar-bg-color', '#3B6A4A');
      style.setProperty('--navbar-hover-color', '#5F9E80');
      style.setProperty('--title-color', '#2ac670');
      style.setProperty('--subtitle-color', '#7bf080');
      style.setProperty('--text-color', '#fff');
      style.setProperty('--image-circle-color', 'rgba(123, 240, 128, 0.8)');
      style.setProperty('--input-color', '#000000');
      style.setProperty('--heading-color', '#EAE7E6');
      style.setProperty('--skills-bg-image', 'linear-gradient(140deg, rgba(123, 240, 128, 0.15), rgba(255, 255, 255, .1) 58%)');
    } else {
      setTheme({
        mode: 'light',
        className: 'bx bxs-moon',
        dataLabel: 'Switch to Dark Mode'
      });
      style.setProperty('--background-page-color', '#FFFAFA');
      style.setProperty('--navbar-bg-color', '#293276');
      style.setProperty('--navbar-hover-color', '#4176a4');
      style.setProperty('--title-color', '#293276');
      style.setProperty('--subtitle-color', '#290f09');
      style.setProperty('--text-color', '#4176a4');
      style.setProperty('--image-circle-color', 'rgba(0, 62, 117, 0.8)');
      style.setProperty('--input-color', '#EAE7E6');
      style.setProperty('--heading-color', '#000000');
      style.setProperty('--skills-bg-image', '');
    }
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div className="darkMode_container" data-label={theme.dataLabel}>
        <button onClick={toggleTheme}>
          <i className={theme.className}></i>
        </button>
      </div>
    </>
  );
}

export default App;