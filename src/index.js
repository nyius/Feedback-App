import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './scss/base.scss';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);

reportWebVitals();
