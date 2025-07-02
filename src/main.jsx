
// 1) stash the real console.warn
const realWarn = console.warn;


// 2) override to skip anything about onBeforeRender
console.warn = (...args) => {
  if (args.some(a => typeof a === 'string' && a.includes('onBeforeRender'))) {
    return;
  }
  // otherwise, print normally
  realWarn.apply(console, args);
};

// 3) now load the rest of your app
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
