import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

export { default as About } from './components/About/About';
export { default as Contact } from './components/Contact/Contact';
export { default as Education } from './components/Education/Education';
export { default as Experience } from './components/Experience/Experience';
export { default as Home } from './components/Home/Home';
export { default as NavBar } from './components/NavBar/NavBar';
export { default as NotFound } from './components/NotFound/NotFound';
export { default as Skills } from './components/Skills/Skills';

const root = createRoot(document.getElementById('root'));
root.render(<App />);