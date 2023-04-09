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
    if (theme.mode === 'light') {
      setTheme({
        mode: 'dark',
        className: 'bx bxs-sun',
        dataLabel: 'Switch to Light Mode'
      });
      document.documentElement.style.setProperty('--background-color-light', '#000000');
      document.documentElement.style.setProperty('--background-color-lighten', '#290F09');
      document.documentElement.style.setProperty('--background-color-dark', '#EAE7E6');
      document.documentElement.style.setProperty('--background-color-darken', '#FFFAFA');
    } else {
      setTheme({
        mode: 'light',
        className: 'bx bxs-moon',
        dataLabel: 'Switch to Dark Mode'
      });
      document.documentElement.style.setProperty('--background-color-light', '#EAE7E6');
      document.documentElement.style.setProperty('--background-color-lighten', '#FFFAFA');
      document.documentElement.style.setProperty('--background-color-dark', '#000000');
      document.documentElement.style.setProperty('--background-color-darken', '#290F09');
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