import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'boxicons/css/boxicons.min.css';

export { default as About } from './components/About/About';
export { default as Contact } from './components/Contact/Contact';
export { default as Education } from './components/Education/Education';
export { default as Experience } from './components/Experience/Experience';
export { default as Home } from './components/Home/Home';
export { default as NavBar } from './components/NavBar/NavBar';
export { default as NotFound } from './components/NotFound/NotFound';
export { default as Skills } from './components/Skills/Skills';

ReactDOM.render(<App />, document.getElementById('root'));