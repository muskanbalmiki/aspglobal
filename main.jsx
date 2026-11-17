import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles/style.css';
import './styles/animations.css';
import './styles/typography.css';
import './styles/theme-light.css';
import './styles/verticals.css';

createRoot(document.getElementById('root')).render(<App />);